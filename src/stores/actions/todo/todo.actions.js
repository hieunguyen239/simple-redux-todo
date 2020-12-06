import * as actionType from './todo.actionTypes';

const add = (todo) => {
  return {
    type: actionType.ADD,
    todo
  }
}

const remove = (id) => {
  return {
    type: actionType.REMOVE,
    id
  }
}

export default {
  add,
  remove
}