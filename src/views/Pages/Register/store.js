import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'

// const initialForm = {
//             username: '',
//             password: '',
//             confirmPassword: '',
//             name: '',
//             surname: '',
//             nickname: '',
//             age: '',
//             phoneNumber: '',
//             line: '',
//             email: '',
//             address: {
//                 village: '',
//                 subDistrict: '',
//                 district: '',
//                 province: '',
//                 postalCode: '',
//                 country: '',
//             }
//         }

        
// const formReducer = (newdata = initialForm, action) => {
//     console.log("121",newdata);
    
//     switch (action.type) {
//         case 'CHANGE_username' : return {...newdata, username: action.data.username};
//         case 'CHANGE_password' : return {...newdata, password: action.data.password};
//         case 'CHANGE_confirmPassword' : return {...newdata, confirmPassword: action.data.confirmPassword};
//         case 'CHANGE_name' : return {...newdata, name: action.data.name};
//         case 'CHANGE_surname' : return {...newdata, surname: action.data.surname};
//         case 'CHANGE_nickname' : return {...newdata, nickname: action.data.nickname};
//         case 'CHANGE_age' : return {...newdata, age: action.data.age};
//         case 'CHANGE_phoneNumber' : return {...newdata, phoneNumber: action.data.phoneNumber};
//         case 'CHANGE_line' : return {...newdata, line: action.data.line};
//         case 'CHANGE_email' : return {...newdata, email: action.data.email};
//         case 'CHANGE_houseNo' : return {...newdata, address :{...newdata.address , houseNo: action.data.houseNo}};
//         case 'CHANGE_village' : return {...newdata,  address :{...newdata.address , village: action.data.village}};
//         case 'CHANGE_subDistrict' : return {...newdata,  address :{...newdata.address , subDistrict: action.data.subDistrict}};
//         case 'CHANGE_district' : return {...newdata,  address :{...newdata.address , district: action.data.district}};
//         case 'CHANGE_province' : return {...newdata,  address :{...newdata.address , province: action.data.province}};
//         case 'CHANGE_postalCode' : return {...newdata,  address :{...newdata.address , postalCode: action.data.postalCode}};
//         case 'CHANGE_country' : return {...newdata,  address :{...newdata.address , country: action.data.country}};
//         default: return newdata;
//     }
// }

const userReducer = (users = [], action) => {
    switch (action.type) {
        // case 'GET_USER': return action.users;
        // case 'ADD_USER': return [...users, action.createUser];

        // case 'DELETE_USER': return users.filter(users => +users.id !== +action.id);
        // case 'UPDATE_USER': return users.map(user => {
        //     if(+user.id === +action.id)
        //         return action.user;
        //     else 
        //         return user;
        // })
    }
    return users;
}

const reducers = combineReducers({
    user: userReducer,
    // form: formReducer
})

export const store = createStore(reducers, applyMiddleware(logger));