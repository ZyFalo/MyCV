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

## 📄 Licencia

Este proyecto es una plantilla base para CV online y puede ser utilizada libremente para fines personales y comerciales.

---

**Desarrollado con ❤️ por Cata**
