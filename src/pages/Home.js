import React from "react";
import Layout from "../components/layout/Layout";
import PostCard from "../components/layout/PostCard";
import PostFormCard from "../components/layout/PostFormCard";
function Home() {
  return (
    <Layout>
      <PostFormCard />
      <PostCard />
    </Layout>
  );
}

export default Home;
