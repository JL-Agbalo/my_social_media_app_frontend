import React from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/common/Card";
import Avatar from "../components/layout/Avatar";
import { Link } from "react-router-dom";

function Notification() {
  return (
    <Layout>
      <h1 className="text-6xl mb-4 text-gray-300">Notifications</h1>
      <Card noPadding={true}>
        <div className="">
          <div className="flex items-center gap-2 border-b border-b-gray-100 p-4">
            <Link to="/profile">
              <Avatar />
            </Link>
            <div>
              <Link className="font-semibold mr-1 hover:underline" href="">
                Chawona Jahaan
              </Link>{" "}
              liked{" "}
              <Link
                className="ml-1 text-socialBlue hover:underline"
                to="/profile/photos"
              >
                your photo
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 border-b border-b-gray-100 p-4">
            <Link to="/profile">
              <Avatar />
            </Link>
            <div>
              <Link className="font-semibold mr-1 hover:underline" href="">
                Chawon Hangaas
              </Link>{" "}
              liked{" "}
              <Link
                className="ml-1 text-socialBlue hover:underline"
                to="/profile/photos"
              >
                your photo
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2 border-b border-b-gray-100 p-4">
            <Link to="/profile">
              <Avatar />
            </Link>
            <div>
              <Link className="font-semibold mr-1 hover:underline" href="">
                Chawun Sungitaan
              </Link>{" "}
              liked{" "}
              <Link
                className="ml-1 text-socialBlue hover:underline"
                to="/profile/photos"
              >
                your photo
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
}

export default Notification;
