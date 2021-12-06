import React, { Component } from 'react'

 class Fetch extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        posts: [],
        isLoading: false
     }
   }
        componentDidMount(){
          fetch('https://jsonplaceholder.typicode.com/posts?_offset=0&_limit=5')
          .then(res => res.json())
          .then(json => this.setState(
            {
              isLoading: true,
              posts: json
            }
          ))
        }
   
   render() {
     const {posts, isLoading} = this.state;

     if(!isLoading){
       return <div>Data is loading...</div>
     } else {
      return (
        <div>
          {
            posts.map(post => (
              <div><div className="card" style={{width: '28rem'}}>
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{post.id}</h6>
                <p className="card-text">{post.body}</p>
               
              </div>
            </div>
            </div>
            ))
          }
        </div>
      )
     }


   
  }
}

export default Fetch
