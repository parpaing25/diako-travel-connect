import { TrendingUp, Calendar, Users, MapPin, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RightSidebar = () => {
  const trendingDestinations = [
    { name: "Bali, Indonésie", posts: "2.4k posts", trend: "+12%" },
    { name: "Kyoto, Japon", posts: "1.8k posts", trend: "+8%" },
    { name: "Santorini, Grèce", posts: "1.5k posts", trend: "+15%" },
    { name: "Patagonie, Chili", posts: "892 posts", trend: "+23%" },
    { name: "Reykjavik, Islande", posts: "743 posts", trend: "+18%" },
  ];

  const upcomingEvents = [
    {
      title: "Festival des Lanternes - Chiang Mai",
      date: "15 Nov 2024",
      participants: 156,
      type: "Événement"
    },
    {
      title: "Groupe Randonnée - Mont Blanc",
      date: "22 Nov 2024",
      participants: 24,
      type: "Groupe"
    },
    {
      title: "Rencontre Voyageurs - Paris",
      date: "28 Nov 2024",
      participants: 89,
      type: "Meetup"
    },
  ];

  const suggestedFriends = [
    {
      name: "Emma Wilson",
      location: "Londres, UK",
      mutualFriends: 5,
      avatar: "/placeholder-emma.jpg",
      travelStyle: "Backpacker"
    },
    {
      name: "Lucas Silva",
      location: "São Paulo, Brésil",
      mutualFriends: 3,
      avatar: "/placeholder-lucas.jpg",
      travelStyle: "Aventure"
    },
    {
      name: "Yuki Tanaka",
      location: "Osaka, Japon",
      mutualFriends: 8,
      avatar: "/placeholder-yuki.jpg",
      travelStyle: "Culture"
    },
  ];

  const recommendedPlaces = [
    {
      name: "Restaurant Sukiyabashi Jiro",
      location: "Tokyo, Japon",
      rating: 4.9,
      category: "Restaurant",
      reviews: 847
    },
    {
      name: "Hostel Generator",
      location: "Berlin, Allemagne",
      rating: 4.6,
      category: "Hébergement",
      reviews: 1234
    },
    {
      name: "Musée du Louvre",
      location: "Paris, France",
      rating: 4.8,
      category: "Attraction",
      reviews: 5678
    },
  ];

  return (
    <aside className="fixed right-0 top-[var(--header-height)] h-[calc(100vh-var(--header-height))] w-80 bg-card border-l border-border overflow-y-auto hidden xl:block">
      <div className="p-4 space-y-6">
        {/* Trending Destinations */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-travel-orange" />
              Destinations tendance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {trendingDestinations.map((destination, index) => (
              <div key={destination.name} className="flex items-center justify-between hover:bg-muted p-2 rounded cursor-pointer">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">#{index + 1}</span>
                    <span className="text-sm font-medium">{destination.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{destination.posts}</p>
                </div>
                <Badge variant="secondary" className="text-xs text-travel-green">
                  {destination.trend}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-travel-blue" />
              Événements à venir
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="p-3 border rounded-lg hover:bg-muted cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-medium line-clamp-2">{event.title}</h4>
                  <Badge variant="outline" className="text-xs ml-2">
                    {event.type}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{event.date}</span>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{event.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Suggested Friends */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-travel-green" />
              Suggestions d'amis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {suggestedFriends.map((friend) => (
              <div key={friend.name} className="flex items-center gap-3 p-2 hover:bg-muted rounded">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={friend.avatar} />
                  <AvatarFallback>{friend.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{friend.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {friend.location}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {friend.mutualFriends} amis en commun • {friend.travelStyle}
                  </p>
                </div>
                <Button size="sm" variant="outline" className="text-xs">
                  Ajouter
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommended Places */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Star className="w-4 h-4 text-travel-purple" />
              Lieux recommandés
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recommendedPlaces.map((place) => (
              <div key={place.name} className="p-3 border rounded-lg hover:bg-muted cursor-pointer">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm font-medium line-clamp-1">{place.name}</h4>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs">{place.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                  <MapPin className="w-3 h-3" />
                  {place.location}
                </p>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {place.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{place.reviews} avis</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </aside>
  );
};

export default RightSidebar;