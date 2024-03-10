import { cn } from "@/lib/utils";
import { LayoutDashboard, FolderPlus, ListOrdered } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="col-span-2 bg-primary h-screen sticky top-0 left-0 overflow-auto p-2 lg:p-5">
      <nav className="flex flex-col ">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "p-3 bg-light-gray rounded-md hover:bg-black/90 hover:text-white mb-1 transition-all flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="size-5 " />
          <span className="truncate hidden md:block font-semibold">Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "p-3 bg-light-gray rounded-md hover:bg-black/90 hover:text-white mb-1 transition-all flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <ListOrdered className="size-5 " />
          <span className="truncate hidden md:block font-semibold">Service List</span>
        </NavLink>

        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "p-3 bg-light-gray rounded-md hover:bg-black/90 hover:text-white mb-1 transition-all flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <FolderPlus className="size-5 " />
          <span className="truncate hidden md:block font-semibold">Add Service</span>
        </NavLink>
        
      </nav>
    </aside>
  );
};

export default Sidebar;
