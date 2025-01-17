import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/context/AuthContext";

const mockProfileData = {
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  department: "Engineering",
  position: "Software Engineer",
  joinDate: "2023-02-15",
  performanceScore: 85,
  skills: ["React", "JavaScript", "Node.js", "UI/UX"],
  leaveBalance: 15,
  projectsCompleted: 8,
};

export default function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={mockProfileData.avatar} alt={user?.name} />
                <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{user?.name}</h1>
                <p className="text-muted-foreground">{mockProfileData.position}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-sm font-medium">Department</p>
                <p className="text-muted-foreground">{mockProfileData.department}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Join Date</p>
                <p className="text-muted-foreground">{mockProfileData.joinDate}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Leave Balance</p>
                <p className="text-muted-foreground">{mockProfileData.leaveBalance} days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Overall Score</span>
                    <span className="text-sm text-muted-foreground">
                      {mockProfileData.performanceScore}%
                    </span>
                  </div>
                  <Progress value={mockProfileData.performanceScore} className="mt-2" />
                </div>
                <div>
                  <span className="text-sm font-medium">Projects Completed</span>
                  <p className="text-2xl font-bold mt-1">
                    {mockProfileData.projectsCompleted}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {mockProfileData.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}