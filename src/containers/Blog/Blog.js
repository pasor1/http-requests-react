import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Layout from '../Layout/Layout';

class Blog extends Component {
  render() {
    return (
      <Layout>
        <div>
          <section className="Posts">
            <Post />
            <Post />
            <Post />
          </section>
          <section>
            <FullPost />
          </section>
          <section>
            <NewPost />
          </section>
        </div>
      </Layout>
    );
  }
}

export default Blog;