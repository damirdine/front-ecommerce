const productsItemsList = document.querySelector('.items');
const apiCall = "http://localhost:3000/api/products";

function addProducts(data){
    for(let i=0;i<data.length;i++){
        item = `
        <a href="./product.html?id=${data[i]._id}">
            <article>
                <img src="${data[i].imageUrl}" alt="${data[i].altTxt}">
                <h3 class="productName">${data[i].name}</h3>    
                <p class="productDescription">${data[i].description}</p>
            </article>
        </a>
        `;
        productsItemsList.insertAdjacentHTML("beforeend",item);   
    }
}

fetch(apiCall).then(
    function (reponse){
        reponse.json().then(
            function(json){
                console.log(json)
                addProducts(json)
            }
        )
    }
)

