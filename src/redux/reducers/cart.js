const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((acc, p) => acc + p.price, 0);

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items,
          action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };
      const allPizzas = Object.values(newItems).map(obj => obj.items).flat();
      const newTotalPrice = getTotalPrice(allPizzas);
      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: newTotalPrice,
      };
    }
    case 'CLEAR_CART': {
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }
    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const allPizzas = Object.values(newItems).map(obj => obj.items).flat();
      const newTotalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalPrice: newTotalPrice,
        totalCount: allPizzas.length,
      };
    }
    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems = oldItems.length > 1
        ? state.items[action.payload].items.slice(1)
        : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };
      const allPizzas = Object.values(state.items).map(obj => obj.items).flat();
      const newTotalPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: newTotalPrice,
      };
    }
    case 'REMOVE_CART_ITEM': {
      const newItems = { ...state.items };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
