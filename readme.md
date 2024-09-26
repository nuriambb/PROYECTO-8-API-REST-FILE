# PROYECTO 8 - INFLUENCERS Y CAMPAÑAS
## Descripción


Proyecto 8 del curso Rock The Code. La idea principal del proyecto es poner en práctica API REST FILES y subir archivos a Cloudinary a la vez que creamos los datos. Para ello se simula una base de datos de gestión de influencers y campañas, como si de una Agencia de Infuencers se tratase.


## Instalación
Para que el proyecto funcione correctamente es necesaria la instalación de varias librerías. A continuación tienes una breve descripción de para qué sirve cada una.

| Libreria | Descripción |
| ------ | ------ |
| Nodemon | Monitoriza cambios en el código de tu aplicación Node.js y reinicia automáticamente el servidor. |
| Express | Proporciona un conjunto robusto de características para gestionar rutas, middleware y solicitudes HTTP.|
| Mongoose | Biblioteca de modelado de objetos para MongoDB y Node.js. Permite definir esquemas de datos y proporciona una forma sencilla de interactuar con la base de datos. |
| MongoDB | Driver oficial para conectarse y trabajar con bases de datos MongoDB desde Node.js. |
| Dotenv | Carga variables de entorno desde un archivo .env en process.env, lo que facilita la gestión de configuraciones sensibles, como credenciales de bases de datos y claves de API.|
| Multer | Permite la gestión de archivos subidos a través de formularios.|
| Multer Storage Cloudinary | Proporciona almacenamiento de archivos en Cloudinary utilizando Multer. Permite subir archivos directamente a Cloudinary en lugar de almacenarlos localmente. |
| Cloudinary | Plataforma para almacenamiento, manipulación y entrega de imágenes y videos en la nube, optimizando su uso en aplicaciones.|

Para instalarlas solo tienes que escribir en la terminal del proyecto el comando "npm i" seguido del nombre de la libreria. Por ejemplo: 
```
npm i nodemon
```
Para que sea más facil se pueden instalar todas en el mismo comando, asegurándote de que están bien escritas.

```
npm i nodemon express mongoose mongodb dotenv multer multer-storage-cloudinary cloudinary
```
### ¿Cómo activar Nodemon correctamente?
En el archivo package.json está el script:
```
   "dev": "nodemon index.js"
```
Para ejecutarlo debes escribir en la terminal el siguiente comando:
```
   npm run dev
```
### 🔸 Recuerda 
Es necesario que importes la librería o librerías en el archivo donde vas a utilizarla. Por ejemplo: 
```
const mongoose = require('mongoose')
```

- Para la librería Dotenv la importación sería la siguiente: 
 ```
require('dotenv').config()
```
- En el caso de Cloudinary es necesario especificar que queremos usar la última versión: 
 ```
const cloudinary = require('cloudinary').v2
```

## ENDPOINTS
Ambas colecciones (Influencers y Campañas) tienen un CRUD completo por lo que existen cuatro endpoints para cada una.
Para poder llevar a cabo estas acciones con Insomnia es necesario utilizar el método adecuado en cada acción.

### Influencers

| Acción | Método | Endpoint |
| ------ | ------ | --------- |
| Leer o Recoger Influencers  |GET | http://localhost:3000/api/v1/influencer/ 
| Publicar Influencer | POST | http://localhost:3000/api/v1/influencer/
| Actualizar Influencer| PUT |http://localhost:3000/api/v1/influencer/idInfluencer
| Eliminar Influencer  | DELETE |http://localhost:3000/api/v1/influencer/idInfluencer

### Campañas
En este caso los endpoint tienen el nombre "campania" para que no haya error al ser la letra ñ un caracter únicamente del lenguaje español.

| Acción | Método | Endpoint |
| ------ | ------ | --------- |
| Leer o Recoger Campañas  |GET | http://localhost:3000/api/v1/campania
| Publicar Campaña | POST | http://localhost:3000/api/v1/campania
| Actualizar Campaña| PUT |http://localhost:3000/api/v1/campania/idCampaña
| Eliminar Campaña  | DELETE |http://localhost:3000/api/v1/campania/idCampaña


#### ¿Cómo subir archivos correctamente?
A la hora tanto de publicar como de actualizar las imágenes de cualquier dato es necesario hacerlo de la siguiente manera:
- Dentro de Insomnia, en la pestaña Body seleccionamos la opción Multipart Form Data.
- A la izquierda escribimos el nombre del apartado de nuestro modelo para la imagen. En este caso imgURL.
- En el desplegable de derecha seleccionamos File.
- Subimos la imagen desde nuestro ordenador.

## Ayuda
Para consultar cualquier duda puedes escribir al correo nuriamorcillo30@gmail.com