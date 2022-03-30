const pageProductTitle = document.querySelector('title');
const productImage = document.querySelector('.item__img');
const productTitlePrice = document.querySelector('.item__content__titlePrice');
const productDescription = document.querySelector('#description');
const productColors = document.querySelector('#colors');

const apiCall = "http://localhost:3000/api/products";
let productId;

function getproductId (){
    const params = new URLSearchParams(window.location.search);
    productId = params.get('id');
    return productId;
};
getproductId()

function productPage(json){
    for(let i=0;i<json.length;i++){
        if(json[i]._id===productId){
            //Changer Le Title
            pageProductTitle.textContent = json[i].name;

            //Ajouter l'image du produits
            productImageHTML = `
            <img src="${json[i].imageUrl}" alt=${json[i].altTxt}>
            `;
            productImage.insertAdjacentHTML("beforeend",productImageHTML);
            //Ajouter le nom et prix du produit
            productTitlePrice.innerHTML = `
            <h1 id="title">${json[i].name}</h1>
                <p>Prix : <span id="price">${json[i].price}</span>€</p>
            `;
            //Ajouter Description
            productDescription.textContent = json[i].description;
            
            // Ajouter les options de couleur
            json[i].colors.forEach(element => {
                let colorOption = document.createElement('option');
                colorOption.setAttribute("value", element);
                colorOption.textContent = element;
                colors.appendChild(colorOption);
            });
        };
    }
};

fetch(apiCall).then(
    function (reponse){
        reponse.json().then(
            function(json){
                console.log(json)
                productPage(json)
            }
            )
        }
)
        

