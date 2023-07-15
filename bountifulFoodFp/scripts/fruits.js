const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
getFruitsData();

async function getFruitsData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayFruits(data.fruits);
  }
  


  const displayFruits = (fruits) => {
    const cards = document.querySelector('label.fruits'); // select the output container element
  
    fruits.forEach((fruit) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let name = document.createElement('p');
      //let nutritions = document.createElement('p');
      //let address = document.createElement('p');
      //let phonenumber = document.createElement('p');
      //let website = document.createElement('p');
      //let membershiplevel = document.createElement('p');
      //let image = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name - finish the template string
      p.textContent = `${fruit.name}`;
      //address.textContent = `Address: ${fruit.address}`;
      //image.imageurl = busin.imageurl;
      //phonenumber.textContent = `Phone Number: ${fruit.phonenumber}`;
      //website.textContent = `Website: ${busin.website}`;
      //membershiplevel.textContent = `Membership Level: ${busin.membershiplevel}`;

      card.setAttribute('class', 'card');
      p.setAttribute('class', 'names')

      // Build the image portrait by setting all the relevant attribute
      //image.setAttribute('class', 'im');
      //image.setAttribute('src', busin.imageurl);
      //image.setAttribute('alt', `Logo of ${busin.name}`);
      //image.setAttribute('loading', 'lazy');
      //image.setAttribute('width', '340');
      //image.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      //card.appendChild(image);
      //card.appendChild(p);
      card.appendChild(name);
      //card.appendChild(address);
      //card.appendChild(phonenumber);
      //card.appendChild(website);
      //card.appendChild(membershiplevel);
     
      fruits.appendChild(card);
    }); // end of forEach loop
  } // end of function expression