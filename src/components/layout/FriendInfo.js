import React from "react";
import Avatar from "./Avatar";
function FriendInfo() {
  return (
    <div className="flex gap-2">
      <Avatar />
      <div>
        <h3 className="fond-bold text-xl">Shawon Grape</h3>
        <div className="text-sm leading-3">5 mutial friends</div>
      </div>
    </div>
  );
}

export default FriendInfo;
