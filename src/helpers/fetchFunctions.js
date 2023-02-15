export const fetchProduct = async (id) => {
  if (!id) throw new Error('ID não informado');
  const api = `https://api.mercadolibre.com/items/${id}`;
  const response = await fetch(api);
  const data = await response.json();
  return data;
};

export const fetchProductsList = async (produto) => {
  if (!produto) throw new Error('Termo de busca não informado');
  try {
    const searchAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
    const response = await fetch(searchAPI);
    const data = await response.json();
    return data.results;
  } catch (error) {
    return 'Algum erro ocorreu, recarregue a página e tente novamente';
  }
};
