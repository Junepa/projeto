export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (produto) => {
  if (!produto) throw new Error('Termo de busca não informado');
  const searchAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  const response = await fetch(searchAPI);
  const data = await response.json();
  return data.results;
};
