const initialUsersState = []
// {
//     users: [
//         {
//             select: false,
//             id: null,
//             title: null,
//             firstname: null,
//             lastname: null,
//             birthday: null,
//             nationality: null,
//             citizen: null,
//             gender: null,
//             mobile: null
//         }
//     ]
// }

console.log(typeof initialUsersState);

const userReducer = (state = initialUsersState, action) => {
    console.log(action);
    switch (action.type) {
        case 'SUBMIT':
            return [...state, action.payload];
        case 'EDIT':
            return [...state, action.payload];
        case 'DELETE':
            return [...state.users.filter(id => id !== action.id)]
    default:
    return state;
    };
}

export default userReducer;