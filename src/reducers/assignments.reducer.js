function assignmentListReducer(state = { assignments: [] }, action) {
  switch (action.type) {
    case ASSIGNMENT_LIST_REQUEST:
      return { loading: true, assignments: [] };
    case ASSIGNMENT_LIST_SUCCESS:
      return { loading: false, assignments: action.payload };
    case ASSIGNMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
      case ASSIGNMENT_SUBMIT_REQUEST:
        return { ...state,loading: true };
        case ASSIGNMENT_SUBMIT_SUCCESS:
          return { ...state,loading: true };
    default:
      return state;
  }
}


