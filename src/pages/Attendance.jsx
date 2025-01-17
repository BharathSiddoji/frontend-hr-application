import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Clock, UserCheck } from "lucide-react";

const mockAttendance = {
  present: 18,
  absent: 2,
  late: 1,
  currentMonth: "March 2024",
};

export default function Attendance() {
  const { user } = useAuth();
  const date = new Date();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Attendance Tracker</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Present Days</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAttendance.present}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Month</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockAttendance.currentMonth}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="pt-6">
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}