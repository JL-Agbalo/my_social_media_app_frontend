import React from "react";
import Layout from "../components/layout/Layout";
import PostCard from "../components/layout/PostCard";

function SavedPosts() {
  return (
    <Layout>
      <h1 className="text-6xl mb-4 text-gray-300">Saved posts</h1>
      <PostCard />
      <PostCard />
    </Layout>
  );
}

export default SavedPosts;
