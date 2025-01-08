import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Copy, RefreshCw } from "lucide-react";

export const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState([12]);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const charset = {
      letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    };

    let chars = charset.letters;
    if (includeNumbers) chars += charset.numbers;
    if (includeSymbols) chars += charset.symbols;

    let newPassword = "";
    for (let i = 0; i < length[0]; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(newPassword);
    toast.success("New password generated!");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    toast.success("Password copied to clipboard!");
  };

  return (
    <div className="space-y-6 p-6 bg-sky-900/30 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-sky-100">Password Generator</h2>
      
      <div className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={password}
            readOnly
            className="font-mono bg-green-900/20 text-sky-100"
            placeholder="Generated password"
          />
          <Button onClick={copyToClipboard} variant="outline" size="icon" className="bg-sky-900/50 hover:bg-sky-800/50">
            <Copy className="h-4 w-4" />
          </Button>
          <Button onClick={generatePassword} variant="outline" size="icon" className="bg-sky-900/50 hover:bg-sky-800/50">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-sky-100">Password Length: {length}</label>
          <Slider
            value={length}
            onValueChange={setLength}
            max={32}
            min={8}
            step={1}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-sky-100">Include Numbers</label>
          <Switch
            checked={includeNumbers}
            onCheckedChange={setIncludeNumbers}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-sky-100">Include Symbols</label>
          <Switch
            checked={includeSymbols}
            onCheckedChange={setIncludeSymbols}
          />
        </div>
      </div>
    </div>
  );
};