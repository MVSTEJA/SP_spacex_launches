const INITIAL_STATE = {
  categories: [],
  offsetBy: 0,
  isLoadMoreVisible: true
};

/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @description 
 * 
 * Primary requirements handled are,
 * 1. User should be able to view all items under a category. 
 * 
 * Below 2 secondary requirements as well handled here.
 * 1. User should be able to filter items by categories, price range e.g (less than $5, $5 - $10,
    $10 - $15, $15 - $20, over $20). 
 * 2. User should be able to sort items by price range e.g High to Low, Low to High
 *  
 */
const categories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "All_CATEGORIES": {
      return {
        ...state,
        categories: action.categories,
      };
    }

    case "INCREMENT_CATEGORY_OFFSET": {
      return {
        ...state,
        offsetBy: action.offsetBy + state.offsetBy,
      };
    }

    case "LOAD_MORE_CATEGORIES": {
      return {
        ...state,
        categories: [...state.categories, ...action.categories],
      };
    }

    case 'TOGGLE_LOAD_MORE': {
      return {
        ...state,
        isLoadMoreVisible: action.isLoadMoreVisible
      }
    }

    default:
      return state;
  }
};

export default categories;
