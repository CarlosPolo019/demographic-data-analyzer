const path = require('path');
const { processExcelFile } = require('./excelProcessor');

// Definir la ruta del archivo Excel cargado
const filePath = path.join(__dirname, '../data/uploads/conjunto_de_datos_new.xlsx');
const camposPoblacion = ['POBTOT', 'POBFEM', 'POBMAS'];

// Llamar a la función para procesar el Excel
processExcelFile(filePath,camposPoblacion);
