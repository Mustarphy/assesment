import { Product } from './Product.js';
import { ShoppingCartItem } from './ShoppingCartItem.js';

export class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    const header = document.createElement('h1');
    header.textContent = 'Shopping Cart';
    cartElement.appendChild(header);

    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th>Remove</th>
      </tr>
    `;
    cartElement.appendChild(table);

    this.items.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.product.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.product.price}</td>
        <td>$${item.calculateTotalPrice()}</td>
        <td><button class="remove-button" data-index="${index}">Remove</button></td>
      `;
      table.appendChild(row);
    });

    const totalElement = document.createElement('p');
    totalElement.textContent = `Total: $${this.getTotal()}`;
    cartElement.appendChild(totalElement);

    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const index = button.dataset.index;
        this.removeItem(this.items[index]);
        this.displayCart();
      });
    });
  }
}
