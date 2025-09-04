# Portfolio Personal - Cata

## 📋 Descripción

Portfolio personal de Cata, una ingeniera de software de Bogotá, Colombia. Este proyecto está desarrollado siguiendo principios de desarrollo moderno, patrones de diseño y mejores prácticas de HTML5, CSS3 y JavaScript.

## 🌟 Características

- **HTML Semántico**: Estructura completa utilizando etiquetas semánticas HTML5
- **CSS Mobile-First**: Diseño responsive con enfoque mobile-first
- **JavaScript Modular**: Código organizado en clases siguiendo patrones de diseño
- **Principio DRY**: Configuración de datos centralizada para fácil mantenimiento
- **Accesibilidad**: Implementación de ARIA labels y navegación por teclado
- **Animaciones Fluidas**: Efectos de transición y animaciones CSS/JS
- **Menú Responsive**: Menú hamburguesa funcional para dispositivos móviles

## 📁 Estructura del Proyecto

```
MyCV/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS mobile-first y responsive
├── script.js           # Lógica principal de la aplicación
├── menu.js             # Manejo específico del menú hamburguesa
├── images/             # Recursos de imágenes
│   ├── cosmic.mp4      # Video de fondo
│   ├── favicon.png     # Icono del sitio
│   ├── icon.png        # Logo del portfolio
│   └── me.jpg          # Foto de perfil
└── README.md           # Documentación del proyecto
```

## 🚀 Funcionalidades

### Secciones Principales
- **Home**: Página de bienvenida con presentación
- **About**: Información personal y profesional
- **Skills**: Sistema de tabs con barras de progreso animadas
- **Projects**: Sección para mostrar proyectos (preparada para expansión)

### Sistema de Skills Dinámico
- **Tabs Interactivos**: 4 categorías (Programming Languages, Frameworks, Tools, Soft Skills)
- **Barras de Progreso Animadas**: Indicadores visuales de nivel de competencia
- **Agregar Skills Dinámicamente**: API para agregar nuevas habilidades
- **Iconos Dinámicos**: Integración con Simple Icons

### Menú de Navegación
- **Responsive**: Se adapta automáticamente a diferentes tamaños de pantalla
- **Menú Hamburguesa**: Funcionalidad completa para móviles
- **Smooth Scroll**: Navegación suave entre secciones
- **Accesibilidad**: Soporte para navegación por teclado

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Grid, Flexbox y animaciones
- **JavaScript ES6+**: Clases, módulos y programación orientada a objetos
- **Google Fonts**: Tipografías Nunito, Libre Baskerville y Playfair Display
- **Simple Icons**: Iconos vectoriales para tecnologías

## 📱 Responsive Design

El diseño sigue el principio **mobile-first** con breakpoints en:
- **600px**: Ajustes para pantallas pequeñas
- **800px**: Activación del menú hamburguesa
- **900px**: Layout de escritorio completo

## 🎨 Paleta de Colores

- **Fondo Principal**: `#140c24` (Morado muy oscuro)
- **Secciones**: `#2e1556` (Morado medio)
- **Acentos**: `#a78bfa` (Lavanda)
- **Highlights**: `#e0aaff` (Rosa claro)
- **Texto**: `#ffffff` (Blanco)

## 📝 Uso

### Personalización de Skills

```javascript
// Agregar una nueva skill
window.addSkill('programming', {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/typescript.svg',
    percentage: 85
});

// Actualizar porcentaje de una skill existente
window.updateSkillPercentage('programming', 'JavaScript', 95);
```

### Configuración de Datos

Los datos de skills se encuentran en `script.js` en el objeto `skillsData`:

```javascript
const skillsData = {
    programming: [
        { name: 'HTML5', icon: 'url', percentage: 90 },
        // ... más skills
    ],
    // ... más categorías
};
```

## 🔧 Instalación y Uso

1. **Clonar o descargar** los archivos del proyecto
2. **Abrir** `index.html` en un navegador web
3. **Personalizar** el contenido en los archivos según necesidades

### Para desarrollo local con servidor:

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (si tienes live-server instalado)
npx live-server

# Usando PHP
php -S localhost:8000
```

## 🎯 Características Técnicas

### Patrones de Diseño Implementados
- **Singleton**: MenuManager y SkillsManager
- **Observer**: IntersectionObserver para animaciones
- **Factory**: Generación dinámica de elementos HTML
- **Event Delegation**: Manejo eficiente de eventos

### Principios SOLID
- **Responsabilidad Única**: Cada clase tiene una responsabilidad específica
- **Abierto/Cerrado**: Fácil extensión sin modificar código existente
- **Segregación de Interfaces**: APIs específicas para cada funcionalidad

### Accesibilidad (WCAG)
- Etiquetas ARIA para lectores de pantalla
- Navegación por teclado completa
- Contraste de colores adecuado
- Estructura semántica clara

## 🚀 Extensibilidad

El proyecto está diseñado para ser fácilmente extensible:

1. **Agregar nuevas secciones**: Seguir el patrón de `.content-section`
2. **Nuevas categorías de skills**: Agregar al objeto `skillsData`
3. **Temas personalizados**: Modificar variables CSS
4. **Funcionalidades adicionales**: Crear nuevas clases siguiendo el patrón existente

## � Despliegue en Railway

### Configuración inicial

#### 1. Preparar el repositorio
```bash
git add .
git commit -m "Add Docker configuration for Railway"
git push
```

#### 2. Configurar Railway

1. Ve a [Railway](https://railway.app)
2. Conecta tu cuenta de GitHub
3. Selecciona "New Project" → "Deploy from GitHub repo"
4. Selecciona tu repositorio `MyCV`
5. Railway detectará automáticamente el Dockerfile

#### 3. Variables de entorno (opcionales)
```bash
PORT=80
NODE_ENV=production
```

### Desarrollo local con Docker

#### Construir la imagen
```bash
docker build -t mycv-portfolio .
```

#### Ejecutar el contenedor
```bash
docker run -p 8080:80 mycv-portfolio
```

#### Acceder a la aplicación
Abre tu navegador en `http://localhost:8080`

### Comandos útiles

#### Ver logs del contenedor
```bash
docker logs <container-id>
```

#### Ejecutar bash en el contenedor
```bash
docker exec -it <container-id> /bin/sh
```

#### Limpiar imágenes Docker
```bash
docker system prune -a
```

### Despliegue automático

Cada push a la rama `main` desplegará automáticamente en Railway.

#### Monitoreo
- **Logs**: Railway Dashboard → Deployments → View Logs
- **Métricas**: Railway Dashboard → Metrics
- **Dominio**: Railway asignará un dominio automáticamente

### Configuración de dominio personalizado

1. En Railway Dashboard → Settings → Domains
2. Agregar tu dominio personalizado
3. Configurar DNS según las instrucciones de Railway

### Troubleshooting

#### Error de puerto
Asegúrate que el contenedor expone el puerto 80 y Railway está configurado correctamente.

#### Archivos estáticos no cargan
Verifica la configuración de Nginx y las rutas de archivos.

#### Build fallido
Revisa los logs de build en Railway Dashboard.

## �📄 Licencia

Este proyecto es una plantilla base para CV online y puede ser utilizada libremente para fines personales y comerciales.

---

**Desarrollado con ❤️ por Cata**
