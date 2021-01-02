import React from 'react';

const post = (props) => (
    <article className="w-40 border border-gray-200 rounded-lg shadow-sm m-3 p-3 bg-gradient-to-b from-indigo-200 to-indigo-50 hover:from-indigo-300 hover:to-indigo-100">
        <h3>Title</h3>
        <div className="Info">
            <div className="Author">Author</div>
        </div>
    </article>
);

export default post;