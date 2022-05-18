export default {
  namespace: "products",
  state: {
    products: [
      {
        id: 1,
        name: "Product 1",
        price: 100,
      },
      {
        id: 2,
        name: "Product 2",
        price: 200,
      },
      {
        id: 3,
        name: "Product 3",
        price: 300,
      },
    ],
  },
  effects: {
    *addProduct({ payload }, { call, put }) {
      // yield call(delay, 1000);
      yield put({ type: "add", payload });
    },
  },
  reducers: {
    add(state, { payload }) {
      return {
        ...state,
        products: [...state.products, payload],
      };
    },
    deleteProduct(state, { id }) {
      return {
        ...state,
        products: state.products.filter((product) => product.id !== id),
      };
    },
  },
};
