import React, { Component } from 'react'
import axios from 'axios'
export class Posts extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[],
       errorMsg:'ddd'
    }
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
        (response)=>{
            console.log(response)
            this.setState(()=>({posts:response.data}),()=>console.log(this.state))
            
        }
    )
    .catch(error=>{
      console.log(error)
this.setState({errorMsg:'Error in Reteriving Data'})    
    })
  }
  
    render() {
    return (
    <div>
      <h2>List of Post</h2>
         {this.state.posts.length?

       this.state.posts.map(post=>{return <div key={post.id}>{post.id} {post.title}</div>}):
       null

      }
      {
      this.state.errorMsg?<h1>{this.state.errorMsg}</h1>:null
    }
      </div>
    )
  }
}

export default Posts
