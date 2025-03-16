import React, { Component } from 'react'
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }

    submitClickHandler=(event)=>{
        event.preventDefault();
       console.log(this.state);
       axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
       .then(response=>console.log(response))
       .catch(error=>console.log(error))
    }
    
    changeEventHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
  render() {
     const {userId,title,body}=this.props;
    return (
      <div className='container'>
        <h2>Post Form</h2>
        <form onSubmit={this.submitClickHandler}>
        <div className='my-2'>
            <label>User ID</label>
            <input type='text' name='userId' value={userId} onChange={this.changeEventHandler} />
        </div>
        <div className='my-2'>
            <label>Title</label>
            <input type='text' name='title' value={title} onChange={this.changeEventHandler} />
        </div>
        <div>
            <label>Body</label>
            <input type='text' name='body' value={body} onChange={this.changeEventHandler} />
        </div>
        <input type="submit" />
      </form>
      </div>
    )
  }
}

export default PostForm
