/* ============================================================
   CLOUD FASHION — CLEAN & WORKING SCRIPT
============================================================ */

/* ===================== ADD TO CART ===================== */
function addToCart(name, price, img) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name,
    price: Number(price),
    img
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart 🛍️`);
}

/* ===================== DISPLAY CART ===================== */
function displayCart() {
  const container = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  const emptyCart = document.getElementById("empty-cart");

  if (!container) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  container.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    if (emptyCart) emptyCart.style.display = "block";
    if (totalPriceEl) totalPriceEl.textContent = "";
    return;
  }

  if (emptyCart) emptyCart.style.display = "none";

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div>
        <h4>${item.name}</h4>
        <p class="price">₹${item.price}</p>
      </div>
      <button onclick="removeFromCart(${index})">✖</button>
    `;

    container.appendChild(div);
  });

  if (totalPriceEl) {
    totalPriceEl.textContent = `Total: ₹${total}`;
  }
}

/* ===================== REMOVE ITEM ===================== */
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

/* ===================== PLACE ORDER ===================== */
async function placeOrder() {
  const name = document.getElementById("orderName").value.trim();
  const mobile = document.getElementById("orderMobile").value.trim();
  const address = document.getElementById("orderAddress").value.trim();
  const payment = document.getElementById("paymentMethod").value;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!name || !mobile || !address || !payment) {
    alert("⚠️ Please fill all delivery details");
    return;
  }

  if (cart.length === 0) {
    alert("🛒 Your cart is empty");
    return;
  }

  const orderData = {
    name,
    mobile,
    address,
    payment,
    items: cart,
    total: cart.reduce((sum, item) => sum + item.price, 0)
  };

  try {
    const response = await fetch(
      "https://yju3zeacl2.execute-api.ap-south-1.amazonaws.com/prod/orders",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData)
      }
    );

    await response.json();

    alert("🎉 Order placed successfully!");
    localStorage.removeItem("cart");
    window.location.href = "menu.html";

  } catch (err) {
    console.error(err);
    alert("❌ Failed to place order");
  }
}

/* ===================== INIT ===================== */
document.addEventListener("DOMContentLoaded", displayCart);
