import React, { Component } from 'react';

class FullPost extends Component {
  render() {
    let post = <p>Please select a Post!</p>;
    post = (
      <div className="w-auto border border-gray-200 rounded-lg shadow-sm m-10 p-5 bg-gradient-to-b from-indigo-200 to-indigo-50">
        <h2>Title</h2>
        <p>Content</p>
        <div className="border-t-2 border-indigo-200 text-center">
          <button className="btn-error">Delete</button>
        </div>
      </div>

    );
    return post;
  }
}

export default FullPost;