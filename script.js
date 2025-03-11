const productsList = [ 
    { name: "Journey Together ETB Inglés", description: "<br>🔵Coleccionistas <br>🔴Jugadores  <br>🟡Cazadores de cartas caras", languaje: "Inglés", price: "69.95 €", image: "./images/Journey.jpg", status: "AGOTADO"},
    { name: "Journey Together Booster Box de 36 sobres", description: "<br>🟡Cazadores de cartas caras <br>🔵Coleccionistas.", languaje: "Inglés", price: "215.95 €", image: "./images/Journeybb.png", status: "DISPONIBLE"},
    { name: "Evoluciones Prismáticas Colección Super Premium", description: "<br>🔵 Coleccionistas", languaje: "Español", price: "139.95 €", image: "./images/Ultrapremium.jpg", status: "AGOTADO"},
    { name: "Journey Together 3-Pack Blister", description: "<br>🟡 Cazadores de cartas caras <br>🔵 Coleccionistas.", languaje: "Inglés", price: "19.95 €", image: "./images/Blister.png", status: "DISPONIBLE"},
    { name: "Rivales Destinados ETB", description: "<br>🔵 Coleccionistas <br>🔴 Jugadores <br>🟡 Cazadores de cartas caras.", languaje: "Español", price: "69.95 €", image: "./images/Sin imagen español.jpg", status: "RESERVA"},
    { name: "Rivales Destinados Booster Box", description: "<br>🟡 Cazadores de cartas caras <br>🔵 Coleccionistas.", languaje: "Español", price: "215.95 €", image: "./images/Sin imagen español.jpg", status: "RESERVA"},
    { name: "Rivales Destinados Blister", description: "<br>🟡 Cazadores de cartas caras <br>🔵 Coleccionistas.", languaje: "Español", price: "19.95 €", image: "./images/Sin imagen español.jpg", status: "RESERVA"},
];
// Salto de línea --> <br>
const icons = [
    {link: "https://t.me/+1VT5Ove5UqNiNGNk", icon: "./images/telegram-icon.png"},
    {link: "https://es.wallapop.com/user/ruta151-463109392", icon: "./images/wallapop-icon.png"}
];


// A partir de aqui no tocar

// document.addEventListener("DOMContentLoaded", () => {
//     const iconList = document.getElementById("icon-list1");
//     icons.forEach(({link, icon}) => {
//         const a = document.createElement("a");
//         a.href = link;
//         a.target = "_blank";
        
//         const img = document.createElement("img");
//         img.src = icon;
//         img.alt = "Social Icon";
//         img.classList.add("social-icon");
        
//         a.appendChild(img);
//         iconList.appendChild(a);
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const iconList = document.getElementById("icon-list2");
//     icons.forEach(({link, icon}) => {
//         const a = document.createElement("a");
//         a.href = link;
//         a.target = "_blank";
        
//         const img = document.createElement("img");
//         img.src = icon;
//         img.alt = "Social Icon";
//         img.classList.add("social-icon");
        
//         a.appendChild(img);
//         iconList.appendChild(a);
//     });
// });

const iconList1 = document.getElementById("icon-list1");
    icons.forEach(({link, icon}) => {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        
        const img = document.createElement("img");
        img.src = icon;
        img.alt = "Social Icon";
        img.classList.add("social-icon");
        
        a.appendChild(img);
        iconList1.appendChild(a);
    });

const iconList2 = document.getElementById("icon-list2");
    icons.forEach(({link, icon}) => {
        const a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        
        const img = document.createElement("img");
        img.src = icon;
        img.alt = "Social Icon";
        img.classList.add("social-icon");
        
        a.appendChild(img);
        iconList2.appendChild(a);
    });


// Función para ordenar productos por su estado
function sortProductsByStatus(products) {
    const statusOrder = {
        "RESERVA": 1,
        "DISPONIBLE": 2,
        "AGOTADO": 3
    };
    
    return products.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
}

// Ordenar productos
const sortedProducts = sortProductsByStatus(productsList);

const productListElement = document.getElementById("product-list");

sortedProducts.forEach(product => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <p><strong>${product.price}</strong></p>
    <span class="product-status ${product.status.toLowerCase()}">${product.status}</span>
    <h2>${product.name}</h2>
    <p><soft>Idioma:</soft> ${product.languaje}</p>
    <div><p><soft>Ideal para: </soft>${product.description}</p></div>
`;



    productListElement.appendChild(productElement);
});