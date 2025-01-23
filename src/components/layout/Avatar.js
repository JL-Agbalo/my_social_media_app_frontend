import React from "react";

function Avatar({ size }) {
  let width = "w-12";
  if (size === "lg") {
    width = "w-36";
  }
  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img
        src="https://images.unsplash.com/photo-1497340525489-441e8427c980?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
}

export default Avatar;
