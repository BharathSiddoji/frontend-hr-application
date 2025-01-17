import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const mockEmployees = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    position: "Software Engineer",
    joinDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    department: "Marketing",
    position: "Marketing Manager",
    joinDate: "2023-02-01",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    department: "Sales",
    position: "Sales Representative",
    joinDate: "2023-03-10",
  },
];

export default function Employees() {
  const { toast } = useToast();

  const handleAddEmployee = () => {
    toast({
      title: "Feature Coming Soon",
      description: "The ability to add new employees will be available soon.",
    });
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employee Management</h1>
        <Button onClick={handleAddEmployee}>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Join Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockEmployees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.joinDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}