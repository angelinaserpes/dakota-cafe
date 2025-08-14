import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

type SignUpDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SignUpDialog = ({ open, onOpenChange }: SignUpDialogProps) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState<Date | undefined>(undefined);
  const [passcode, setPasscode] = useState("");

  const handleSignUp = () => {
    if (!name || !birthday || !passcode) {
      toast({ title: "Please fill in all fields" });
      return;
    }
    
    if (passcode.length < 4) {
      toast({ title: "Passcode must be at least 4 characters" });
      return;
    }
    
    toast({
      title: "Welcome to Dakota Coffee!",
      description: `Account created for ${name}. You've earned 50 bonus points!`
    });
    onOpenChange(false);
    setName("");
    setBirthday(undefined);
    setPasscode("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div className="space-y-2">
            <Label>Birthday</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  {birthday ? format(birthday, "PPP") : "Select your birthday"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-0">
                <Calendar 
                  mode="single" 
                  selected={birthday} 
                  onSelect={setBirthday}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="passcode">Passcode</Label>
            <Input
              id="passcode"
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Create a passcode (min. 4 characters)"
            />
          </div>
          <Button variant="hero" className="w-full" onClick={handleSignUp}>
            Sign Up
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;