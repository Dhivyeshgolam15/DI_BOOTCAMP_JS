javascript//

const form = document.querySelector('form');
const sentData = document.getElementById('sent-data');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const searchParams = new URLSearchParams(formData);

  sentData.textContent = `Sent data: ${searchParams.toString()}`;

  form.reset();
});