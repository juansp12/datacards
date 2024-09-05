let divData = document.getElementById("divData");

function getData(){
    const promesa = fetch("https://freetestapi.com/api/v1/products",{method: "GET"});
    promesa.then( (response) => {
        response.json().then(
            (data)=>{
                console.log(data);
                createCards(data);
            })
        .catch((error)=> console.log("Problema con el json", error))
    }).catch((err)=> console.log("Existio un problema en la solicitud", err));
}//getData



function createCards(products){
    console.log(products.length)
    products.forEach(product => {
        let card = `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Price:</strong> $${product.price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
        divData.innerHTML += card;
    });
}



getData();