import React from "react";
import NavigationCard from "./NavigationCard";

function Layout({ children, hideNavigation }) {
  let rightColumnClasses = "";
  if (hideNavigation) {
    rightColumnClasses += "w-full";
  } else {
    rightColumnClasses += "mx-4 md:mx-0 md:w-9/12";
  }
  return (
    <div className="md:flex mt-4 max-w-4xl mx-auto gap-6">
      {!hideNavigation && (
        <div className="bottom-0 md:static fixed w-full md:w-3/12  -mb-5">
          <NavigationCard />
        </div>
      )}
      <div className={rightColumnClasses}>{children}</div>
    </div>
  );
}

export default Layout;
