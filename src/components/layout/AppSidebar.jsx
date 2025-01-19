import {
  Users,
  Calendar,
  ClipboardList,
  BarChart3,
  Settings,
  Home,
  UserCircle,
  Clock,
  FileText,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const hrMenuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Employees", icon: Users, path: "/employees" },
  { title: "Attendance", icon: Calendar, path: "/attendance" },
  { title: "Tasks", icon: ClipboardList, path: "/tasks" },
  { title: "Reports", icon: BarChart3, path: "/reports" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

const employeeMenuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "My Profile", icon: UserCircle, path: "/profile" },
  { title: "Attendance", icon: Clock, path: "/attendance" },
  { title: "Tasks", icon: ClipboardList, path: "/tasks" },
  { title: "Documents", icon: FileText, path: "/documents" },
];

const getMenuItems = (role) => {
  return role === "hr" ? hrMenuItems : employeeMenuItems;
};

export function AppSidebar() {
  const { user } = useAuth();
  const location = useLocation();
  const menuItems = user ? getMenuItems(user.role) : [];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {user?.role === "hr" ? "HR Management" : "Employee Portal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link 
                      to={item.path} 
                      className="flex items-center gap-3"
                      data-active={location.pathname === item.path}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}