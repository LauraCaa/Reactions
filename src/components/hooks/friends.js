import {useReducer} from 'react';
import FriendsReducer from '@/reducers/friends-reducer';

export default function Friends(){
    const [friends, dispatch] = useReducer(FriendsReducer,[
        {
          "id": "649ccc406d640a176e2232cf",
          "isActive": true,
          "picture": "http://placehold.it/32x32",
          "age": 22,
          "name": "Norman Melendez",
          "gender": "male",
          "company": "SLAMBDA",
          "email": "normanmelendez@slambda.com",
          "phone": "+1 (951) 526-2859",
          "address": "276 Neptune Avenue, Goldfield, Alabama, 2134",
          "registered": "2017-03-05T11:47:36 +05:00"
        },
        {
          "id": "649ccc40c5aa6044d35103a5",
          "isActive": false,
          "picture": "http://placehold.it/32x32",
          "age": 24,
          "name": "Thelma Hancock",
          "gender": "female",
          "company": "COMTEXT",
          "email": "thelmahancock@comtext.com",
          "phone": "+1 (823) 490-2688",
          "address": "302 Albee Square, Riner, Nebraska, 3573",
          "registered": "2021-09-15T02:18:43 +05:00"
        },
        {
          "id": "649ccc4034bfc52e1782254d",
          "isActive": true,
          "picture": "http://placehold.it/32x32",
          "age": 28,
          "name": "Bowman Green",
          "gender": "male",
          "company": "SURETECH",
          "email": "bowmangreen@suretech.com",
          "phone": "+1 (841) 548-3839",
          "address": "384 Degraw Street, Wildwood, Illinois, 7878",
          "registered": "2018-07-25T12:41:01 +05:00"
        },
        {
          "id": "649ccc4076d5ebaa37563e9b",
          "isActive": false,
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "name": "Rich Golden",
          "gender": "male",
          "company": "CENTREE",
          "email": "richgolden@centree.com",
          "phone": "+1 (944) 487-3162",
          "address": "812 Jefferson Street, Weedville, Iowa, 3676",
          "registered": "2016-03-10T02:18:40 +05:00"
        },
        {
          "id": "649ccc40dbec90b1ec63d953",
          "isActive": false,
          "picture": "http://placehold.it/32x32",
          "age": 35,
          "name": "Cabrera Lawrence",
          "gender": "male",
          "company": "SEQUITUR",
          "email": "cabreralawrence@sequitur.com",
          "phone": "+1 (889) 596-3932",
          "address": "358 Beekman Place, Walton, Maryland, 7178",
          "registered": "2017-06-07T09:24:52 +05:00"
        },
        {
          "id": "649ccc403cb746fdf63a5b2e",
          "isActive": false,
          "picture": "http://placehold.it/32x32",
          "age": 29,
          "name": "Shepard Calhoun",
          "gender": "male",
          "company": "PANZENT",
          "email": "shepardcalhoun@panzent.com",
          "phone": "+1 (849) 537-2981",
          "address": "627 Union Avenue, Lodoga, Wisconsin, 6659",
          "registered": "2017-10-07T02:57:05 +05:00"
        },
        {
          "id": "649ccc40f069d209950094c8",
          "isActive": true,
          "picture": "http://placehold.it/32x32",
          "age": 34,
          "name": "Jodie Hahn",
          "gender": "female",
          "company": "AFFLUEX",
          "email": "jodiehahn@affluex.com",
          "phone": "+1 (994) 438-3824",
          "address": "597 Moore Street, Edinburg, New Hampshire, 5070",
          "registered": "2014-10-07T10:58:58 +05:00"
        }
      ]);

    function handleDeletedFriend(friendId) {
        dispatch({
            type:'deleted',
            id:friendId,
        });
    };

    return(
        <>
            <h3>Reducers</h3>
            <ul>
                {friends?.map  ((friend) =>(
                    <li key={friend.id}>
                        {friend.name} - {friend.email}
                        <button onClick={()=> handleDeletedFriend(friend.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}