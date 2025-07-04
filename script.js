let cart = [];

function addToCart(bookName, price) {
  cart.push({ name: bookName, price: price });
  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
  let cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
    cartItems.innerHTML += `
      <li>
        ${item.name} - ${item.price.toLocaleString()}₫
        <button onclick="removeItem(${i})" style="margin-left:10px;color:red; background:none; border:none; cursor:pointer;">❌</button>
      </li>`;
  }

  document.getElementById("cartTotal").innerText = total.toLocaleString() + "₫";
  document.getElementById("cartData").value = cart.map(item => `${item.name} - ${item.price.toLocaleString()}₫`).join('\n');
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function toggleCart() {
  let popup = document.getElementById("cartPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function openCheckout() {
  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }
  document.getElementById("checkoutForm").style.display = "block";
}

function closeCheckout() {
  document.getElementById("checkoutForm").style.display = "none";
}

function filterBooks(className) {
  let books = document.getElementsByClassName("book");
  for (let i = 0; i < books.length; i++) {
    if (className === "all" || books[i].classList.contains(className)) {
      books[i].style.display = "block";
    } else {
      books[i].style.display = "none";
    }
  }
}
