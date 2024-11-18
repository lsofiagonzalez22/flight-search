Flight Search - Angular SPA

Este es un proyecto de aplicación de una sola página (SPA) en Angular que permite buscar vuelos a través de una API. El frontend de esta aplicación consume un servicio API que proporciona la búsqueda de vuelos basados en ciertos parámetros como el origen, destino, moneda y tipo de viaje.

Requisitos previos:

Antes de ejecutar el proyecto, asegúrate de tener instalados los siguientes requisitos:

Node.js (recomendado versión LTS)
Angular CLI (instalar globalmente)
Un servidor API que esté corriendo en http://localhost:5297 para manejar las solicitudes de vuelos.

Instalación
Clonar el repositorio
Si aún no tienes el proyecto en tu máquina, clónalo desde el repositorio de GitHub:

git clone https://github.com/lsofiagonzalez22/flight-search.git

Instalar dependencias:
Navega al directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias de Node.js:

cd flight-search
npm install

Este comando instalará todas las dependencias necesarias, incluidas las de Angular, Bootstrap y otras librerías del proyecto.

Configuración

Configuración del backend: 

Este proyecto Angular depende de una API que está corriendo en http://localhost:5297/api/Flights/search. Asegúrate de que el backend esté configurado y corriendo antes de utilizar la aplicación. Si no tienes el backend disponible, asegúrate de que esté correctamente implementado y configurado para aceptar solicitudes desde el frontend Angular.

Si el backend utiliza CORS, asegúrate de que el frontend pueda hacer solicitudes desde tu aplicación Angular.

Configuración de la API en el código:
Si necesitas cambiar la URL de la API, puedes hacerlo modificando los servicios en el proyecto Angular. Por defecto, se espera que las solicitudes se realicen a http://localhost:5297/api/Flights/search, pero puedes cambiar esto en el servicio correspondiente.

// src/app/services/flight.service.ts
private apiUrl = 'http://localhost:5297/api/Flights/search';

Ejecutar la aplicación
Para ejecutar la aplicación de Angular, usa el siguiente comando:

ng serve
Esto iniciará un servidor de desarrollo en http://localhost:4200. Puedes abrir tu navegador y acceder a la aplicación en esa URL.

Uso
Una vez que la aplicación esté en ejecución, podrás:

Introducir el origen y el destino de tu vuelo.
Seleccionar el tipo de viaje (por ejemplo, "oneway" o "roundtrip").
Elegir la moneda en la que deseas ver el precio.
Ver los resultados de la búsqueda de vuelos que serán mostrados en la interfaz.
La aplicación se conecta a la API en http://localhost:5297/api/Flights/search para obtener los resultados y los muestra de manera interactiva en la interfaz de usuario.
