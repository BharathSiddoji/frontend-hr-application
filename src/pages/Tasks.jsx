import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

const mockTasks = [
  {
    id: 1,
    title: "Complete Project Proposal",
    dueDate: "2024-03-20",
    status: "in-progress",
    progress: 65,
    priority: "high",
  },
  {
    id: 2,
    title: "Review Team Reports",
    dueDate: "2024-03-18",
    status: "pending",
    progress: 0,
    priority: "medium",
  },
  {
    id: 3,
    title: "Update Documentation",
    dueDate: "2024-03-15",
    status: "completed",
    progress: 100,
    priority: "low",
  },
];

const getStatusIcon = (status) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "in-progress":
      return <Clock className="h-4 w-4 text-blue-500" />;
    case "pending":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    default:
      return null;
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-800";
    case "medium":
      return "bg-yellow-100 text-yellow-800";
    case "low":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Tasks() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Task Management</h1>
        
        <div className="grid gap-4">
          {mockTasks.map((task) => (
            <Card key={task.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">
                  {task.title}
                </CardTitle>
                <div className="flex items-center gap-2">
                  {getStatusIcon(task.status)}
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress</span>
                    <span>Due: {task.dueDate}</span>
                  </div>
                  <Progress value={task.progress} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}