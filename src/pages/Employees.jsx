
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
import { Input } from "@/components/ui/input";
import { UserPlus, Search, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddEmployeeForm } from "@/components/employees/AddEmployeeForm";

const mockEmployees = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering",
    position: "Software Engineer",
    joinDate: "2023-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    department: "Marketing",
    position: "Marketing Manager",
    joinDate: "2023-02-01",
    status: "Active",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    department: "Sales",
    position: "Sales Representative",
    joinDate: "2023-03-10",
    status: "On Leave",
  },
];

export default function Employees() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState(mockEmployees);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddEmployee = (data) => {
    const newEmployee = {
      id: employees.length + 1,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      department: "TBD",
      position: "TBD",
      joinDate: data.dateOfJoining,
      status: "Active",
    };

    setEmployees([...employees, newEmployee]);
    setIsDialogOpen(false);
    toast({
      title: "Success",
      description: "New employee has been added successfully.",
    });
  };

  const handleEditEmployee = (id) => {
    toast({
      title: "Edit Employee",
      description: `Editing employee with ID: ${id}`,
    });
  };

  const handleDeleteEmployee = (id) => {
    toast({
      title: "Delete Employee",
      description: `Deleting employee with ID: ${id}`,
    });
  };

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <DashboardLayout>
      <div className="p-6 md:p-8 lg:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold">Employee Management</h1>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Employee
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-primary">Add New Employee</DialogTitle>
              </DialogHeader>
              <AddEmployeeForm onSubmit={handleAddEmployee} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-primary" />
            <Input
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader className="bg-secondary">
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmployees.map((employee) => (
                <TableRow key={employee.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.joinDate}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      employee.status === "Active" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-amber-100 text-amber-800"
                    }`}>
                      {employee.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEditEmployee(employee.id)}
                      className="text-primary hover:text-primary/80 hover:bg-primary/10"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteEmployee(employee.id)}
                      className="text-destructive hover:text-destructive/80 hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
}
