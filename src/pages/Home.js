import React from "react";
import Card from "../components/common/Card";
import NavigationCard from "./NavigationCard";

function Home() {
  return (
    <div className="flex mt-4 max-w-4xl mx-auto gap-6 ">
      <div className="w-1/3">
        <NavigationCard />
      </div>
      <div className="grow">
        <Card>Form Here</Card>
        <Card>First First</Card>
      </div>
    </div>
  );
}

export default Home;
