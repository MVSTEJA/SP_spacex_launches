const INITIAL_STATE = {
  categories: [],
  offsetBy: 0,
  isLoadMoreVisible: true
};

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

    case 'ERROR_GET_CATEGORIES': {
      return {
        ...state,
        categoriesError: action.error
      }
    }

    case 'IS_CATEGORIES_LOADING': {
      return {
        ...state,
        isCategoriesLoading: action.loading
      }
    }

    default:
      return state;
  }
};

export default categories;
