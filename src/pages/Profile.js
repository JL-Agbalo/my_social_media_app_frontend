import React from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/common/Card";
import Avatar from "../components/layout/Avatar";

function Profile() {
  return (
    <Layout>
      <Card noPadding={true}>
        <div className="relative  overflow-hidden rounded-md">
          <div className="h-36 overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1737395147941-d33851b5b9d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="absolute top-24 left-4">
            <Avatar size={"lg"} />
          </div>

          <div className="p-4 pb-24">
            <div className="ml-40">
              <h1 className=" text-2xl font-bold">John Doe</h1>
              <div className="text-gray-500 leading-4">Quezon, City Manila</div>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

export default Profile;
