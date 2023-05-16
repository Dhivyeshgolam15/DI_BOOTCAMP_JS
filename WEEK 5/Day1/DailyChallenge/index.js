$(document).ready(function() {
    $('#myForm').submit(function(event) {
      event.preventDefault();
      
      var formData = {
        name: $('#name').val(),
        lastName: $('#last-name').val()
      };
      
      var jsonData = JSON.stringify(formData);
      
      $('#output').text(jsonData);
    });
  });

  console.log(formData);