export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const DELETE_USER = 'DELETE_USER';
// grab from the database as well???

export function addUser(userInfo) {
  return { type: ADD_USER, userInfo };
}

export function editUser(userInfo) {
  return { type: EDIT_USER, userInfo };
}

export function deleteUser(index) {
  return { type: DELETE_USER, index };
}
