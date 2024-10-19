
# 📊 Analizador de Datos Demográficos - Librería 📊

Esta librería está diseñada para facilitar el análisis de información demográfica y social a partir de datos del **Censo de Población y Vivienda 2020** del INEGI. Proporciona funciones para procesar archivos en formato Excel y extraer información relevante basado en los campos indicados por el usuario.

## 📦 Instalación

Para instalar la librería en tu proyecto, ejecuta el siguiente comando:

```bash
npm install inegi-demographic-data-analyzer
```

## 🚀 Uso de la Librería

### 1. Descargar el Archivo CSV de INEGI

Antes de procesar los datos, es necesario descargar el archivo CSV con la información demográfica desde la página del **INEGI**. Puedes hacerlo desde el siguiente enlace:

[**Descargar datos del Censo de Población y Vivienda 2020**](https://www.inegi.org.mx/programas/ccpv/2020/#datos_abiertos)

Elige el conjunto de datos que deseas analizar y descárgalo en formato CSV. Luego, utiliza un programa como **Microsoft Excel** o **Google Sheets** para convertir el archivo CSV a formato Excel (`.xlsx`).

### 2. Procesar el Archivo Excel

Una vez que hayas convertido el archivo CSV a Excel, puedes utilizar la librería para procesar los datos. Aquí tienes un ejemplo de cómo hacerlo:

```javascript
const { processExcelFile } = require('inegi-demographic-data-analyzer');

// Define los campos de población que deseas extraer
const camposPoblacion = ['POBTOT', 'POBFEM', 'POBMAS'];

// Define la ruta al archivo Excel cargado
const filePath = './data/uploads/conjunto_de_datos_new.xlsx';

// Llama a la función para procesar el archivo Excel
processExcelFile(filePath, camposPoblacion)
  .then((datos) => {
    console.log('Archivo procesado exitosamente');
    console.log('Datos extraídos:', datos);
  })
  .catch((error) => {
    console.error('Error al procesar el archivo:', error);
  });
```

### 3. Descripción de la Función `processExcelFile`

La función `processExcelFile` recibe la ruta del archivo Excel y una lista de campos demográficos que deseas procesar (como `'POBTOT'`, `'POBFEM'`, etc.). Esta función:

- Procesa el archivo Excel para extraer la información de los campos especificados.
- Crea un nuevo archivo Excel con la información organizada en diferentes hojas: **Entidades**, **Municipios**, **Localidades**, y **Población**.
- Añade una hoja llamada *Diccionario de Datos* que describe los campos disponibles.

### 4. Diccionario de Datos

El *Diccionario de Datos* es una hoja que se añade al archivo Excel generado y contiene una descripción detallada de cada campo disponible, como por ejemplo:

- **ENTIDAD**: Clave de la entidad federativa.
- **NOM_ENT**: Nombre de la entidad federativa.
- **MUN**: Clave del municipio.
- **NOM_MUN**: Nombre del municipio.
- **POBTOT**: Población total.
- **POBFEM**: Población femenina.
- **POBMAS**: Población masculina.

⚠️ **Nota**: La información de la población es dinámica, lo que significa que puedes personalizar los campos que necesitas antes de ejecutar el análisis.

### 5. Configuración de los Campos

Antes de ejecutar el análisis, debes definir los campos de población que deseas procesar en tu proyecto, tal como se muestra en el siguiente ejemplo:

```javascript
const camposPoblacion = ['POBTOT', 'POBFEM', 'POBMAS']; // Puedes agregar más campos según el diccionario de datos
```

Luego puedes procesar el archivo llamando a la función `processExcelFile`.

## 📂 Estructura de la Librería

- **/lib/excelProcessor.js**: Contiene la lógica para leer y procesar el archivo Excel.
- **/data/uploads**: Carpeta donde debes cargar el archivo Excel para que sea procesado.
- **/test**: Carpeta opcional para pruebas unitarias que validan el procesamiento de datos.

## 📦 Dependencias

Las principales dependencias utilizadas en este proyecto son:

- **ExcelJS**: Para la lectura y escritura de archivos Excel.
- **xlsx**: Para la conversión de archivos Excel.
- **csv-parser**: Para procesar archivos CSV en caso de necesidad futura.

## 🛠️ Instalación

Clona el repositorio y configura las dependencias en tu proyecto con el siguiente comando:

```bash
npm install
```

Si vas a procesar archivos grandes, asegúrate de asignar más memoria al proceso de Node.js. Puedes hacerlo con el siguiente comando:


```bash
node --max-old-space-size=4096 test.js

```

## ✅ Pruebas

El proyecto puede incluir un directorio `test` para validar el correcto procesamiento de los datos. Puedes ejecutar las pruebas unitarias con el siguiente comando:

```bash
npm test
```

## 🎯 Contribuciones

Este proyecto está abierto a contribuciones. Si deseas agregar nuevas funcionalidades o corregir errores, no dudes en hacer un pull request.

## 📧 Contacto

Para preguntas o sugerencias, puedes contactarme en: cmescorcia5@icloud.com

¡Gracias por usar la librería Analizador de Datos Demográficos! 🚀
