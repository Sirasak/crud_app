const initialUsersState =
    {
        users: [
            {
                select: false,
                id: null,
                title: null,
                firstname: null,
                lastname: null,
                birthday: null,
                nationality: null,
                citizen: null,
                gender: null,
                mobile: null
            }
        ]
    }


console.log(initialUsersState);

const userReducer = (state = initialUsersState, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'SUBMIT':
            return [...state, action.payload];
        case 'EDIT':    
            return [...state, action.payload];
        case 'DELETE':
            console.log(action)
            return state.filter(user =>
                user.id !== action.payload.id)
        case 'SELECTED':
            return console.log("checkbox selected");

    default:
    return state;
    };
}

export default userReducer;