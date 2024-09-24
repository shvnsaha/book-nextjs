import Link from "next/link";
import React, { ReactNode } from "react";

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-fuchsia-100 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li className="bg-fuchsia-200 rounded">
            <Link href={"/dashboard/create-post"}>📝Create a Post</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
