import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const product = document.getElementById('product');
const paragrafo = document.createElement('p');
paragrafo.innerText = 'carregando...';
paragrafo.classList.add('loading');
product.appendChild(paragrafo);
const shopElements = async () => {
  const list = await fetchProductsList('computador');
  paragrafo.classList.remove('loading');
  paragrafo.innerText = '';
  list.forEach((elemento) => {
    const element = createProductElement(elemento);
    product.appendChild(element);
  });
};

shopElements();
