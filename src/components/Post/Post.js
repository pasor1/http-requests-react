import React from 'react';

const post = (props) => (
    <article className="flex flex-col justify-between w-80 border border-gray-200 rounded-lg shadow-sm m-3 p-3 bg-gradient-to-b from-indigo-200 to-indigo-50 hover:from-indigo-300 hover:to-indigo-100" onClick={props.onclick}>
        <h3 className="text-lg font-semibold">{props.title}</h3>
        <div className="text-right text-base">{props.author}</div>
    </article>
);

export default post;