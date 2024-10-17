const ExcelJS = require('exceljs');
const path = require('path');

// Diccionario de datos
const diccionarioDatos = [
  { campo: 'ENTIDAD', descripcion: 'Clave de la entidad federativa.' },
  { campo: 'NOM_ENT', descripcion: 'Nombre de la entidad federativa.' },
  { campo: 'MUN', descripcion: 'Clave del municipio.' },
  { campo: 'NOM_MUN', descripcion: 'Nombre del municipio.' },
  { campo: 'LOC', descripcion: 'Clave de la localidad.' },
  { campo: 'NOM_LOC', descripcion: 'Nombre de la localidad.' },
  { campo: 'POBTOT', descripcion: 'Población total.' },
  { campo: 'POBFEM', descripcion: 'Población femenina.' },
  { campo: 'POBMAS', descripcion: 'Población masculina.' }
];

// Función para procesar el archivo Excel en streaming y aceptar campos dinámicos
const processExcelFile = async (excelFilePath, camposPoblacion) => {
  const workbookOriginal = new ExcelJS.stream.xlsx.WorkbookReader(excelFilePath);
  const newWorkbook = new ExcelJS.Workbook();

  const entidadesData = [];
  const municipiosData = [];
  const localidadesData = [];
  const poblacionData = [];

  let columnIndices = {}; // Para almacenar el índice de cada campo
  let isHeaderRow = true; // Bandera para controlar la primera fila de encabezados

  for await (const worksheet of workbookOriginal) {
    for await (const row of worksheet) {
      // Si es la fila de encabezado, mapeamos los índices de las columnas
      if (isHeaderRow) {
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
          // Asignamos el índice de la columna basado en el nombre del encabezado
          if (camposPoblacion.includes(cell.value)) {
            columnIndices[cell.value] = colNumber;
          }
        });
        isHeaderRow = false;
        continue;
      }

      const entidad = row.getCell(1).value;
      const nom_entidad = row.getCell(2).value;
      const municipio = row.getCell(3).value;
      const nom_municipio = row.getCell(4).value;
      const localidad = row.getCell(5).value;
      const nom_localidad = row.getCell(6).value;

      // Evitar duplicados en entidades
      if (!entidadesData.some(e => e.ENTIDAD === entidad)) {
        entidadesData.push({ ENTIDAD: entidad, NOM_ENT: nom_entidad });
      }

      // Evitar duplicados en municipios
      if (!municipiosData.some(m => m.MUN === municipio && m.ENTIDAD === entidad)) {
        municipiosData.push({ MUN: municipio, NOM_MUN: nom_municipio, ENTIDAD: entidad });
      }

      // Evitar duplicados en localidades
      if (!localidadesData.some(l => l.LOC === localidad && l.MUN === municipio)) {
        localidadesData.push({ LOC: localidad, NOM_LOC: nom_localidad, MUN: municipio });
      }

      // Crear un objeto de población dinámicamente basado en los índices encontrados
      const poblacion = { LOC: localidad };
      camposPoblacion.forEach((campo) => {
        const columnIndex = columnIndices[campo];
        poblacion[campo] = row.getCell(columnIndex).value;
      });

      poblacionData.push(poblacion);
    }
  }

  // Crear el archivo Excel de salida
  const entidadesSheet = newWorkbook.addWorksheet('Entidades');
  entidadesSheet.columns = [
    { header: 'ENTIDAD', key: 'ENTIDAD', width: 15 },
    { header: 'NOM_ENT', key: 'NOM_ENT', width: 30 }
  ];
  entidadesSheet.addRows(entidadesData);

  const municipiosSheet = newWorkbook.addWorksheet('Municipios');
  municipiosSheet.columns = [
    { header: 'MUN', key: 'MUN', width: 15 },
    { header: 'NOM_MUN', key: 'NOM_MUN', width: 30 },
    { header: 'ENTIDAD', key: 'ENTIDAD', width: 15 }
  ];
  municipiosSheet.addRows(municipiosData);

  const localidadesSheet = newWorkbook.addWorksheet('Localidades');
  localidadesSheet.columns = [
    { header: 'LOC', key: 'LOC', width: 15 },
    { header: 'NOM_LOC', key: 'NOM_LOC', width: 30 },
    { header: 'MUN', key: 'MUN', width: 15 }
  ];
  localidadesSheet.addRows(localidadesData);

  const poblacionSheet = newWorkbook.addWorksheet('Población');
  const poblacionColumns = [{ header: 'LOC', key: 'LOC', width: 15 }];
  camposPoblacion.forEach(campo => {
    poblacionColumns.push({ header: campo, key: campo, width: 15 });
  });
  poblacionSheet.columns = poblacionColumns;
  poblacionSheet.addRows(poblacionData);

  const diccionarioSheet = newWorkbook.addWorksheet('Diccionario de Datos');
  diccionarioSheet.columns = [
    { header: 'Campo', key: 'campo', width: 30 },
    { header: 'Descripción', key: 'descripcion', width: 50 }
  ];
  diccionarioSheet.addRows(diccionarioDatos);

  // Guardar el nuevo archivo Excel
  const outputFilePath = path.join(__dirname, '../data/nuevo_registro_tablas.xlsx');
  await newWorkbook.xlsx.writeFile(outputFilePath);

  console.log('Nuevo archivo Excel creado en:', outputFilePath);
};

// Exportar la función para ser usada en otros archivos
module.exports = {
  processExcelFile
};
