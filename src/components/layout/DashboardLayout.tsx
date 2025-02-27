
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="border-b">
            <div className="container flex h-16 items-center justify-between">
              <h2 className="text-lg font-semibold">
                <span className="text-primary">SaNa HR</span> management application
              </h2>
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
          <div className="container py-6 space-y-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
