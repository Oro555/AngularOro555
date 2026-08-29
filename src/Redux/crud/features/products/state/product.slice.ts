import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../../models/product.model';

export interface ProductState {
  products: Product[];
  selectedProductId: string | null;
}

const initialState: ProductState = {
  products: [
    { id: '1', name: 'Laptop Pro v22', price: 1500, description: 'Desarrollo en Angular' }
  ],
  selectedProductId: null
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Create (Agregar)
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    // Update (Editar)
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
      state.selectedProductId = null;
    },
    // Delete (Eliminar)
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
    // Seleccionar producto para el formulario
    selectProduct: (state, action: PayloadAction<string | null>) => {
      state.selectedProductId = action.payload;
    }
  }
});

// Exportamos las acciones generadas automáticamente
export const { addProduct, updateProduct, deleteProduct, selectProduct } = productSlice.actions;

// Selectores para consultar el estado (RootState se infiere en el store)
export const selectAllProducts = (state: { productsFeature: ProductState }) => state.productsFeature.products;
export const selectCurrentProduct = (state: { productsFeature: ProductState }) =>
  state.productsFeature.products.find(p => p.id === state.productsFeature.selectedProductId) || null;

export default productSlice.reducer;
