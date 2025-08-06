import { Home, Users, MapPin, Calendar, Bookmark, Camera, MessageSquare, TrendingUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: "Accueil", active: true },
    { icon: Users, label: "Amis", badge: "5" },
    { icon: MapPin, label: "Lieux Madagascar" },
    { icon: Calendar, label: "Mes voyages" },
    { icon: Camera, label: "Mes albums" },
    { icon: Bookmark, label: "Sauvegardés" },
    { icon: MessageSquare, label: "Messages", badge: "2" },
    { icon: TrendingUp, label: "Tendances Mada" },
  ];

  const quickAccess = [
    { name: "Antananarivo", type: "Destination", image: "/placeholder-tana.jpg" },
    { name: "Voyage Nosy Be 2024", type: "Album", image: "/placeholder-nosybe.jpg" },
    { name: "Randonneurs Mada", type: "Groupe", image: "/placeholder-hiking.jpg" },
  ];

  const onlineFriends = [
    { name: "Miora Rakoto", status: "En ligne", avatar: "/placeholder-miora.jpg" },
    { name: "Hery Andrianaivo", status: "En ligne", avatar: "/placeholder-hery.jpg" },
    { name: "Farah Razafy", status: "En ligne", avatar: "/placeholder-farah.jpg" },
  ];

  return (
    <aside className="fixed left-0 top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-[var(--sidebar-width)] bg-card border-r border-border overflow-y-auto hidden lg:block">
      <div className="p-4 space-y-6">
        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              className="w-full justify-start gap-3 h-10"
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge variant="secondary" className="ml-auto">
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </nav>

        {/* Quick Access */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 text-sm">Accès rapide</h3>
            <div className="space-y-2">
              {quickAccess.map((item) => (
                <div key={item.name} className="flex items-center gap-3 p-2 hover:bg-muted rounded cursor-pointer">
                  <div className="w-8 h-8 bg-muted rounded overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-travel-blue to-travel-green"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Online Friends */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 text-sm">Amis en ligne</h3>
            <div className="space-y-2">
              {onlineFriends.map((friend) => (
                <div key={friend.name} className="flex items-center gap-3 p-2 hover:bg-muted rounded cursor-pointer">
                  <div className="relative">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={friend.avatar} />
                      <AvatarFallback>{friend.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-travel-green rounded-full border-2 border-card"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{friend.name}</p>
                    <p className="text-xs text-muted-foreground">{friend.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 text-sm">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>032 47 041 43</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};

export default Sidebar;