import { platformsData } from './data.js';

export const components = {
    header: () => `
        <header>
            <nav>
                <div class="logo">Fangrow</div>
                <div class="nav-links">
                    <a href="#">Inicio</a>
                    <a href="#plataformas">Plataformas</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </nav>
        </header>
    `,

    trustBanner: () => `
        <section class="trust-banner">
            <h2 class="section-title">¿Por qué Confiar en Nosotros?</h2>
            <div class="trust-stats">
                <div class="trust-stat">
                    <i class="fas fa-users"></i>
                    <div class="stat-number">50K+</div>
                    <p>Clientes Satisfechos</p>
                    <small>Historias de éxito verificadas</small>
                </div>
                <div class="trust-stat">
                    <i class="fas fa-chart-line"></i>
                    <div class="stat-number">1M+</div>
                    <p>Seguidores Entregados</p>
                    <small>Crecimiento orgánico y sostenible</small>
                </div>
                <div class="trust-stat">
                    <i class="fas fa-star"></i>
                    <div class="stat-number">99%</div>
                    <p>Tasa de Éxito</p>
                    <small>Garantía de satisfacción</small>
                </div>
            </div>
        </section>
    `,

    platformCard: (platform, data) => `
        <div class="platform-card ${platform}" style="--platform-color: ${data.color}">
            <img class="growth-preview" src="${data.growthImage}" alt="${data.name} growth" />
            <div class="content">
                <i class="${data.icon}"></i>
                <h3>${data.name}</h3>
                <ul>
                    ${Object.entries(data.services).map(([key, service]) => `
                        <li>${service.name} - $${service.basePrice} / ${service.per}</li>
                    `).join('')}
                </ul>
                <a href="https://wa.me/5491170964243" class="buy-button" target="_blank">
                    Consultar
                </a>
            </div>
        </div>
    `,

    platformPage: (platform) => {
        const data = platformsData[platform];
        if (!data) return '<div>Plataforma no encontrada</div>';

        const content = `
            ${components.header()}
            <div class="platform-page">
                <div class="platform-hero" style="--platform-color: ${data.color}">
                    <i class="${data.icon}"></i>
                    <h1>${data.name}</h1>
                    <p>Impulsa tu presencia en ${data.name}</p>
                </div>

                <div class="service-calculator">
                    <div class="calculator-card">
                        <div class="service-selector">
                            <label for="service-type">Selecciona el Servicio:</label>
                            <select id="service-type" onchange="updateServicePrice()">
                                ${Object.entries(data.services).map(([key, service]) => `
                                    <option class="options" value="${key}" data-price="${service.basePrice}">${service.name}</option>
                                `).join('')}
                            </select>
                        </div>
                        
                        <div class="quantity-selector">
                            <label for="quantity">Cantidad:</label>
                            <input 
                                type="number" 
                                id="quantity" 
                                min="1000" 
                                step="1000" 
                                value="5000"
                                onchange="updateServicePrice()"
                                oninput="updateServicePrice()"
                            >
                        </div>

                        <div class="price-display">
                            <div class="total-price" id="total-price">Total: $0</div>
                            <button class="order-button" onclick="placeOrder('${platform}')">
                                Ordenar Ahora por WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return content;
    },

    homePage: () => `
        <div class="home-page">
            ${components.header()}
            <div class="hero">
                <h1>Potencia tu Presencia Digital</h1>
                <p>Impulsa tu carrera, marca o proyecto con seguidores reales y engagement genuino</p>
                <a href="https://wa.me/5491170964243" class="cta-button" target="_blank">Comienza Ahora</a>
            </div>
            
            ${components.trustBanner()}

            <section id="plataformas">
                <h2 class="section-title">Nuestros Servicios por Plataforma</h2>
                <div class="platforms-grid">
                    ${Object.entries(platformsData).map(([platform, data]) => 
                        components.platformCard(platform, data)).join('')}
                </div>
            </section>

            <section id="contacto" class="whatsapp-section">
                <h2 class="section-title">¿Listo para Crecer?</h2>
                <p>Contáctanos directamente por WhatsApp para una atención personalizada</p>
                <a href="https://wa.me/5491170964243" class="whatsapp-button" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    Contactar por WhatsApp
                </a>
            </section>

            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>Fangrow</h3>
                        <p>Tu partner en crecimiento digital</p>
                    </div>
                    <div class="footer-section">
                        <h3>Enlaces Rápidos</h3>
                        <a href="#plataformas">Plataformas</a>
                        <a href="#contacto">Contacto</a>
                    </div>
                    <div class="footer-section">
                        <h3>Contacto</h3>
                        <p>WhatsApp: +5491170964243</p>
                    </div>
                </div>
            </footer>
        </div>
    `
};