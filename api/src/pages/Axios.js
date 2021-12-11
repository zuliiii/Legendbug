import React, { Component } from 'react'
import axios from 'axios'

 class Axios extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users: []
        }
    }

    componentDidMount(){
              axios.get('https://jsonplaceholder.typicode.com/users')
              .then(response => {
                  this.setState({
                      users: response.data
                  })
              })
    }

    render() {
        const {users} = this.state
        return (
            <div>
                {
            users.map(user => (
              <div>
                 <div className="card" style={{width: '28rem'}}>
        <div className="card-body">
          <h5 className="card-title">{user.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{user.street}</h6>
          <p className="card-text">{user.email}</p>
          
        </div>
      </div>
              </div>
            ))
        }
            </div>
        )
    }
}

export default Axios
