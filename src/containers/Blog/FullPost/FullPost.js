import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
class FullPost extends React.Component {
  render() {
    let post = this.props.id
      ?
      (<>
        <h2>{this.props.title}</h2>
        <p className="my-3">{this.props.content}</p>
        <div className="border-t-2 border-indigo-200 text-center">
          <button className="btn btn-error" onClick={() => this.props.onclickDelete(this.props.id)}><div className="inline-block mr-2 text-2xl align-middle"><FaTrashAlt /></div> <span className="align-middle">Delete Post</span></button>
        </div>
      </>
      )
      :
      <p className="text-lg text-red-700 font-semibold">Please select a Post!</p>;
    return <div className="max-w-lg mx-auto border border-gray-200 rounded-lg shadow-sm m-10 p-5 bg-gradient-to-b from-indigo-200 to-indigo-50">{post}</div>;
  }
}

export default FullPost;