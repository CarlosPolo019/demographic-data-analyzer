const path = require('path');
const { processExcelFile } = require('./lib/excelProcessor');

// Definir la ruta del archivo Excel cargado
const filePath = path.join(__dirname, 'data/uploads/conjunto_de_datos_new.xlsx');
const camposPoblacion = ['POBTOT', 'POBFEM', 'POBMAS'];  // Campos dinámicos, pueden variar

// Llamar a la función para procesar el Excel
processExcelFile(filePath, camposPoblacion)
  .then(() => console.log('Archivo procesado exitosamente'))
  .catch((err) => console.error('Error procesando el archivo:', err));
