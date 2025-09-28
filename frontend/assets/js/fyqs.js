// FAQ Functionality
document.addEventListener('DOMContentLoaded', function() {
    loadFAQs();
});

async function loadFAQs() {
    const loadingElement = document.getElementById('faq-loading');
    const listElement = document.getElementById('faq-list');
    const emptyElement = document.getElementById('faq-empty');

    try {
        // Mostrar loading
        loadingElement.style.display = 'block';
        listElement.style.display = 'none';
        emptyElement.style.display = 'none';

        // Hacer petición al backend
        const response = await fetch('/fyqs/api/faqs/');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Ocultar loading
        loadingElement.style.display = 'none';

        if (data.faqs && data.faqs.length > 0) {
            // Mostrar FAQs
            renderFAQs(data.faqs);
            listElement.style.display = 'block';
        } else {
            // Mostrar estado vacío
            emptyElement.style.display = 'block';
        }

    } catch (error) {
        console.error('Error loading FAQs:', error);
        loadingElement.style.display = 'none';
        
        // Mostrar FAQs de fallback en caso de error
        showFallbackFAQs();
        listElement.style.display = 'block';
    }
}

function renderFAQs(faqs) {
    const listElement = document.getElementById('faq-list');
    
    listElement.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" data-faq-id="${faq.id}" style="animation-delay: ${(index + 1) * 0.1}s">
            <button class="faq-question" onclick="toggleFAQ(${faq.id})" aria-expanded="false">
                <span class="faq-question-text">${escapeHtml(faq.question)}</span>
                <span class="faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    ${formatAnswer(faq.answer)}
                </div>
            </div>
        </div>
    `).join('');
}

function showFallbackFAQs() {
    const fallbackFAQs = [
        {
            id: 'fallback-1',
            question: 'What technologies do you master?',
            answer: 'I work primarily with **JavaScript**, **Python**, **React**, **Django**, **Node.js**, and have experience with databases like **PostgreSQL** and **MongoDB**. I also handle DevOps tools like **Docker** and **Git**.'
        },
        {
            id: 'fallback-2',
            question: 'How much experience do you have as a developer?',
            answer: 'I have several years of experience in full-stack web development, working on both personal and professional projects. I specialize in creating modern and scalable web applications.'
        },
        {
            id: 'fallback-3',
            question: 'Do you offer consulting services?',
            answer: 'Yes, I offer **consulting services** in web development, software architecture, and application optimization. You can contact me to discuss your specific project.'
        },
        {
            id: 'fallback-4',
            question: 'How can I contact you for a project?',
            answer: 'You can contact me through the **contact form** on my website, via **LinkedIn**, or directly by **email**. I\'ll be happy to discuss your project and how I can help you.'
        }
    ];
    
    renderFAQs(fallbackFAQs);
}

function toggleFAQ(faqId) {
    const faqItem = document.querySelector(`[data-faq-id="${faqId}"]`);
    const question = faqItem.querySelector('.faq-question');
    const isActive = faqItem.classList.contains('active');

    // Cerrar todas las FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const btn = item.querySelector('.faq-question');
        btn.setAttribute('aria-expanded', 'false');
    });

    // Si no estaba activa, abrirla
    if (!isActive) {
        faqItem.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        
        // Scroll suave hacia la pregunta si es necesario
        setTimeout(() => {
            const rect = faqItem.getBoundingClientRect();
            const headerHeight = document.querySelector('header').offsetHeight;
            
            if (rect.top < headerHeight + 20) {
                faqItem.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 100);
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatAnswer(answer) {
    // Convertir saltos de línea a <br> y permitir HTML básico
    return escapeHtml(answer)
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
}

// Cerrar FAQs con Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
            const btn = item.querySelector('.faq-question');
            btn.setAttribute('aria-expanded', 'false');
        });
    }
});

// Mejorar accesibilidad con teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const target = e.target;
        if (target.classList.contains('faq-question')) {
            e.preventDefault();
            target.click();
        }
    }
});
