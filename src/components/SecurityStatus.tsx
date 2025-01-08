import { Shield, AlertTriangle, Check } from "lucide-react";

export const SecurityStatus = () => {
  const statuses = [
    {
      title: "Identity Protection",
      status: "Protected",
      icon: Shield,
      color: "text-green-400",
    },
    {
      title: "Dark Web Monitoring",
      status: "Active",
      icon: AlertTriangle,
      color: "text-sky-400",
    },
    {
      title: "Password Health",
      status: "Good",
      icon: Check,
      color: "text-green-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {statuses.map((item) => (
        <div
          key={item.title}
          className="p-6 bg-sky-900/30 rounded-lg shadow-lg space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-sky-100">{item.title}</h3>
            <item.icon className={`h-6 w-6 ${item.color}`} />
          </div>
          <p className={`text-lg font-medium ${item.color}`}>{item.status}</p>
        </div>
      ))}
    </div>
  );
};