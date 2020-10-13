let html = '';

for (let i = 0; i < brushes.length; i++) {
    let brush = brushes[i];
    html += `
        <article class="reviews">
        <h2 class="reviewH2">${brush.brand} ${brush.model}</h2>
        <img src="${brush.photo}" alt="${brush.brand} ${brush.model}" class="responsiveImg" class="reviewImg">
        <h3>Mix: ${brush.mix}  ||  Feed-style: ${brush.feed}</h3>
        <h3>Rating: ${brush.rating}</h3>
        <h3>Price: $${brush.price}</h3>
        <a href="order.html">ORDER NOW!</a>
        </article>
    `;
}

document.getElementById("primeReview").insertAdjacentHTML('beforeend', html);