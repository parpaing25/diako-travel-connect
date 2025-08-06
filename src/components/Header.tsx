import { useState } from "react";
import { Search, Bell, MessageCircle, Globe, Menu, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import diakoLogo from "@/assets/diako-logo.png";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="flex items-center justify-between px-4 h-[var(--header-height)]">
        {/* Logo and Search */}
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center gap-2">
            <img src={diakoLogo} alt="Diako" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-primary hidden sm:block">Diako</h1>
          </div>
          
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher des destinations, voyageurs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-secondary border-none"
            />
          </div>
        </div>

        {/* Navigation and User Actions */}
        <div className="flex items-center gap-2">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Destinations</span>
            </Button>
          </div>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 text-xs bg-destructive">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="p-3 border-b">
                <h3 className="font-semibold">Notifications</h3>
              </div>
              <div className="p-2">
                <div className="space-y-2">
                  <div className="p-2 hover:bg-muted rounded text-sm">
                    <p><strong>Marie Dubois</strong> a aimé votre photo de Tokyo</p>
                    <p className="text-muted-foreground text-xs">Il y a 2h</p>
                  </div>
                  <div className="p-2 hover:bg-muted rounded text-sm">
                    <p><strong>Alex Martin</strong> a commenté votre voyage en Thaïlande</p>
                    <p className="text-muted-foreground text-xs">Il y a 4h</p>
                  </div>
                  <div className="p-2 hover:bg-muted rounded text-sm">
                    <p>Nouvelles recommandations pour <strong>Bali</strong></p>
                    <p className="text-muted-foreground text-xs">Il y a 1j</p>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Messages */}
          <Button variant="ghost" size="icon" className="relative">
            <MessageCircle className="w-5 h-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 text-xs bg-travel-blue">
              2
            </Badge>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="hidden sm:block">Jean Dupont</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Mon profil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Paramètres</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Se déconnecter</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;