import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  afterEach(fetchProduct)
  it('fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function')
  });

  it('fetch é chamado ao executar fetchProduct', () => {
   expect(fetch).toHaveBeenCalled()
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    await fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1405519561')
  });
  

  it('testa se o retorno da função fetchProduct com o argumento "MLB1405519561" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
   const objeto = await fetchProduct('MLB1405519561')
    expect(objeto).toEqual(product)
  });

  it('ao chamar a função fetchProduct sem argumento, retorna um erro', () => {
    expect(() => { fetchProduct() }).toThrow('ID não informado')
  });

  

});
