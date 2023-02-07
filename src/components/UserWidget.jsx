import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider'

function UserWidget() {
    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser);

    if(Object.keys(loggedInUser).length === 0){
        return <></>
    }
    return (
        <div id='user-widget'>
            <p className='user-widget-name'>{loggedInUser.name}</p>
            <img className='user-widget-img' src={loggedInUser.avatar_url} alt="" />
        </div>
    )
    }


export default UserWidget