const appReducer = (state, action) => {
  switch (action.type) {
    case "WILDERS_FETCH_SUCCESS":
      return { ...state, wilders: action.wilders };

    case "WILDER_ADDED":
      return {
        ...state,
        showAddForm: false,
        successMessage: `The wilder ${action.newWilder.name} has been successfully added`,
        wilders: [{ ...action.newWilder, justAdded: true }, ...state.wilders],
      };

    case "WILDER_DELETED":
      return {
        ...state,
        wilders: [
          { ...action.deletedWilder, justDeleted: true },
          ...state.wilders,
        ],
        deletedMessage: `The wilder ${action.deletedWilder.name} has been deleted`,
      };

    case "TOGGLE_SHOW_ADD_FORM":
      return { ...state, showAddForm: !state.showAddForm };

    default:
      return state;
  }
};

export default appReducer;
