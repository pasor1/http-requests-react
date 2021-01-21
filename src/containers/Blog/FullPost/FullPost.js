import React from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

class FullPost extends React.Component {
  state = {
    post: {},
    postLoading: true,
    error: false
  }

  deletePostHandler = (postId) => {
    this.setState({ postLoading: true })
    axios.delete(`/posts/${postId}`)
      .then(response => {
        this.setState({
          post: {},
          error: false
        });
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  componentDidMount = () => {
    const postId = this.props.match.params.id;
    axios.get(`/posts/${postId}`)
      .then(response => {
        this.setState({ post: response.data, error: false, postLoading: false })
      })
      .catch(error => {
        this.setState({ error: true })
      });
  }

  render() {
    let post = this.state.postLoading
      ? <p className="text-lg text-red-700 font-semibold">
        <Skeleton count={3} height={35} />
        <div className="border-t-2 border-indigo-200 text-center">
          <button className="btn btn-error opacity-10"><div className="inline-block mr-2 text-2xl align-middle"><FaTrashAlt /></div> <span className="align-middle">Delete Post</span></button>
        </div>
      </p>
      :
      (<>
        <h2>{this.state.post.title}</h2>
        <p className="my-3">{this.state.post.body}</p>
        <div className="border-t-2 border-indigo-200 text-center">
          <button className="btn btn-error" onClick={() => this.deletePostHandler(this.state.post.id)}><div className="inline-block mr-2 text-2xl align-middle"><FaTrashAlt /></div> <span className="align-middle">Delete Post</span></button>
        </div>
      </>
      )
    return <div className="max-w-lg mx-auto border border-gray-200 rounded-lg shadow-sm m-10 p-5 bg-gradient-to-b from-indigo-200 to-indigo-50">{post}</div>;
  }
}

export default FullPost;