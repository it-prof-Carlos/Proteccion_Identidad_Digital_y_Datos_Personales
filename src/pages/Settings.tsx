import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Shield, Lock, Eye } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const handleSave = () => {
    toast.success("Configuración guardada correctamente");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-primary mb-8">Configuración</h1>

      <div className="grid gap-8">
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Preferencias de Seguridad</h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Notificaciones</p>
                  <p className="text-sm text-muted-foreground">
                    Recibe alertas sobre actividad sospechosa
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Monitoreo Avanzado</p>
                  <p className="text-sm text-muted-foreground">
                    Escaneo profundo de la dark web
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Autenticación de dos factores</p>
                  <p className="text-sm text-muted-foreground">
                    Aumenta la seguridad de tu cuenta
                  </p>
                </div>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Eye className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Modo Privado</p>
                  <p className="text-sm text-muted-foreground">
                    Oculta información sensible
                  </p>
                </div>
              </div>
              <Switch />
            </div>
          </div>

          <Button onClick={handleSave} className="mt-6 w-full">
            Guardar Cambios
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;