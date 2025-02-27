
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useAuth } from "@/context/AuthContext";
import { 
  Users, 
  UserCheck, 
  Clock, 
  CalendarDays,
  UserCircle,
  Calendar,
  ClipboardList,
  Bell
} from "lucide-react";

const hrStats = [
  {
    title: "Total Employees",
    value: "124",
    icon: Users,
    description: "Active members",
  },
  {
    title: "Present Today",
    value: "98",
    icon: UserCheck,
    description: "79% attendance",
  },
  {
    title: "Average Hours",
    value: "7.5",
    icon: Clock,
    description: "Per day",
  },
  {
    title: "Leave Requests",
    value: "12",
    icon: CalendarDays,
    description: "Pending approval",
  },
];

const employeeStats = [
  {
    title: "Attendance Status",
    value: "Present",
    icon: UserCheck,
    description: "Checked in at 9:00 AM",
  },
  {
    title: "Leave Balance",
    value: "15",
    icon: Calendar,
    description: "Days remaining",
  },
  {
    title: "Pending Tasks",
    value: "3",
    icon: ClipboardList,
    description: "Due this week",
  },
  {
    title: "Work Hours",
    value: "7.5",
    icon: Clock,
    description: "Today's logged hours",
  },
];

const Index = () => {
  const { user } = useAuth();
  const stats = user?.role === 'hr' ? hrStats : employeeStats;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {user?.role === 'hr' ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Activity feed will be implemented here
                </p>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quick action buttons will be implemented here
                </p>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>My Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Team Meeting</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 11:00 AM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <ClipboardList className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Project Review</p>
                    <p className="text-sm text-muted-foreground">2:00 PM - 3:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Announcements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Bell className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Office Maintenance</p>
                    <p className="text-sm text-muted-foreground">Server maintenance scheduled for this weekend</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Bell className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Holiday Notice</p>
                    <p className="text-sm text-muted-foreground">Office will be closed next Monday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Index;
