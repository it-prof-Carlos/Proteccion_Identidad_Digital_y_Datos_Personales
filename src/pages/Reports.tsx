import { useState } from "react";
import { Upload, FileText, Image, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Reports = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
      toast.success("Files added successfully");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically upload the files to your backend
    console.log("Files to upload:", files);
    console.log("Description:", description);
    toast.success("Report submitted successfully");
    setFiles([]);
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto max-w-2xl">
        <header className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-foreground">
            Vulnerability Reports
          </h1>
          <p className="text-muted-foreground">
            Upload reports, photos, or documents related to security vulnerabilities
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-foreground">
              Upload Files
            </label>
            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center gap-2"
              >
                <Upload className="h-10 w-10 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Click to upload or drag and drop
                </span>
              </label>
            </div>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-foreground">
                Selected Files:
              </h3>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    {file.type.includes("image") ? (
                      <Image className="h-4 w-4" />
                    ) : (
                      <FileText className="h-4 w-4" />
                    )}
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Description
            </label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the vulnerability or security concern..."
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit Report
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Reports;