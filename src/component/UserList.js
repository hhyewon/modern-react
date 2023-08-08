import React from "react";

function User({user}) {

    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}


function UserList() {

    const users= [
        {
            id: 1,
            username: 'hyewon1',
            email: 'hyewon1@gmail.com'
        },
        {
            id: 2,
            username: 'hyewon2',
            email: 'hyewon2@gmail.com'
        },
        {
            id: 3,
            username: 'hyewon3',
            email: 'hyewon3@gmail.com'
        },
    ];

    return(
        <div>
            {/* 리액트에서 배열 랜더링 시 key라는 props를 설정해야 함 (값 변경 시 하위 값에 영향을 줌)*/}
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </div>
    )
}


export default UserList;