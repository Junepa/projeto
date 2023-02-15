import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const product = document.getElementById('product');
const paragrafo = document.createElement('p');
paragrafo.innerText = 'carregando...';
paragrafo.classList.add('loading');
product.appendChild(paragrafo);
const shopElements = async () => {
  const list = await fetchProductsList('computador');
  if (typeof list === 'string') {
    paragrafo.classList.remove('loading');
    paragrafo.classList.add('error');
    paragrafo.innerText = list;
    return;
  }
  paragrafo.classList.remove('loading');
  paragrafo.innerText = '';
  list.forEach((elemento) => {
    const element = createProductElement(elemento);
    product.appendChild(element);
  });
};

const ol = document.getElementById('ol');
const array2 = () => {
  const array = getSavedCartIDs(); // requisito 9
  array.forEach(async (element) => {
    const arrayID = await fetchProduct(element); // fetchProduct para cada um desses ids e recuperar as informações de cada produto.
    const elements = createProductElement(arrayID);
    ol.appendChild(elements);
  });
};

window.onload = () => {
  shopElements();
  array2();
};
