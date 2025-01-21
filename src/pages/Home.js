import React from "react";
import Card from "../components/common/Card";
import NavigationCard from "../components/layout/NavigationCard";
import PostFormCard from "../components/layout/PostFormCard";
import Avatar from "../components/layout/Avatar";

function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6 ">
      <div className="w-1/3">
        <NavigationCard />
      </div>
      <div className="grow">
        <PostFormCard />
        <Card>
          <Avatar />
        </Card>
      </div>
    </div>
  );
}

export default Home;
