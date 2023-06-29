export default function FriendsReducer(friends,action){
    switch (action.type) {
        case'added': {
            return [
                ...friends,
                {
                    id: action.id,
                    text: action.test,
                    done:false,
                },
            ];
        }
        case 'changed': {
            return friends.map((t) => {
                if (t.id === action.friens.id) {
                    return action.friends;
                } else {
                    return t ;
                }
            });
        }
        case 'deleted': {
            return friends.filter((t) => t.id !== action.id);
        }
        default: {
            throw Error ('Unknown action: ' + action.type);
        }
    }
}
