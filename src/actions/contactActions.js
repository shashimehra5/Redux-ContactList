import { GET_CONTACTS, GET_CONTACT, DELETE_CONTACTS, ADD_CONTACTS, UPDATE_CONTACTS, EDIT_CONTACTS} from './types';
import axios from 'axios'

// export const getContacts = () => {
//     return {
//         type : GET_CONTACTS
//     }
// }

// With api response

export const getContacts = () => async dispatch => {
    const res = await axios.get('http://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
}

export const getContact = id => async dispatch => {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    });

}

// export const deleteContact = id => {
//     return {
//         type : DELETE_CONTACTS,
//         payload: id
//     }
// }

// with api

export const deleteContact = id => async dispatch => {
    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({
        type: DELETE_CONTACTS,
        payload: id
    })
}

// export const AddContact = contact => {
//     return {
//         type : ADD_CONTACTS,
//         payload: contact
//     }
// }

// with apo
export const addContact = contact => async dispatch=> {
   const res = await axios.post('http://jsonplaceholder.typicode.com/users/', contact);
    dispatch({
        type: ADD_CONTACTS,
        payload: res.data
    })
}

export const editContact = id => async dispatch => {
    await axios.put(`http://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({
        type: EDIT_CONTACTS,
        payload: id
    })
}

export const updateContact = contact => async dispatch=> {
    const res = await axios.put(`http://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
     dispatch({
         type: UPDATE_CONTACTS,
         payload: res.data
     })
 }

