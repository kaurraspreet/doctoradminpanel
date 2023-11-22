"use client";

import React from "react";
import { Likes, Comments, Shares, Saves } from "../SvgIcon";

const Post = () => {
  return (
    <div>
      <div className="border-x  border-t border-black bg-slate-300 rounded-t-md h-72 w-full max-w-xs"></div>
      <div className="flex flex-row items-center px-4 gap-2 border-x  border-b border-black  rounded-b-md h-12 w-full max-w-xs">
        <Likes className="w-7" />
        <Comments className="w-7" />
        <Shares className="w-7" />
        <Saves className="w-5 ml-auto" />
      </div>
    </div>
  );
};

export default Post;
