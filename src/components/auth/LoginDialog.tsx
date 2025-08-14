import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type LoginDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      toast({ title: "Please fill in all fields" });
      return;
    }
    
    toast({
      title: "Welcome back!",
      description: `Logged in as ${username}`
    });
    onOpenChange(false);
    setUsername("");
    setPassword("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <Button variant="hero" className="w-full" onClick={handleLogin}>
            Log In
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;