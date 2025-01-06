export function updateServicePrice() {
    const select = document.getElementById('service-type');
    const quantityInput = document.getElementById('quantity');
    const totalElement = document.getElementById('total-price');

    // Verificar si los elementos existen
    if (!select || !quantityInput || !totalElement) {
        console.warn("Elementos necesarios no encontrados para calcular el precio.");
        return;
    }

    const quantity = parseInt(quantityInput.value) || 0;
    const selectedOption = select.options[select.selectedIndex];

    // Verificar si hay una opción seleccionada
    if (!selectedOption) {
        console.warn("No hay opción seleccionada en el selector de servicio.");
        return;
    }

    const basePrice = parseFloat(selectedOption.dataset.price);
    if (isNaN(basePrice)) {
        console.warn("El precio base no es válido.");
        return;
    }

    const total = (quantity / 1000) * basePrice;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

export function placeOrder(platform, platformsData) {
    const select = document.getElementById('service-type');
    const quantity = document.getElementById('quantity').value;

    // Validar elementos del DOM
    if (!select || !quantity || !platformsData || !platformsData[platform]) {
        console.error("Datos o elementos del DOM faltantes.");
        return;
    }

    const selectedService = select.value;
    const platformData = platformsData[platform];
    const serviceData = platformData.services[selectedService];

    // Validar datos del servicio
    if (!serviceData) {
        console.error("El servicio seleccionado no existe en la plataforma.");
        return;
    }

    const total = (quantity / 1000) * serviceData.basePrice;
    const whatsappMessage = encodeURIComponent(`Hola, me interesa el siguiente servicio:
    - Plataforma: ${platformData.name}
    - Servicio: ${serviceData.name}
    - Cantidad: ${quantity}
    - Total: $${total.toFixed(2)}`);

    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
}

export function openWhatsApp() {
    const whatsappUrl = 'https://wa.me/1234567890';  
    window.open(whatsappUrl, '_blank');
}