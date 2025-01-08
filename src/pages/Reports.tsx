import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Reports = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
      toast.success("Archivos seleccionados correctamente");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files) {
      // Aquí se implementaría la lógica de carga de archivos
      toast.success("Reporte enviado correctamente");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-primary mb-8">
        Reportes de Vulnerabilidad
      </h1>

      <div className="grid gap-8">
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Subir Nuevo Reporte</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">
                Archivos del Reporte
              </label>
              <Input
                type="file"
                onChange={handleFileChange}
                multiple
                accept=".pdf,.doc,.docx,.jpg,.png"
                className="cursor-pointer"
              />
            </div>
            <Button type="submit" className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Subir Reporte
            </Button>
          </form>
        </div>

        <Alert>
          <AlertDescription>
            Aquí puedes subir reportes, fotografías y documentación relacionada con
            vulnerabilidades detectadas. Aceptamos archivos PDF, DOC, y formatos de
            imagen comunes.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default Reports;