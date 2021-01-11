import React from 'react';
import axios from 'axios';
import { FaCheck } from "react-icons/fa";

class NewPost extends React.Component {
  state = {
    title: '',
    content: '',
    author: '',
    formIsValid: false
  }

  updateFormStatus = () => {
    let valid = false;
    if (this.state.title && this.state.content && this.state.author) {
      valid = true;
    }
    this.setState({ formIsValid: valid })
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    }, this.updateFormStatus)
  }

  submitPostHandler = (event) => {
    const data = {
      title: this.state.title,
      content: this.state.content,
      author: this.state.author
    };
    axios.post('/posts', data)
      .then((response) => console.log(response));
    event.preventDefault();
  }

  render() {
    return (
      <div className="max-w-lg mx-auto border border-gray-200 rounded-lg shadow-sm m-10 p-5 bg-gradient-to-b from-indigo-200 to-indigo-50">
        <h2>Add a Post</h2>
        <form onSubmit={this.submitPostHandler}>
          <div className="my-3">
            <p className="my-5">
              <label className="text-sm">Title</label><br />
              <input
                name="title"
                className="w-full"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              <label className="text-sm">Content</label><br />
              <textarea
                name="content"
                className="w-full"
                rows="4"
                value={this.state.content}
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              <label className="text-sm">Author</label><br />
              <select
                name="author"
                className="w-full"
                value={this.state.author}
                onChange={this.handleInputChange}
              >
                <option></option>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
              </select>
            </p>
          </div>
          <div className="border-t-2 border-indigo-200 text-center">
            {this.state.formIsValid
              ? <button className="btn btn-success align-middle" onClick={this.addPostHandler}><div className="inline-block align-middle"><FaCheck /></div> <span className="align-middle">Add Post</span></button>
              : <button className="btn btn-success btn-disabled" disabled><div className="inline-block align-middle"><FaCheck /></div> <span className="align-middle">Add Post</span></button>
            }
          </div>
        </form>
      </div >
    );
  }
}

export default NewPost;