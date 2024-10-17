
# 📊 Analizador de Datos Demográficos 📊

Este proyecto está diseñado para facilitar el análisis de información demográfica y social a partir de datos del **Censo de Población y Vivienda 2020** del INEGI. La herramienta permite procesar archivos en formato Excel y extraer información relevante de manera dinámica según las necesidades del usuario.

## 📂 Estructura del Proyecto

- **/data/uploads**: Aquí es donde debes cargar tu archivo Excel procesado.
- **/src**: Contiene el código fuente de la aplicación, incluidos los archivos principales `index.js` y `excelProcessor.js`.
- **/test**: Contiene archivos de prueba para garantizar que el código funcione correctamente.

## 🚀 Instrucciones de Uso

### 1. Descarga del CSV

Primero, debes descargar el archivo CSV con los datos del censo desde el sitio del INEGI. Aquí tienes el enlace para descargar los datos abiertos del censo 2020:

[Descargar CSV INEGI](https://www.inegi.org.mx/programas/ccpv/2020/#datos_abiertos)

### 2. Convertir CSV a Excel

Después de descargar el CSV, debes convertirlo a un archivo Excel y guardarlo en la carpeta `data/uploads` dentro del proyecto.

### 3. Configurar los Campos de Población

Antes de ejecutar el análisis, debes definir los campos de población que deseas procesar. En el archivo `index.js`, puedes especificar los campos que quieres extraer del archivo Excel, como por ejemplo:

```javascript
const camposPoblacion = ['POBTOT', 'POBFEM', 'POBMAS']; // Puedes agregar más campos según el diccionario de datos
```

### 4. Ejecutar el Análisis

Para procesar el archivo Excel y extraer los datos demográficos, simplemente ejecuta el siguiente comando en tu terminal:

```bash
node src/index.js
```

El sistema procesará el archivo, extraerá la información según los campos que especificaste y generará un nuevo archivo Excel con la información organizada.

### 📑 Diccionario de Datos

En la hoja *Diccionario de Datos* del archivo Excel generado, puedes encontrar una descripción detallada de cada campo disponible, como por ejemplo:

- **ENTIDAD**: Clave de la entidad federativa.
- **NOM_ENT**: Nombre de la entidad federativa.
- **MUN**: Clave del municipio.
- **NOM_MUN**: Nombre del municipio.
- **POBTOT**: Población total.
- **POBFEM**: Población femenina.
- **POBMAS**: Población masculina.

⚠️ **Nota**: La información de la población es dinámica, lo que significa que puedes personalizar los campos que necesitas antes de ejecutar el análisis. Para ello, asegúrate de seguir las instrucciones del diccionario de datos y especificar los campos en el archivo `index.js`.

## 📦 Dependencias

Las principales dependencias utilizadas en este proyecto son:

- **ExcelJS**: Para la lectura y escritura de archivos Excel.
- **xlsx**: Para la conversión de archivos Excel.
- **csv-parser**: Para procesar archivos CSV en caso de necesidad futura.

## 🛠️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/tuusuario/demographic-data-analyzer.git
```

Instala las dependencias:

```bash
npm install
```

## ✅ Pruebas

El proyecto incluye un directorio `test` con pruebas unitarias para validar el procesamiento de los datos. Puedes ejecutar las pruebas con:

```bash
npm test
```

## 🎯 Contribuciones

Este proyecto está abierto a contribuciones. Si deseas agregar nuevas funcionalidades o corregir errores, no dudes en hacer un pull request.

## 📧 Contacto

Para preguntas o sugerencias, puedes contactarme en: cmescorcia5@icloud.com

¡Gracias por usar el Analizador de Datos Demográficos! 🚀
