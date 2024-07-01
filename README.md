Egbe Iwori Aweda
Breve descripción de lo que hace la aplicación.

Estructura del Proyecto
Descripción de las carpetas y archivos principales del proyecto:

/src: Contiene todo el código fuente.
/components: Componentes reutilizables.
/pages: Páginas de la aplicación.
/services: Servicios de API y lógica de negocio.
/styles: Archivos de estilos.
/utils: Utilidades y funciones auxiliares.
Configuración del Entorno
Requisitos
Node.js (versión x.x.x)
npm (versión x.x.x) o yarn (versión x.x.x)
Instalación
Clona el repositorio:

bash
Copiar código
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
Instala las dependencias:

bash
Copiar código
npm install
# o
yarn install
Configura las variables de entorno si es necesario, creando un archivo .env en la raíz del proyecto:

plaintext
Copiar código
REACT_APP_API_URL=http://tudominio.com/api
Ejecución de la Aplicación
Para iniciar la aplicación en modo de desarrollo:

bash
Copiar código
npm start
# o
yarn start
La aplicación estará disponible en http://localhost:3000.

Funcionalidades Principales
Autenticación y Autorización: Implementada con JWT.
Gestión de Usuarios: CRUD de usuarios.
Gestión de Contenido: Crear, leer, actualizar y eliminar noticias y álbumes de fotos.
Control de Visibilidad: Contenido visible según el nivel de autorización del usuario.
Hooks y Métodos
Frontend
Hooks Personalizados
useAuth: Maneja la autenticación del usuario.
useFetch: Realiza peticiones HTTP usando axios.
Componentes Clave
Header: Contiene la barra de navegación.
Footer: Información del pie de página.
Gallery: Galería de imágenes utilizando react-image-gallery.
