# Proyecto de Angular con Clean Architecture

Este proyecto es una aplicación de ejemplo desarrollada en Angular, siguiendo los principios de Clean Architecture. La estructura del proyecto se divide en cuatro carpetas principales: `presentation`, `domain`, `infrastructure` y `application`, cada una con su responsabilidad específica.

## Estructura del Proyecto

- **presentation**: Contiene los componentes de la interfaz de usuario y su lógica de presentación. Aquí se encuentran los módulos, componentes, estilos y servicios relacionados con la interfaz de usuario.

- **domain**: Define los modelos y las reglas de negocio de la aplicación. Contiene las entidades y los casos de uso que representan la lógica central de la aplicación, independiente de cualquier tecnología o interfaz de usuario.

- **infrastructure**: Gestiona los detalles de implementación, como la integración con servicios externos, bases de datos, almacenamiento local, etc. Aquí se encuentran los servicios de red, almacenamiento en caché, manejo de errores, etc.

- **application**: Actúa como el puente entre las capas de `presentation`, `domain` e `infrastructure`. Contiene los casos de uso de la aplicación, que coordinan las interacciones entre las distintas capas y aplican las reglas de negocio.

## Inicio del Proyecto

Para iniciar el proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/harol-rodriguez/ng-test.git
   ```

2. Navega hasta la carpeta del proyecto:

   ```bash
   cd proyecto-angular-clean-architecture
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run start
   ```

## API Consumida

Este proyecto consume datos de la API de trabajo proporcionada por ArbeitNow. La API proporciona información sobre ofertas de trabajo disponibles en diferentes ubicaciones y sectores.

- **Endpoint Base**: `https://www.arbeitnow.com/api/job-board-api`
- **Documentación de la API**: [Enlace a la documentación](https://www.arbeitnow.com/docs/api/job-board-api)

Para consumir la API en este proyecto, se pueden utilizar servicios proporcionados en la capa de `infrastructure`, utilizando Angular HttpClient u otras herramientas adecuadas para realizar peticiones HTTP.
