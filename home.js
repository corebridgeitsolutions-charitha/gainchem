const products = [
    { name: "Gain pine disinfectant (4 ltr)", image: "10.png" },
    { name: "Gain all plus (4 ltr)", image: "2.png" },
    { name: "Gain toilet bowl cleaner (4 ltr)", image: "3.png" },
    { name: "Gain Lavender air freshener (4 ltr)", image: "4.png" },
    { name: "Gain dish wash (4 ltr)", image: "5.PNG" },
	{ name: "Gain Tyre polish (4 ltr)", image: "6.PNG" },
	{ name: "Gain apple hand wash (4 ltr)", image: "7.PNG" },
	{ name: "Gain mango air freshener (4 ltr)", image: "8.PNG" },
	{ name: "Gain cinnamon disinfectant (4 ltr)", image: "9.PNG" },
	{ name: "Gain pink mist air freshener (4 ltr)", image: "10.PNG" },
	{ name: "Gain apple hand wash (4 ltr)", image: "11.PNG" },
	{ name: "Gain dash board shine (4 ltr)", image: "12.PNG" },
	{ name: "Gain red berry air freshener (4 ltr)", image: "13.PNG" },
	{ name: "Gain floral disinfectant (4 ltr)", image: "14.PNG" },
	{ name: "Gain lemon hand wash (4 ltr)", image: "15.PNG" }
];

function loadHomeProducts() {
    let container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(product => {
        let div = document.createElement("div");
        div.className = "product";

        div.innerHTML = `
            <img src="img/products/${product.image}" alt="${product.name}" >
            <h4>${product.name}</h4>
        `;

        container.appendChild(div);
    });
}
