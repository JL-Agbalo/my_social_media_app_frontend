import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import PostCard from "../components/layout/PostCard";
import PostFormCard from "../components/layout/PostFormCard";
import { fetchPosts } from "../services/api";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    getPosts();
  }, []);

  console.log("posts: ", posts);

  return (
    <>
      <Layout>
        <PostFormCard />
        <PostCard />
      </Layout>
    </>
  );
}

export default Home;
