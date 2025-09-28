/**
 * Menu Manager - Maneja la funcionalidad del menú hamburguesa
 * Siguiendo principios DRY y patrones de diseño
 */

class MenuManager {
    constructor() {
        this.menuButton = document.querySelector('.hamburguesa');
        this.navList = document.getElementById('nav-list');
        this.isOpen = false;
        this.init();
    }

    // Inicializa el menú y sus eventos
    init() {
        if (!this.menuButton || !this.navList) {
            console.warn('Menu elements not found');
            return;
        }

        this.bindEvents();
        this.setupAriaLabels();
    }

    // Configura los eventos del menú
    bindEvents() {
        // Toggle del menú
        this.menuButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.toggleMenu();
        });

        // Cerrar menú al hacer click en enlaces
        this.navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('header') && this.isOpen) {
                this.closeMenu();
            }
        });

        // Cerrar menú con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
                this.menuButton.focus();
            }
        });

        // Manejo de resize para cerrar menú en desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 800 && this.isOpen) {
                this.closeMenu();
            }
        });
    }

    // Configura las etiquetas ARIA para accesibilidad
    setupAriaLabels() {
        this.menuButton.setAttribute('aria-expanded', 'false');
        this.menuButton.setAttribute('aria-controls', 'nav-list');
        this.navList.setAttribute('aria-hidden', 'true');
    }

    // Alterna el estado del menú
    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    // Abre el menú
    openMenu() {
        this.isOpen = true;
        this.navList.classList.add('active');
        this.menuButton.classList.add('active');
        
        // Actualizar ARIA
        this.menuButton.setAttribute('aria-expanded', 'true');
        this.navList.setAttribute('aria-hidden', 'false');
        
        // Animar las líneas del hamburguesa
        this.animateHamburger(true);
        
        // Focus en el primer enlace para accesibilidad
        const firstLink = this.navList.querySelector('a');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    }

    // Cierra el menú
    closeMenu() {
        this.isOpen = false;
        this.navList.classList.remove('active');
        this.menuButton.classList.remove('active');
        
        // Actualizar ARIA
        this.menuButton.setAttribute('aria-expanded', 'false');
        this.navList.setAttribute('aria-hidden', 'true');
        
        // Animar las líneas del hamburguesa
        this.animateHamburger(false);
    }

    // Anima las líneas del botón hamburguesa
    animateHamburger(isOpen) {
        const spans = this.menuButton.querySelectorAll('span');
        
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }

    // Retorna el estado actual del menú
    getState() {
        return {
            isOpen: this.isOpen,
            menuButton: this.menuButton,
            navList: this.navList
        };
    }
}

// Función para compatibilidad con llamadas globales
function toggleMenu() {
    if (window.menuManager) {
        window.menuManager.toggleMenu();
    }
}

// Auto-inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.menuManager = new MenuManager();
});

// Exportar para uso en módulos (si se necesita)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MenuManager;
}
