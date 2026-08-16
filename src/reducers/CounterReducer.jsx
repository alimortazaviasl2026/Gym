import { Back, Next , Reset } from "../actions/CounterActions";

const CounterReducer = (commentNumber, action ) => {

  switch (action.type) {
    case Next : return commentNumber + 1 
    break;
    case Back : return commentNumber - 1 
    break;
    case Reset : return 0
    break;
    case "LAST_INDEX" : return 2
    break;

    default :return commentNumber  
  }

}

export default CounterReducer