import React from "react";
import Layout from "../components/layout/Layout";
import Card from "../components/common/Card";
import Avatar from "../components/layout/Avatar";
import { useLocation, Link } from "react-router-dom";
import PostCard from "../components/layout/PostCard";
import FriendInfo from "../components/layout/FriendInfo";

function Profile() {
  const location = useLocation();
  const { pathname } = location;
  const isPost = pathname.includes("posts") || pathname === "/profile";
  const isAbout = pathname.includes("about");
  const isFriends = pathname.includes("friends");
  const isPhotos = pathname.includes("photos");
  const tabClases =
    "flex gap-1 px-4 py-1 items-center border-b-4 border-b-white";
  const activeTabClasses =
    "flex gap-1 px-4 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold";
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

          <div className="p-4 pt-0 md:pt-4 pb-0">
            <div className="ml-24 md:ml-40">
              <h1 className=" text-2xl font-bold">Fish Ubuntu</h1>
              <div className="text-gray-500 leading-4">Quezon, City Manila</div>
            </div>
            <div className="mt-4 md:mt-10 flex gap-1 justify-between md:justify-start">
              {" "}
              <Link
                to="/profile/posts"
                className={isPost ? activeTabClasses : tabClases}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <span className="hidden sm:block">Posts</span>
              </Link>
              <Link
                to="/profile/about"
                className={isAbout ? activeTabClasses : tabClases}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                  />
                </svg>
                <span className="hidden sm:block">About</span>
              </Link>
              <Link
                to="/profile/friends"
                className={isFriends ? activeTabClasses : tabClases}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                <span className="hidden sm:block">Friends</span>
              </Link>
              <Link
                to="/profile/photos"
                className={isPhotos ? activeTabClasses : tabClases}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span className="hidden sm:block">Photos</span>
              </Link>
            </div>
          </div>
        </div>
      </Card>
      {isPost && (
        <div>
          <PostCard />
        </div>
      )}
      {isAbout && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2">About Me</h2>
            <p className="mb-2 text-xm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              repellat commodi rem perferendis in sunt obcaecati iure illo rerum
              tenetur sint.
            </p>
            <p className="mb-2 text-xm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              laborum aliquid laudantium tempore eligendi quod! Ut modi in neque
              sint voluptas delectus et eaque, a veritatis dicta optio non
              deleniti?
            </p>
          </Card>
        </div>
      )}
      {isFriends && (
        <div>
          <Card>
            <h2 className="text-3xl mb-2">Friends</h2>
            <div className="">
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
              <div className="border-b border-b-gray-100 p-4 -mx-4">
                <FriendInfo />
              </div>
            </div>
          </Card>
        </div>
      )}

      {isPhotos && (
        <Card>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
              <img
                src="https://images.unsplash.com/photo-1735292626224-9cbee37fd0d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
              <img
                src="https://images.unsplash.com/photo-1737079282750-5e2580fe5603?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
              <img
                src="https://images.unsplash.com/photo-1675308621282-6e69e2b40495?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="rounded-md overflow-hidden h-48 flex items-center shadow-md">
              <img
                src="https://images.unsplash.com/photo-1703464079969-5d0ec4f038ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </Card>
      )}
    </Layout>
  );
}

export default Profile;
