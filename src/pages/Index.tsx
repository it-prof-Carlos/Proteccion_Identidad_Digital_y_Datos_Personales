import { PasswordGenerator } from "@/components/PasswordGenerator";
import { SecurityStatus } from "@/components/SecurityStatus";
import { DarkWebMonitor } from "@/components/DarkWebMonitor";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">
            Identity Protection Dashboard
          </h1>
          <p className="text-gray-600">
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