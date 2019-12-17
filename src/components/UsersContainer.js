import React, {Component} from 'react'
import Users from './Users'

class UsersContainer extends Component {
    state = {
        users: []
    }
    componentDidMount(){
        let url = `http://localhost:9000/api/xgames/users`
        fetch(url)
        .then(res=> res.json())
        .then(res=> this.setState({users: res}))
        .catch(err => console.log(err))
    }
    render() {
        return (
            <Users data={this.state.users.length == 0 ? [] : this.state.users} />
        )
    }
}

export default UsersContainer