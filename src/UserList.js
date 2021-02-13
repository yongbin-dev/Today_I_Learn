import React , {useEffect} from 'react';

function User({user , onRemove , onToggle}){

    const {username , email , id , active} = user;
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        // props -> state
        // REST API
        // D3 video.js
        // setInterval , setTimeout

        return () =>{
            // clearInterval , clearTimeout
            // 라이브러리 인스턴스 제거
            console.log('컴포넌트가 화면에서 사라짐');            
        }

    }, [] );

    return(
    <div>
        <b style = {{
            color : active ? 'green' : 'black',
            cursor : 'pointer'
        }}
        onClick = {()=> onToggle(id)}
        >
            {user.username}</b> <span>{user.email}</span>
        <button onClick={ () => onRemove(user.id) }>삭제</button>
    </div>    
    )
}

function UserList(  {users , onRemove , onToggle } ){
   
    return (
        <div>
            {
            users.map(
                (user,index) => (<User 
                    user={user} 
                    key = {user.id}  
                    onRemove={onRemove}
                    onToggle = {onToggle} />)
            )
            
            }
        </div>

    )
}

export default UserList;