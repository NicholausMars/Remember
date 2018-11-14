 import axios from 'axios';
export const ADD_CARD= "ADD_CARD",
 UPDATE_CARD= "UPDATE_CARD",
 DELETE_CARD="DELETE_CARD",
 UPDATE_FORM="UPDATE_FORM",
 TEST_CARD = "TEST_CARD",
  SUBMIT_CARD = "SUBMIT_CARD";


 export const serverTest = (newCard)=>{
  return async dispatch => {
     const res = await axios.get('/api/profile/MasterCard');
     dispatch( {type: TEST_CARD, payload: res.data } );
   }
 }

export const addCard = (card)=>{
  // this process is never to go to the back end
  // i will use a cookie to store the cards so that when
  // the user refresh the screen all the cards arnt lost
  // will apply in the memory section
  return {
    type: ADD_CARD,
    payload: card
  };
}
export const deleteCard = (id)=>{
  return {
  type: DELETE_CARD,
  payload: id
  }
}
/*
  @param ID, Title, Description
*/
export const updateCard = (newCard)=>{
  return {
  type: UPDATE_CARD,
  payload: newCard
  }
}

/*
 send a true value to the form field which  display icon button to update card
  @param ID, Title, Description
*/
export const updateForm = (newCard)=>{
  return {
  type: UPDATE_FORM,
  payload: newCard
  }
}

export const submitCard= (allcards, masterTitle)=>{
  let data = { cards :allcards, title: masterTitle };
 return async dispatch => {
    const res = await axios.post('/api/profile/MasterCard',data);
    dispatch( {type: SUBMIT_CARD, payload: res.data } );
  }
}

//  async (allcards, masterTitle)=>{
//   // have a post request which send
//   let data = { cards :allcards, title: masterTitle };
//   const res = await axios.post('/api/profile/MasterCard',data);
//   console.log(res);
//   return {
//   type: SUBMIT_CARD,
//   payload: res
//   }
// }

//Test dispatch method from server
// export const testServer = () =>
//   async dispatch => {
//     const res = await axios.get('/api/profile/MasterCard');
//     dispatch( {type: TEST_CARD, payload: res.data } );
//
