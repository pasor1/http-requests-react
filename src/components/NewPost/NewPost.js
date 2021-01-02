import React, { Component } from 'react';

class NewPost extends Component {
  state = {
    title: '',
    content: '',
    author: 'Max'
  }

  render() {
    return (
      <div className="w-auto border border-gray-200 rounded-lg shadow-sm m-10 p-5 bg-gradient-to-b from-indigo-200 to-indigo-50">
        <h2>Add a Post</h2>
        <div className="">
          <p className="my-5">
            <label className="text-sm">Title</label><br />
            <input className="w-80" type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
          </p>
          <p>
            <label className="text-sm">Content</label><br />
            <textarea className="w-80" rows="4" value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
          </p>
          <p>
            <label className="text-sm">Author</label><br />
            <select className="w-80" value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
              <option value="Max">Max</option>
              <option value="Manu">Manu</option>
            </select>
          </p>
          <div className="border-t-2 border-indigo-200 text-center my-5">
            <button className="btn-success">Add Post</button>
          </div>
        </div>
      </div >
    );
  }
}

export default NewPost;