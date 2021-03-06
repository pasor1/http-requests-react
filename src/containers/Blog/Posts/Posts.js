import React from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import PostLoading from '../../../components/PostLoading/PostLoading';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  authors = ['Max', 'Manu', 'Paso', 'Anna'];
  postNums = 6;
  state = {
    posts: [],
    postsLoading: true,
    error: false
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, this.postNums);
        const updatedPosts = posts.map((post) => {
          return { ...post, author: this.authors[Math.floor(Math.random() * this.authors.length)] }
        })
        this.setState({ posts: updatedPosts, error: false, postsLoading: false });
      })
      .catch(error => {
        this.setState({ error: true })
      })
  }
  render() {
    return (

      <>
        {this.state.error
          ? <div className="w-auto text-center bg-gradient-to-b from-red-600 to-red-400 rounded text-gray-50 m-10 p-5 shadow-lg"><h1>ERROR...</h1></div>
          : null}
        <section className="flex flex-wrap justify-center my-10">
          {
            this.state.postsLoading
              ? Array.from({ length: this.postNums }, (e, i) => <PostLoading key={i} />)
              : (this.state.posts.map(post => (
                <Link to={`/post/${post.id}`} key={post.id}>
                  <Post
                    title={post.title}
                    author={post.author} />
                </Link>
              )))
          }
        </section>
      </>
    )
  }
}

export default Posts