import { PasswordGenerator } from "@/components/PasswordGenerator";
import { SecurityStatus } from "@/components/SecurityStatus";
import { DarkWebMonitor } from "@/components/DarkWebMonitor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Identity Protection Dashboard
          </h1>
          <p className="text-muted-foreground">
            Secure your digital identity with advanced protection tools
          </p>
        </header>

        <SecurityStatus />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PasswordGenerator />
          <DarkWebMonitor />
        </div>
      </div>
    </div>
  );
};

export default Index;