const products = [
    { name: "Gain pine disinfectant (4 ltr)", image: "10.png" },
    { name: "Gain all plus (4 ltr)", image: "2.png" },
    { name: "Gain toilet bowl cleaner (4 ltr)", image: "3.png" },
    { name: "Gain Lavender air freshener (4 ltr)", image: "4.png" },
    { name: "Gain dish wash (4 ltr)", image: "5.png" },
	{ name: "Gain Tyre polish (4 ltr)", image: "6.png" },
	{ name: "Gain apple hand wash (4 ltr)", image: "7.png" },
	{ name: "Gain mango air freshener (4 ltr)", image: "8.png" },
	{ name: "Gain cinnamon disinfectant (4 ltr)", image: "9.png" },
	{ name: "Gain pink mist air freshener (4 ltr)", image: "10.png" },
	{ name: "Gain apple hand wash (4 ltr)", image: "11.png" },
	{ name: "Gain dash board shine (4 ltr)", image: "12.png" },
	{ name: "Gain red berry air freshener (4 ltr)", image: "13.png" },
	{ name: "Gain floral disinfectant (4 ltr)", image: "14.png" },
	{ name: "Gain lemon hand wash (4 ltr)", image: "15.png" },
	{ name: "Gain strawberry air freshener (4 ltr)", image: "16.png" },
	{ name: "Gain dish wash (10 ltr)", image: "17.png" },
	{ name: "Gain toilet bowl cleaner", image: "18.png" },
	{ name: "Gain all plus (10 ltr)", image: "19.png" },
	{ name: "Gain car wash (10 ltr)", image: "20.png" },
	{ name: "Gain pine disinfectant (10ltr)", image: "21.png" },
	{ name: "Gain jasmine air freshener (4 ltr)", image: "22.png" },
	{ name: " Gain high power (10 ltr)", image: "23.png" },
	{ name: "Gain high pressure (10 ltr)", image: "24.png" }
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

loadHomeProducts();
