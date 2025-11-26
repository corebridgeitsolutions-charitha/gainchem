let container = document.getElementById("products");

for (let i = 1; i <= 10; i++) {
    let div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
        <img src="img/1.jpg">
        <h4>Product ${i}</h4>
    `;

    container.appendChild(div);
}