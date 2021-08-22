import React, { useContext } from 'react';
import ThemeContext from './themeContext';
import theme from './theme.js';


function UserInfo({user, showImage, title}) {
    const currentTheme = useContext(ThemeContext);
    

    function setAdmin(event, currentUser) {
        console.log(`Set user ${currentUser.login} as admin`);
    }

    return(
        <div onClick={(event) => setAdmin(event, user)} style={{backgroundColor: theme[currentTheme].backgroundColor  }} >
        {
            (user.site_admin ? <span style={{color: 'red'}}>Site Admin</span> : '')
        }
            <h2>{user.login}</h2>
            <p>{title}</p>
            {
                showImage ? (<img src={user.avatar_url} alt="" width="200" />) : null
            }
            <div>
            </div>
        </div>
    );
}

export default UserInfo;