function UserInfo(props) {
    
    return(
        <>
        {
            (props.user.site_admin ? <span style={{color: 'red'}}>Site Admin</span> : '')
        }
            <h2>{props.user.login}</h2>
            <p>{props.title}</p>
            {
                props.showImage ? (<img src={props.user.avatar_url} alt="" width="200" />) : null
            }
                
            <div>
            </div>
        </>
    );
}

export default UserInfo;