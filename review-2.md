# Servidor Lista de Tareas en Express

Este proyecto es una aplicación backend desarrollada con Express.js. Su propósito es proporcionar una API robusta y eficiente para gestionar datos y operaciones relacionadas con el manejo de las tareas diarias.

## Funcionalidades más importantes

1. **Gestión de Tareas**: Facilita la creación, actualización y eliminación de tareas.
2. **Operaciones CRUD**: Proporciona endpoints para crear, leer, actualizar y eliminar tareas.
3. **Filtrado de Tareas**: Los usuarios pueden filtrar las tareas para ver si alguna de ella se encuentra pendiente y fijarse solo en estas para aprovechar al máximo su tiempo.
3. **Búsqueda de Tareas**: Los usuarios pueden buscar una tarea específica teniendo en cuenta su ID. 
4. **Integridad de los Datos**: Los endpoints cuentan con funciones que evitan que se ingresen datos inválidos al sistema de gestión de tareas de los usuarios. 

Estas funcionalidades son esenciales para garantizar una gestión y organización eficiente y válida de las actividades diarias de los usuarios.

### Importancia de las funcionalidades

Los usuarios encontrarán estas funcionalidades útiles por varias razones:

- **Organización**: Les permite mantener sus tareas organizadas en un solo lugar.
- **Productividad**: Los ayuda a priorizar y gestionar su tiempo de manera más eficiente.
- **Colaboración**: Facilita la asignación y seguimiento de tareas en equipos, mejorando la colaboración.
- **Flexibilidad**: Pueden crear nuevas tareas, leer las existentes, actualizarlas según sea necesario o eliminarlas cuando ya no sean relevantes.
- **Control Total**: Proporciona un control completo sobre sus datos, permitiéndoles gestionar sus tareas de manera personalizada.
- **Interacción Sencilla**: Los endpoints CRUD son intuitivos y fáciles de usar, lo que reduce la curva de aprendizaje y mejora la experiencia del usuario.
- **Prevención de Errores**: Los endpoints cuentan con funciones que verifican los datos enviados y los valida para completar la solicitud realizada y brindarle al usuario la información correcta. 

Estas funcionalidades no solo mejoran su eficiencia y productividad, sino que también proporcionan una plataforma robusta para la gestión de tareas diarias.

## Estructura del Proyecto

El proyecto está organizado en varios archivos clave, cada uno con una responsabilidad específica:

### `tasks.js`

Este archivo contiene la configuración de la aplicación, tiene la variable `tasklist` que proporciona el almacenamiento en donde se van a guardar las tareas y se puede modificar para que el servidor cuente con un conjunto de valores desde su inicio para su correcto funcionamiento. También se usa para compartir los datos entre los diferentes módulos con los que está estructurada la aplicación. 

### `index.js`

Este es el punto de entrada principal de la aplicación. Aquí se configura y se inicia el servidor de Express. También se define un middleware que evita que se realicen acciones HTTP inválidas y conecta los routers para manejar las diferentes rutas de la API.

### `list-view-router.js`

Este archivo define las rutas relacionadas con la visualización de las tareas. Incluye endpoints para obtener las tareas registradas y filtrarlas de acuerdo a su estado de finalización. Permitiendo a los usuarios ver y consultar sus tareas de manera eficiente. Además, cuenta con funciones que evitan que se realicen peticiones que no cuenten con todos los datos necesarios o estos sean incorrectos.

### `list-edit-router.js`

Este archivo define las rutas relacionadas con la edición de las tareas. Incluye endpoints para crear, actualizar y eliminar tareas. Las rutas están diseñadas para manejar las operaciones CRUD necesarias para la gestión de tareas. Además, cuenta con funciones que previenen distintos errores.

## Cómo Ejecutar el Proyecto

Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local con el comando `git clone https://github.com/SamuRoj/task-list-server.git`.
2. Ingresa al directorio del proyecto con el comando `cd task-list-server`
3. Cambia a la rama project-2 con el comando `git checkout review-2`.
4. Instala express con el comando `npm install --save express` 
5. Inicia el servidor con el comando `node index.js`.

El servidor estará disponible en `http://localhost:23727` y podrás interactuar con la API utilizando herramientas como Postman o Insomnia.

## Tecnologías usadas

- **Node.js**: Para ejecutar JavaScript en el servidor y aprovechar su modelo de E/S no bloqueante.
- **Express.js**: Un framework minimalista y flexible para construir aplicaciones web y APIs.

Estas tecnologías fueron elegidas por su rendimiento, escalabilidad y la amplia comunidad de soporte que las respalda.
