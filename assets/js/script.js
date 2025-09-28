// Configuración de datos para achievements
const achievementsData = {
    achievement: [
        {
            title: "100% Scholarship highest career GPA",
            period: "JAN 2024 - JUN 2025",
            icon: "✩",
            description: "Recognition awarded for maintaining an outstanding grade point average during the fifth, sixth and seventh semester.",
            details: "I was honored to be recognized as having the highest grade point average in the program across all semesters, which I attribute to consistent effort and a genuine commitment to my studies."
        }
    ],
    tutoring: [
        {
            title: "Basic Sciences Tutoring Program",
            period: "JAN 2024 - DEC 2024",
            icon: "⌨️",
            description: "Provided comprehensive tutoring in basic sciences subjects to students across multiple university programs including Physiotherapy, Speech-Language Pathology, and Environmental Engineering.",
            details: "Throughout 2024, I had the privilege of supporting fellow students in mastering fundamental science concepts, adapting my teaching approach to diverse academic backgrounds and learning styles.",
            certificate: {
                title: "University Tutoring Certificate",
                url: "#",
                description: "Official certificate recognizing tutoring contributions to the university community"
            }
        }
    ],
    certificates: [
        {
            title: "Google Cloud Computing Foundations Certificate",
            institution: "Google",
            year: "2024",
            duration: "40 hours",
            type: "Online",
            icon: "⌨️",
            description: "Comprehensive certification covering cloud computing fundamentals and Google Cloud Platform services, including compute, storage, networking, and security essentials."
        },
        {
            title: "Introducción a la Seguridad Cibernética",
            institution: "Cisco Networking Academy",
            year: "2024",
            duration: "20 hours",
            type: "Online",
            icon: "⌨️",
            description: "Foundational cybersecurity course covering threat landscape, attack vectors, security frameworks, and defense strategies for modern digital environments."
        },
        {
            title: "Python Essentials 1",
            institution: "Cisco Networking Academy",
            year: "2023",
            duration: "30 hours",
            type: "Online",
            icon: "⌨️",
            description: "Comprehensive Python programming fundamentals including syntax, data structures, control flow, functions, and object-oriented programming concepts."
        },
        {
            title: "CCNAv7: Switching, Routing, and Wireless Essentials",
            institution: "Cisco Networking Academy",
            year: "2024",
            duration: "40 hours",
            type: "Online",
            icon: "⌨️",
            description: "Advanced networking concepts covering switching technologies, VLAN configuration, routing protocols, wireless infrastructure, and network troubleshooting."
        },
        {
            title: "Microsoft Azure Fundamentals",
            institution: "Microsoft Learn",
            year: "2024",
            duration: "3 hours",
            type: "Online",
            icon: "⌨️",
            description: "Azure cloud platform fundamentals including architecture overview, core services, security features, and pricing models for cloud solutions."
        }
    ]
};

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

// Configuración de datos para projects
const projectsData = [
    {
        title: "ActividadTricky",
        description: "Interactive web application designed to enhance learning through gamified educational activities and challenges.",
        technologies: ["HTML", "CSS", "JavaScript", "Web APIs"],
        github: "https://github.com/CatalinaQuij/ActividadTricky",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
        category: "Web Development"
    },
    {
        title: "MamoCheck",
        description: "Health-focused application for breast cancer awareness and early detection support, promoting women's health education.",
        technologies: ["Mobile Development", "Healthcare", "UI/UX"],
        github: "https://github.com/CatalinaQuij/MamoCheck",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
        category: "Healthcare"
    },
    {
        title: "BookMatch",
        description: "Intelligent book recommendation system that helps users discover new literature based on their reading preferences and history.",
        technologies: ["Python", "Machine Learning", "Recommendation Systems"],
        github: "https://github.com/ZyFalo/BookMatch",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=300&fit=crop",
        category: "Machine Learning"
    }
];

// Configuración de datos para comrades (compañeros)
const comradesData = [
    {
        name: "William Peña",
        description: "An awesome full stack developer that have been working with me along this year (he secretly prefers working on backend and relational databases).",
        image: "assets/images/comrades/will.jpg",
        role: "Full Stack Developer",
        specialties: ["Backend", "Databases", "Full Stack"],
        website: "https://willpena.dev"
    },
    {
        name: "Mariam Gutierrez",
        description: "A quick learner and gamer, she is interested in data science and related projects, my dearest friend and colleague.",
        image: "assets/images/comrades/mar.jpg",
        role: "Data Science Enthusiast",
        specialties: ["Data Science", "Gaming", "Machine Learning"],
        website: "https://mariamgutierrez.dev"
    },
    {
        name: "Sebastián Araque",
        description: "Web developer with a passion for creating innovative user experiences and modern web applications. Always up for a challenge and loves exploring new technologies.",
        image: "assets/images/comrades/araque.jpeg",
        role: "Web Developer",
        specialties: ["Frontend", "UI/UX", "Modern Web"],
        website: "https://sebastianaraque.dev"
    }
];

