const url = 'https://vicriesp.github.io/wdd230/bountifulFoodFp/fruits.json';
getFruitsData();
const fruitList = [];
const fruitInfo = {};

async function getFruitsData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.fruits);  // note that we reference the prophet array of the data object given the structure of the json file
    displayFruits(data.fruits);
  }

  const displayFruits = (fruits) => {
    let html = "";
  
    fruits.forEach((fruit) => {
        html += `<p><label class="sbs"><input type="checkbox" name="${fruit.name}" onchange="onFruitChange(this.name, this.checked)">${fruit.name}<span class="fruits"></span></label></p>`;
        fruitInfo[fruit.name] = {
            calories: fruit.calories,
            carbohydrates: fruit.carbohydrates,
            fat: fruit.fat,
            sugar: fruit.sugar,
            protein: fruit.protein,
        };
    }); // end of forEach loop

    const fruitOptions = document.getElementById('fruit-options');
    fruitOptions.innerHTML = `<section>${html}</section>`;
  } // end of function expression

  const onNameChange = (name) => {
    document.getElementById('order-name').textContent = name;
  };
  const onEmailChange = (email) => {
    document.getElementById('order-email').textContent = email;
  };
  const onCpnumberChange = (cpnumber) => {
    document.getElementById('order-cpnumber').textContent = cpnumber;
  };
  const onDescriptionChange = (description) => {
    document.getElementById('order-description').textContent = description;
  };
  const onFruitChange = (fruit, checked) => {
    const pos = fruitList.indexOf(fruit);
    let totalFat = 0, totalCarbs = 0, totalSugar = 0, totalProtein = 0, totalCalories = 0;

    if (checked) {
        if (pos == -1)
            fruitList.push(fruit);
    } else {
        fruitList.splice(pos, 1);
    }

    fruitList.forEach(fruit => {
        const info = fruitInfo[fruit];
        totalFat += info.fat;
        totalCarbs += info.carbohydrates;
        totalProtein += info.protein;
        totalCalories += info.calories;
        totalSugar += info.sugar;
    });

    document.getElementById('order-date').textContent = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    document.getElementById('order-fruit').textContent = fruitList.join(", ");

    document.getElementById('order-fat').textContent = totalFat;
    document.getElementById('order-carbohydrates').textContent = totalCarbs;
    document.getElementById('order-protein').textContent = totalProtein;
    document.getElementById('order-calories').textContent = totalCalories;
    document.getElementById('order-sugar').textContent = totalSugar;
};