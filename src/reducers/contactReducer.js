import { GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS, UPDATE_CONTACTS, GET_CONTACT } from '../actions/types';
import Contact from '../components/contacts/Contact';

const initialState = {
    contacts: [],
    contact: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CONTACTS: 
        return {
            ...state,
            contacts: action.payload
        }
        case GET_CONTACT: 
        return {
            ...state,
            contact: action.payload
        }
        case DELETE_CONTACTS: 
        return {
            ...state,
            contacts: state.contacts.filter(
                Contact => Contact.id !== action.payload
            )
        }
        case ADD_CONTACTS: 
        return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        }
        case UPDATE_CONTACTS: 
        return {
            ...state,
            contacts: state.contacts.map(
                contact => contact.id === action.payload.id ? contact = action.payload : contact
            )
        }
    default: 
        return state;
    }
}