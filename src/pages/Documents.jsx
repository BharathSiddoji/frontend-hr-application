import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Upload } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const mockDocuments = [
  {
    id: 1,
    name: "Employment Contract",
    type: "PDF",
    size: "2.5 MB",
    uploadDate: "2023-02-15",
  },
  {
    id: 2,
    name: "Employee Handbook",
    type: "PDF",
    size: "1.8 MB",
    uploadDate: "2023-02-15",
  },
  {
    id: 3,
    name: "Benefits Overview",
    type: "PDF",
    size: "1.2 MB",
    uploadDate: "2023-03-01",
  },
  {
    id: 4,
    name: "Performance Review 2023",
    type: "PDF",
    size: "500 KB",
    uploadDate: "2023-12-15",
  },
];

export default function Documents() {
  const { toast } = useToast();

  const handleUpload = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Document upload functionality will be available soon.",
    });
  };

  const handleDownload = (documentName) => {
    toast({
      title: "Downloading Document",
      description: `Started downloading ${documentName}`,
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Documents</h1>
          <Button onClick={handleUpload}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Button>
        </div>

        <div className="grid gap-4">
          {mockDocuments.map((doc) => (
            <Card key={doc.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-base font-medium">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {doc.name}
                  </div>
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDownload(doc.name)}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Type: {doc.type}</span>
                  <span>Size: {doc.size}</span>
                  <span>Uploaded: {doc.uploadDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}