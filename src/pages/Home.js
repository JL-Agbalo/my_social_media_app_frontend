import React from "react";
import NavigationCard from "../components/layout/NavigationCard";
import PostFormCard from "../components/layout/PostFormCard";
import PostCard from "../components/layout/PostCard";

function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6 ">
      <div className="w-3/12">
        <NavigationCard />
      </div>
      <div className="w-9/12">
        <PostFormCard />
        <PostCard />
      </div>
    </div>
  );
}

export default Home;
