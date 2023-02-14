import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const product = document.getElementById('product');
console.log(product);
const shopElements = async () => {
  const list = await fetchProductsList('computador');
  console.log(list);
  list.forEach((elemento) => {
    const element = createProductElement(elemento);
    product.appendChild(element);
  });
};

shopElements();
