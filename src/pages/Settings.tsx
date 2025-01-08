import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Shield, Bell, Lock } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const handleSave = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto max-w-2xl">
        <header className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-foreground">Security Settings</h1>
          <p className="text-muted-foreground">
            Manage your security preferences and notifications
          </p>
        </header>

        <div className="space-y-6 bg-card p-6 rounded-lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    Enhanced Protection
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Enable additional security measures
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    Security Alerts
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about security threats
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
              </div>
              <Switch />
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;