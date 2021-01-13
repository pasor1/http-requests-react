import React from 'react';
import axios from 'axios';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Layout from '../Layout/Layout';
import { Route } from 'react-router-dom';


class Blog extends React.Component {
  state = {
    post: {},
    error: false
  }

  postSelectedHandler = (postId) => {
    axios.get(`/posts/${postId}`)
      .then(response => {
        this.setState({ post: response.data, error: false })
      })
      .catch(error => {
        this.setState({ error: true })
      });
  }

  deletePostHandler = (postId) => {
    axios.delete(`/posts/${postId}`)
      .then(response => {
        this.setState({
          post: {}, error: false
        });
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }

  render() {
    return (
      <Layout>
        <div>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />

          <section>
            <FullPost
              id={this.state.post.id}
              title={this.state.post.title}
              content={this.state.post.body}
              onclickDelete={this.deletePostHandler} />
          </section>

        </div>

      </Layout >
    );
  }
}

export default Blog;