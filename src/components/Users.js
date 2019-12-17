import React from 'react'

const Users = (props) => {
    let users = props.data.map(user => {
        return (
            <p>{user.first_name} {user.last_name} email: {user.email} </p>
        )
    })

    return (
        <div>
            {users}
        </div>
    )
}

export default Users