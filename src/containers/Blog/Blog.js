import React from 'react';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Layout from '../Layout/Layout';

class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <section className="flex flex-wrap justify-center my-10">
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