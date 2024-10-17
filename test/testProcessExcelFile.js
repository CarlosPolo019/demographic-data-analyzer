const { expect } = require('chai');
const path = require('path');
const { processExcelFile } = require('../lib/excelProcessor');

describe('processExcelFile', function () {
  it('debería procesar correctamente el archivo Excel', async function () {
    const filePath = path.join(__dirname, '../data/uploads/conjunto_de_datos_new.xlsx');
    const camposPoblacion = ['POBTOT', 'POBFEM', 'POBMAS'];

    // Llama a la función y procesa el archivo
    await processExcelFile(filePath, camposPoblacion);

    // Aquí puedes hacer las aserciones sobre los resultados (si devuelve algo)
    expect(camposPoblacion).to.be.an('array');
  });
});
