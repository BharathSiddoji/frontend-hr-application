import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = {
  departmentStats: [
    { department: "Engineering", employees: 12, attendance: 95, performance: 88 },
    { department: "Marketing", employees: 8, attendance: 92, performance: 85 },
    { department: "Sales", employees: 10, attendance: 88, performance: 90 },
    { department: "HR", employees: 4, attendance: 96, performance: 92 },
  ],
};

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Department Reports</h1>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Department Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockData.departmentStats}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="department" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="performance" fill="#8884d8" name="Performance %" />
                    <Bar dataKey="attendance" fill="#82ca9d" name="Attendance %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {mockData.departmentStats.map((dept) => (
              <Card key={dept.department}>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">{dept.department}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dept.employees}</div>
                  <p className="text-xs text-muted-foreground">Employees</p>
                  <div className="mt-4 flex items-center space-x-2">
                    <div className="text-sm">
                      Performance: {dept.performance}%
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}