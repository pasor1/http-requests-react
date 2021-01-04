import React from 'react';
import Skeleton from "react-loading-skeleton";

const postLoading = (props) => (
  <article className="relative w-80 border border-gray-200 rounded-lg shadow-sm m-3 p-3 bg-gradient-to-b from-indigo-200 to-indigo-50 hover:from-indigo-300 hover:to-indigo-100">
    <h3 className="text-lg font-semibold"><Skeleton count={2} height={30} width={300} /></h3>
    <div className="text-right text-base"><Skeleton height={20} width={70} /></div>
  </article>
);

export default postLoading;