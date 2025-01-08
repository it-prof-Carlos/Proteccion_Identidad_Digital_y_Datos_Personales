import { AlertCircle } from "lucide-react";

export const DarkWebMonitor = () => {
  const monitoredItems = [
    {
      type: "Email",
      status: "Secure",
      lastCheck: "2 minutes ago",
      alerts: 0,
    },
    {
      type: "Phone Number",
      status: "Secure",
      lastCheck: "5 minutes ago",
      alerts: 0,
    },
    {
      type: "Social Security",
      status: "Monitoring",
      lastCheck: "1 minute ago",
      alerts: 0,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">Dark Web Monitoring</h2>
        <div className="flex items-center gap-2 text-green-500">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium">Active</span>
        </div>
      </div>

      <div className="space-y-4">
        {monitoredItems.map((item) => (
          <div
            key={item.type}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="space-y-1">
              <h3 className="font-medium">{item.type}</h3>
              <p className="text-sm text-gray-500">Last check: {item.lastCheck}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-green-500 font-medium">{item.status}</span>
              {item.alerts > 0 && (
                <div className="flex items-center gap-1 text-red-500">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.alerts} alerts</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};