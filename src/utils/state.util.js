export const updateState = (state, updateEle) => {
  return {
    ...state,
    ...updateEle
  }
}