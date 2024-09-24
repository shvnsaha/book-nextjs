import React from "react";
import PostCard from "../ui/PostCard";
import { TPost } from "@/types";

const LatestPosts = ({ posts }: { posts: TPost[] }) => {
  const reversedPost = [...posts].reverse();
  return (
    <div className="my-10 w-[90%] mx-auto">
      <h1 className="text-4xl text-center">
        Latest <span className="text-fuchsia-800">Posts</span>
      </h1>
      <p className="text-gray-400 text-center italic w-2/4 mx-auto mt-2">
        Discover, review, and rate your favorite books. Join a community of book
        lovers and share your reading experiences.
      </p>
      <div className="grid grid-cols-3 my-12 gap-8">
        {reversedPost.slice(0, 6).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default LatestPosts;
