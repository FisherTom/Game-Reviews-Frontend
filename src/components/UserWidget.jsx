import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserProvider'

function UserWidget() {
    const { loggedInUser,setLoggedInUser } = useContext(UserContext);

    if(Object.keys(loggedInUser).length === 0){
        return <></>
    }
    return (
        <div id='user-widget'>
            <p className='user-widget-name'>{loggedInUser.name}</p>
            <button className='user-widget-logout-button' onClick={() => setLoggedInUser({})}>Log-out</button>
            <img className='user-widget-img' src={loggedInUser.avatar_url} alt="" />
        </div>
    )
    }


export default UserWidget