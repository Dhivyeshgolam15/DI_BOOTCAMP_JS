function makeJuice(size) {
    let ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    addIngredients("apple", "banana", "orange");
    addIngredients("kale", "spinach", "ginger");
  
    function displayJuice() {
      let juiceSentence = `The client wants a ${size} juice, containing `;
      ingredients.forEach((ingredient, index) => {
        juiceSentence += `${ingredient}`;
        if (index < ingredients.length - 1) {
          juiceSentence += ", ";
        }
      });
      juiceSentence += ".";
      document.getElementById("juice").textContent = juiceSentence;
    }
  
    displayJuice();
  }
  
  makeJuice("large");