// Configuración de datos para skills (siguiendo principio DRY)
const skillsData = {
    programming: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/html5.svg', percentage: 90 },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/css3.svg', percentage: 90 },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/javascript.svg', percentage: 90 },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/php.svg', percentage: 90 },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/python.svg', percentage: 80 },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openjdk.svg', percentage: 90 }
    ],
    frameworks: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/react.svg', percentage: 85 },
        { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vuedotjs.svg', percentage: 75 },
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/laravel.svg', percentage: 80 },
        { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/django.svg', percentage: 70 }
    ],
    tools: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/git.svg', percentage: 85 },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/docker.svg', percentage: 75 },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/visualstudiocode.svg', percentage: 95 },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/figma.svg', percentage: 80 }
    ],
    soft: [
        { name: 'Team Work', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/teamviewer.svg', percentage: 95 },
        { name: 'Communication', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/googlechat.svg', percentage: 90 },
        { name: 'Problem Solving', icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codingninjas.svg', percentage: 88 },
        { name: 'Leadership', icon: '', percentage: 85 }
    ]
};

// Clase para manejar las tabs de skills
class SkillsManager {
    constructor() {
        this.activeTab = 'programming';
        this.animationDelay = 100;
        this.init();
    }

    init() {
        // Crear la sección solo si existe el elemento contenedor
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            this.createSkillsSection();
            this.bindEvents();
            this.showTab(this.activeTab);
        }
    }

    createSkillsSection() {
        const skillsSection = document.getElementById('skills');
        const sectionWrapper = skillsSection.querySelector('.section-wrapper');
        if (!sectionWrapper) return;

        sectionWrapper.innerHTML = `
            <h2 class="section-title">
                <span style="font-size:1.2em; font-weight:bold;">/ skills</span>
                <span class="section-title-bar"></span>
            </h2>
            <div class="skills-container">
                <aside class="skills-sidebar" role="tablist" aria-label="Skills categories">
                    <nav class="skills-tabs" data-active="programming">
                        <button class="tab-button active" data-tab="programming" role="tab" aria-selected="true" aria-controls="programming-panel">
                            Programming Languages
                        </button>
                        <button class="tab-button" data-tab="frameworks" role="tab" aria-selected="false" aria-controls="frameworks-panel">
                            Frameworks
                        </button>
                        <button class="tab-button" data-tab="tools" role="tab" aria-selected="false" aria-controls="tools-panel">
                            Other Tools
                        </button>
                        <button class="tab-button" data-tab="soft" role="tab" aria-selected="false" aria-controls="soft-panel">
                            Soft Skills
                        </button>
                    </nav>
                </aside>
                <main class="skills-content-area">
                    ${this.generateTabsContent()}
                </main>
            </div>
        `;
    }

    generateTabsContent() {
        return Object.keys(skillsData).map(category => `
            <section class="tab-content" data-tab="${category}" role="tabpanel" id="${category}-panel" aria-labelledby="${category}-tab">
                <div class="skills-grid">
                    ${skillsData[category].map(skill => this.createSkillItem(skill)).join('')}
                </div>
            </section>
        `).join('');
    }

    createSkillItem(skill) {
        return `
            <div class="skill-item">
                <div class="skill-header">
                    <div class="skill-icon">
                        <img src="${skill.icon}" alt="${skill.name}" style="filter: invert(1);">
                    </div>
                    <div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="progress-percentage">${skill.percentage}%</div>
                    </div>
                </div>
                <div class="skill-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" data-percentage="${skill.percentage}"></div>
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Event delegation para los botones de tabs
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-button')) {
                const tab = e.target.dataset.tab;
                this.showTab(tab);
            }
        });

        // Keyboard navigation para tabs
        document.addEventListener('keydown', (e) => {
            if (e.target.classList.contains('tab-button')) {
                const tabs = Array.from(document.querySelectorAll('.tab-button'));
                const currentIndex = tabs.indexOf(e.target);
                
                let newIndex;
                if (e.key === 'ArrowRight') {
                    newIndex = (currentIndex + 1) % tabs.length;
                } else if (e.key === 'ArrowLeft') {
                    newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                } else {
                    return;
                }
                
                e.preventDefault();
                tabs[newIndex].focus();
                this.showTab(tabs[newIndex].dataset.tab);
            }
        });
    }

    showTab(tabName) {
        // Resetear todas las barras de progreso antes del cambio
        this.resetAllProgressBars();
        // Actualizar indicador lateral
        const skillsTabs = document.querySelector('.skills-tabs');
        if (skillsTabs) {
            skillsTabs.setAttribute('data-active', tabName);
            // Indicador lateral dinámico
            const activeBtn = skillsTabs.querySelector(`.tab-button[data-tab="${tabName}"]`);
            if (activeBtn) {
                const btnRect = activeBtn.getBoundingClientRect();
                const parentRect = skillsTabs.getBoundingClientRect();
                const top = activeBtn.offsetTop - skillsTabs.offsetTop;
                const height = activeBtn.offsetHeight;
                skillsTabs.style.setProperty('--indicator-top', `${top}px`);
                skillsTabs.style.setProperty('--indicator-height', `${height}px`);
                skillsTabs.setAttribute('data-indicator-pos', 'true');
            }
        }
        
        // Actualizar botones activos
        document.querySelectorAll('.tab-button').forEach(btn => {
            const isActive = btn.dataset.tab === tabName;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive);
        });

        // Ocultar contenido actual con animación
        const currentActive = document.querySelector('.tab-content.active');
        if (currentActive && currentActive.dataset.tab !== tabName) {
            currentActive.style.opacity = '0';
            currentActive.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                currentActive.classList.remove('active');
                this.showNewContent(tabName);
            }, 200);
        } else {
            this.showNewContent(tabName);
        }

        this.activeTab = tabName;
    }

    resetAllProgressBars() {
        // Resetear todas las barras de progreso y porcentajes
        document.querySelectorAll('.progress-fill').forEach(bar => {
            bar.style.width = '0%';
            bar.style.transform = 'translateX(-100%)';
            bar.style.opacity = '0';
        });
        
        document.querySelectorAll('.progress-percentage').forEach(percentage => {
            percentage.textContent = '0%';
            percentage.classList.remove('counting');
        });
    }

    showNewContent(tabName) {
        // Mostrar nuevo contenido
        const newContent = document.querySelector(`.tab-content[data-tab="${tabName}"]`);
        if (newContent) {
            newContent.style.opacity = '0';
            newContent.style.transform = 'translateX(20px)';
            newContent.classList.add('active');
            
            // Forzar reflow
            newContent.offsetHeight;
            
            // Animar entrada
            setTimeout(() => {
                newContent.style.opacity = '1';
                newContent.style.transform = 'translateX(0)';
            }, 50);
            
            // Animar barras de progreso después de la transición
            setTimeout(() => this.animateProgressBars(), 300);
        }
    }

    animateProgressBars() {
        const activeContent = document.querySelector(`.tab-content[data-tab="${this.activeTab}"]`);
        if (!activeContent) return;

        const progressBars = activeContent.querySelectorAll('.progress-fill');
        const percentageElements = activeContent.querySelectorAll('.progress-percentage');
        
        progressBars.forEach((bar, index) => {
            const percentage = parseInt(bar.dataset.percentage);
            const percentageElement = percentageElements[index];
            
            // Reset completo de la barra
            bar.style.width = '0%';
            bar.style.transform = 'translateX(-100%)';
            bar.style.opacity = '0';
            
            // Reset del porcentaje
            if (percentageElement) {
                percentageElement.textContent = '0%';
                percentageElement.classList.remove('counting');
            }
            
            // Animar cada barra con delay escalonado desde la izquierda
            setTimeout(() => {
                bar.style.opacity = '1';
                bar.style.transform = 'translateX(0)';
                
                // Animar el ancho después de que aparezca
                setTimeout(() => {
                    bar.style.width = `${percentage}%`;
                    
                    // Iniciar animación numérica del porcentaje
                    if (percentageElement) {
                        this.animatePercentage(percentageElement, percentage);
                    }
                }, 100);
            }, index * 150);
        });
    }

    animatePercentage(element, targetPercentage) {
        element.classList.add('counting');
        let currentPercentage = 0;
        const increment = targetPercentage / 60; // 60 frames para 1 segundo aprox
        
        const counter = setInterval(() => {
            currentPercentage += increment;
            
            if (currentPercentage >= targetPercentage) {
                currentPercentage = targetPercentage;
                element.classList.remove('counting');
                clearInterval(counter);
            }
            
            element.textContent = `${Math.round(currentPercentage)}%`;
        }, 16); // ~60fps
    }

    // Método para agregar skills dinámicamente
    addSkill(category, skillData) {
        if (skillsData[category]) {
            skillsData[category].push(skillData);
            this.createSkillsSection();
            this.bindEvents();
            this.showTab(this.activeTab);
        }
    }

    // Método para actualizar porcentaje de skill
    updateSkillPercentage(category, skillName, newPercentage) {
        const skill = skillsData[category]?.find(s => s.name === skillName);
        if (skill) {
            skill.percentage = newPercentage;
            this.showTab(this.activeTab);
        }
    }
}

class MenuManagerFallback {
    constructor() {
        this.menuButton = document.querySelector('.hamburguesa');
        this.navList = document.getElementById('nav-list');
        this.init();
    }

    init() {
        if (this.menuButton) {
            this.menuButton.addEventListener('click', () => this.toggleMenu());
        }

        // Cerrar menú al hacer click en un enlace
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!e.target.closest('header') && this.navList?.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        if (this.navList) {
            this.navList.classList.toggle('active');
            this.menuButton.classList.toggle('active');
        }
    }

    closeMenu() {
        if (this.navList) {
            this.navList.classList.remove('active');
            this.menuButton.classList.remove('active');
        }
    }
}

// Función para smooth scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Clase para manejar animaciones de scroll
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupParallaxEffect();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Trigger skill animations si es la sección de skills
                    if (entry.target.id === 'skills' && window.skillsManager) {
                        setTimeout(() => {
                            window.skillsManager.animateProgressBars();
                        }, 300);
                    }
                }
            });
        }, observerOptions);

        // Observar elementos con animación
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    setupParallaxEffect() {
        // Efecto parallax removido para mantener el video fijo
        // El video ahora permanece completamente fijo como fondo
    }
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Skills Manager
    window.skillsManager = new SkillsManager();
    //Inicializar Achievements Manager
    window.achievementsManager = new AchievementsManager();

    // Inicializar Menu Manager (usar fallback si menu.js no está disponible)
    if (typeof MenuManager === 'undefined') {
        window.menuManager = new MenuManagerFallback();
    }
    
    // Inicializar animaciones de scroll
    window.scrollAnimations = new ScrollAnimations();

    // Configurar smooth scroll para los enlaces de navegación
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Efecto de typing en el título
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.animation = 'fadeInUp 0.8s ease forwards';
        }, 500);
    }
});

// Función global para compatibilidad (si se llama desde HTML)
function toggleMenu() {
    if (window.menuManager) {
        window.menuManager.toggleMenu();
    }
}

// API pública para agregar skills dinámicamente
window.addSkill = function(category, skillData) {
    if (window.skillsManager) {
        window.skillsManager.addSkill(category, skillData);
    }
};

window.updateSkillPercentage = function(category, skillName, newPercentage) {
    if (window.skillsManager) {
        window.skillsManager.updateSkillPercentage(category, skillName, newPercentage);
    }
};

// Agregar CSS para la animación de fade in
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
