function updateServicePrice() {
    const select = document.getElementById('service-type');
    const quantityInput = document.getElementById('quantity');
    const totalElement = document.getElementById('total-price');
    
    if (!select || !quantityInput || !totalElement) return;
    
    const quantity = parseInt(quantityInput.value) || 0;
    const selectedOption = select.options[select.selectedIndex];
    const basePrice = parseFloat(selectedOption.dataset.price);
    
    const total = (quantity / 1000) * basePrice;
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function placeOrder(platform) {
    const select = document.getElementById('service-type');
    const quantity = document.getElementById('quantity').value;
    const selectedService = select.value;
    const platformData = platformsData[platform];
    const serviceData = platformData.services[selectedService];
    const total = (quantity / 1000) * serviceData.basePrice;
    
    const whatsappMessage = encodeURIComponent(`Hola, me interesa el siguiente servicio:
    - Plataforma: ${platformData.name}
    - Servicio: ${serviceData.name}
    - Cantidad: ${quantity}
    - Total: $${total.toFixed(2)}`);
    
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, '_blank');
}
