/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('savedCartLS')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var rowsToClear = document.getElementsByTagName('tbody');
  rowsToClear.innerHTML='';
}

// TODO:kindof Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  var outputCartTbody = document.getElementsByTagName('tbody');
  var outputCartTR = document.createElement('tr');
  var outputCartTD = document.createElement('td');  
  
  outputCartTD = document.createElement('td');
  outputCartTD.textContent = cart.items[0].product;
  outputCartTR.appendChild(outputCartTD);
  
  outputCartTD = document.createElement('td');
  outputCartTD.textContent = cart.items[0].quantity;
  outputCartTR.appendChild(outputCartTD);
  
  outputCartTbody.appendChild(outputCartTR);


  // TODO:kindof Find the table body

  // TODO:kindof Iterate over the items in the cart
  // TODO:kindof Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
