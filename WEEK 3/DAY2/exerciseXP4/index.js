const form = document.querySelector('#MyForm');
const radiusInput = form.elements['radius'];
const volumeInput = form.elements['volume'];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const radius = parseFloat(radiusInput.value);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    volumeInput.value = volume.toFixed(2);
});