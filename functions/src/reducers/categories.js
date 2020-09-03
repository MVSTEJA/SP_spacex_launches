"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const INITIAL_STATE = {
  categories: [],
  offsetBy: 0,
  isLoadMoreVisible: true
};

const categories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "All_CATEGORIES":
      {
        return { ...state,
          categories: action.categories
        };
      }

    case "INCREMENT_CATEGORY_OFFSET":
      {
        return { ...state,
          offsetBy: action.offsetBy + state.offsetBy
        };
      }

    case "LOAD_MORE_CATEGORIES":
      {
        return { ...state,
          categories: [...state.categories, ...action.categories]
        };
      }

    case 'TOGGLE_LOAD_MORE':
      {
        return { ...state,
          isLoadMoreVisible: action.isLoadMoreVisible
        };
      }

    default:
      return state;
  }
};

var _default = categories;
exports.default = _default;