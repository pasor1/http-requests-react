import React from 'react';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Layout from '../Layout/Layout';
import { Route } from 'react-router-dom';


class Blog extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/post/:id" component={FullPost} />
        </div>
      </Layout >
    );
  }
}

export default Blog;