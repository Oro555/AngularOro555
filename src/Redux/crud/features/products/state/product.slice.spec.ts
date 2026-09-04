import reducer, { ProductState, selectProduct, updateProduct } from './product.slice';

describe('product reducer', () => {
  const state: ProductState = {
    products: [
      { id: '1', name: 'Laptop', price: 1000, description: 'Original' },
      { id: '2', name: 'Telefono', price: 500, description: 'Sin cambios' },
    ],
    selectedProductId: '1',
  };

  it('actualiza el producto seleccionado sin modificar los demas', () => {
    const updatedProduct = {
      id: '1',
      name: 'Laptop actualizada',
      price: 1200,
      description: 'Editada',
    };

    const result = reducer(state, updateProduct(updatedProduct));

    expect(result.products).toEqual([updatedProduct, state.products[1]]);
    expect(result.selectedProductId).toBeNull();
  });

  it('no cambia el estado si se intenta actualizar un id inexistente', () => {
    const result = reducer(state, updateProduct({
      id: 'missing',
      name: 'Producto nuevo',
      price: 1,
      description: 'No debe agregarse',
    }));

    expect(result).toEqual(state);
  });

  it('permite seleccionar el producto que editara el formulario', () => {
    const result = reducer(state, selectProduct('2'));

    expect(result.selectedProductId).toBe('2');
  });
});
