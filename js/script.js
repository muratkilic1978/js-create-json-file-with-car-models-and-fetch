const btnElem = document.getElementById("btn");

const outputElem = document.querySelector(".outputCars");

btnElem.addEventListener("click", () => {
    const url = "../json/cars.json";

    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json);
            json.forEach( function(val) {
               // AL kode vi kommer til at skrive bliver indsat her
               
              // Oprette et div element gemt i variablen carContainer
              const carContainer = document.createElement("div");
              // Tilføj en attribut til vores carContainer 
              carContainer.classList.add("car-container");
             
              const carItem = document.createElement("div");
              // Tilføj en attribut til vores carContainer 
              carItem.classList.add("car-item");

              // Opretter et img-element til bilen
              const carImage = document.createElement("img");
              // Tilføj en attribut til vores carImage
              carImage.classList.add("car-image");

              // Tilføjer en source og alt til vores carImage
              carImage.src = `../img/${val.img}`;
              carImage.alt = `${val.brandname} ${val.model}`;
              
              // Opretter Unordered list med list items
              // ....og tilføjer bil-info til list-items
              const carInfo = document.createElement("ul");

              carInfo.innerHTML = 
              `
                <li>${val.brandname} ${val.model}</li>
                <li>Color:${val.color}</li>
                <li>Engine:${val.engine}</li>
              `;

              carItem.appendChild(carImage);
              carItem.appendChild(carInfo);

              carContainer.appendChild(carItem);

              outputElem.appendChild(carContainer);

            })
            
        })

});