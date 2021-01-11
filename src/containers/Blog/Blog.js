import React from 'react';
import axios from 'axios';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Layout from '../Layout/Layout';


class Blog extends React.Component {
  state = {
    posts: [],
    post: {},
    postsLoading: true,
    error: false
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
          <Posts />
          {/* <section>
            <FullPost
              id={this.state.post.id}
              title={this.state.post.title}
              content={this.state.post.body}
              onclickDelete={this.deletePostHandler} />
          </section>
          <section>
            <NewPost />
          </section> */}
        </div>
      </Layout >
    );
  }
}

export default Blog;