// Clase para manejar la sección de comrades
class ComradesManager {
    constructor() {
        this.init();
    }

    init() {
        const comradesSection = document.getElementById('comrades');
        if (comradesSection) {
            this.createComradesSection();
        }
    }

    createComradesSection() {
        const comradesSection = document.getElementById('comrades');
        const sectionWrapper = comradesSection.querySelector('.section-wrapper');
        if (!sectionWrapper) return;

        sectionWrapper.innerHTML = `
            <h2 class="section-title">
                <span style="font-size:1.2em; font-weight:bold;">/ my dear comrades! ♡</span>
                <span class="section-title-bar"></span>
            </h2>
            <div class="comrades-container">
                <div class="comrades-grid">
                    ${comradesData.map(comrade => this.createComradeCard(comrade)).join('')}
                </div>
            </div>
        `;
    }

    createComradeCard(comrade) {
        return `
            <div class="comrade-card">
                <div class="comrade-banner">
                    <div class="comrade-avatar">
                        <img src="${comrade.image}" alt="${comrade.name}" loading="lazy">
                    </div>
                    <div class="comrade-info">
                        <h3 class="comrade-name">${comrade.name}</h3>
                        <span class="comrade-role">${comrade.role}</span>
                    </div>
                </div>
                <div class="comrade-content">
                    <p class="comrade-description">${comrade.description}</p>
                    <div class="comrade-specialties">
                        ${comrade.specialties.map(specialty => `<span class="specialty-tag">${specialty}</span>`).join('')}
                    </div>
                    <div class="comrade-actions">
                        <a href="${comrade.website}" target="_blank" rel="noopener noreferrer" class="comrade-website-btn">
                            <svg class="website-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                            </svg>
                            <span>Visit Site</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Clase para manejar la sección de proyectos
class ProjectsManager {
    constructor() {
        this.init();
    }

    init() {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            this.createProjectsSection();
        }
    }

    createProjectsSection() {
        const projectsSection = document.getElementById('projects');
        const sectionWrapper = projectsSection.querySelector('.section-wrapper');
        if (!sectionWrapper) return;

        sectionWrapper.innerHTML = `
            <h2 class="section-title">
                <span style="font-size:1.2em; font-weight:bold;">/ projects</span>
                <span class="section-title-bar"></span>
            </h2>
            <div class="projects-container">
                <div class="projects-grid">
                    ${projectsData.map(project => this.createProjectCard(project)).join('')}
                </div>
            </div>
        `;
    }

    createProjectCard(project) {
        return `
            <div class="project-card" data-category="${project.category}">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}" loading="lazy">
                    <div class="project-overlay">
                        <div class="project-category">${project.category}</div>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-technologies">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-actions">
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-github-btn">
                            <svg class="github-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>View on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

// Clase para manejar las tabs de achievements
class AchievementsManager {
    constructor() {
        this.activeTab = 'achievement';
        this.init();
    }

    init() {
        const achievementsSection = document.getElementById('achievements');
        if (achievementsSection) {
            this.createAchievementsSection();
            this.bindEvents();
            this.showTab(this.activeTab);
        }
    }

    createAchievementsSection() {
        const achievementsSection = document.getElementById('achievements');
        const sectionWrapper = achievementsSection.querySelector('.section-wrapper');
        if (!sectionWrapper) return;

        sectionWrapper.innerHTML = `
            <h2 class="section-title">
                <span style="font-size:1.2em; font-weight:bold;">/ achievements</span>
                <span class="section-title-bar"></span>
            </h2>
            <div class="achievements-container">
                <aside class="achievements-sidebar" role="tablist" aria-label="Achievements categories">
                    <nav class="achievements-tabs" data-active="achievement">
                        <button class="tab-button active" data-tab="achievement" role="tab" aria-selected="true" aria-controls="achievement-panel">
                            Scholarships
                        </button>
                        <button class="tab-button" data-tab="tutoring" role="tab" aria-selected="false" aria-controls="tutoring-panel">
                            Tutoring
                        </button>
                        <button class="tab-button" data-tab="certificates" role="tab" aria-selected="false" aria-controls="certificates-panel">
                            Certificates
                        </button>
                    </nav>
                </aside>
                <main class="achievements-content-area">
                    ${this.generateTabsContent()}
                </main>
            </div>
        `;
    }

    generateTabsContent() {
        return Object.keys(achievementsData).map(category => `
            <section class="tab-content" data-tab="${category}" role="tabpanel" id="${category}-panel" aria-labelledby="${category}-tab">
                <div class="achievements-grid">
                    ${this.generateAchievementItems(category)}
                </div>
            </section>
        `).join('');
    }

    generateAchievementItems(category) {
        const items = achievementsData[category];
        if (!items || items.length === 0) {
            return `<div class="empty-state">Content coming soon...</div>`;
        }
        
        return items.map(item => this.createAchievementItem(item)).join('');
    }

    createAchievementItem(achievement) {
        // Para certificados técnicos
        if (achievement.institution) {
            return `
                <div class="achievement-item certificate-item">
                    <div class="achievement-header">
                        <div class="achievement-icon">
                            <span class="icon">${achievement.icon}</span>
                        </div>
                        <div class="achievement-info">
                            <h3 class="achievement-title">${achievement.title}</h3>
                            <span class="achievement-institution">${achievement.institution}</span>
                            <div class="certificate-meta">
                                <span class="achievement-year">${achievement.year}</span>
                                <span class="achievement-duration">${achievement.duration}</span>
                                <span class="achievement-type">${achievement.type}</span>
                            </div>
                        </div>
                    </div>
                    <div class="achievement-content">
                        <p class="achievement-description">${achievement.description}</p>
                    </div>
                </div>
            `;
        }
        
        // Para achievements y tutoring
        return `
            <div class="achievement-item">
                <div class="achievement-header">
                    <div class="achievement-icon">
                        <span class="icon">${achievement.icon}</span>
                    </div>
                    <div class="achievement-info">
                        <h3 class="achievement-title">${achievement.title}</h3>
                        <span class="achievement-period">${achievement.period}</span>
                    </div>
                </div>
                <div class="achievement-content">
                    <p class="achievement-description">${achievement.description}</p>
                    ${achievement.details ? `<div class="achievement-callout"><p class="achievement-details">${achievement.details}</p></div>` : ''}
                    ${achievement.certificate ? `
                        <div class="certificate-preview">
                            <button class="certificate-btn" onclick="previewCertificate('${achievement.certificate.url}', '${achievement.certificate.title}')">
                                <span class="cert-icon">📜</span>
                                <span class="cert-text">View Certificate</span>
                            </button>
                            <span class="cert-description">${achievement.certificate.description}</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }

    bindEvents() {
        document.addEventListener('click', (e) => {
            if (e.target.closest('.achievements-container') && e.target.classList.contains('tab-button')) {
                const tab = e.target.dataset.tab;
                this.showTab(tab);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.target.closest('.achievements-container') && e.target.classList.contains('tab-button')) {
                const tabs = Array.from(document.querySelectorAll('.achievements-container .tab-button'));
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
        const achievementsContainer = document.querySelector('.achievements-container');
        if (!achievementsContainer) return;

        // Actualizar indicador lateral
        const achievementsTabs = achievementsContainer.querySelector('.achievements-tabs');
        if (achievementsTabs) {
            achievementsTabs.setAttribute('data-active', tabName);
            const activeBtn = achievementsTabs.querySelector(`.tab-button[data-tab="${tabName}"]`);
            if (activeBtn) {
                const top = activeBtn.offsetTop - achievementsTabs.offsetTop;
                const height = activeBtn.offsetHeight;
                achievementsTabs.style.setProperty('--indicator-top', `${top}px`);
                achievementsTabs.style.setProperty('--indicator-height', `${height}px`);
                achievementsTabs.setAttribute('data-indicator-pos', 'true');
            }
        }
        
        // Actualizar botones activos
        achievementsContainer.querySelectorAll('.tab-button').forEach(btn => {
            const isActive = btn.dataset.tab === tabName;
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-selected', isActive);
        });

        // Ocultar contenido actual
        const currentActive = achievementsContainer.querySelector('.tab-content.active');
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

    showNewContent(tabName) {
        const achievementsContainer = document.querySelector('.achievements-container');
        const newContent = achievementsContainer.querySelector(`.tab-content[data-tab="${tabName}"]`);
        if (newContent) {
            newContent.style.opacity = '0';
            newContent.style.transform = 'translateX(20px)';
            newContent.classList.add('active');
            
            newContent.offsetHeight;
            
            setTimeout(() => {
                newContent.style.opacity = '1';
                newContent.style.transform = 'translateX(0)';
            }, 50);
        }
    }
}

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
    // Inicializar Projects Manager
    window.projectsManager = new ProjectsManager();
    // Inicializar Comrades Manager
    window.comradesManager = new ComradesManager();

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

// Función global para previsualizar certificados
window.previewCertificate = function(url, title) {
    // Por ahora mostrar un modal simple, se puede expandir para mostrar PDFs
    const modal = document.createElement('div');
    modal.className = 'certificate-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close" onclick="this.parentElement.parentElement.parentElement.remove()">×</button>
            </div>
            <div class="modal-body">
                <p>Certificate preview will be available soon.</p>
                <p><strong>Document:</strong> ${title}</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Cerrar modal al hacer click fuera
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
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
