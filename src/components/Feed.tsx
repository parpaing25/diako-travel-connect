import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Camera, MapPin, Users, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SponsoredPost from "./SponsoredPost";

const Feed = () => {
  const [newPost, setNewPost] = useState("");

  const posts = [
    {
      id: 1,
      author: {
        name: "Miora Rakoto",
        avatar: "/placeholder-miora.jpg",
        verified: true,
      },
      content: "Magnifique coucher de soleil à l'Avenue des Baobabs ! 🌅 Madagascar regorge de paysages incroyables. Qui connaît d'autres spots photos magiques sur l'île ?",
      image: "/placeholder-baobabs.jpg",
      location: "Avenue des Baobabs, Morondava",
      time: "Il y a 2h",
      likes: 34,
      comments: 8,
      shares: 5,
      tags: ["#Madagascar", "#Baobabs", "#Morondava", "#Sunset"],
      liked: false,
      saved: false,
    },
    {
      id: 2,
      author: {
        name: "Hery Andrianaivo",
        avatar: "/placeholder-hery.jpg",
        verified: false,
      },
      content: "Première plongée à Nosy Be ! Les tortues et les requins baleines étaient au rendez-vous 🐢🦈 Quelqu'un connaît de bons centres de plongée dans la région ?",
      image: "/placeholder-nosybe-diving.jpg",
      location: "Nosy Be, Madagascar",
      time: "Il y a 4h",
      likes: 28,
      comments: 15,
      shares: 7,
      tags: ["#NosyBe", "#Plongée", "#Madagascar", "#TortuesMarine"],
      liked: true,
      saved: true,
    },
  ];

  // Sponsored post data
  const sponsoredHotel = {
    hotel: {
      name: "Hôtel Sakamanga",
      avatar: "/placeholder-sakamanga.jpg",
      verified: true,
      location: "Antananarivo, Madagascar",
    },
    content: "Découvrez notre offre spéciale pour les fêtes ! Séjour de rêve au cœur de Tana avec petit-déjeuner inclus et spa gratuit 🏨✨",
    image: "/placeholder-sakamanga-room.jpg",
    offer: {
      price: "120 000 Ar",
      originalPrice: "180 000 Ar",
      type: "nuit",
    },
    rating: 4.8,
    reviews: 245,
    time: "Sponsorisé",
    likes: 45,
    comments: 12,
    shares: 8,
    liked: false,
    saved: false,
  };

  const handleLike = (postId: number) => {
    // Logic to handle like action
    console.log(`Liked post ${postId}`);
  };

  const handleSave = (postId: number) => {
    // Logic to handle save action
    console.log(`Saved post ${postId}`);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Create Post */}
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <Textarea
                placeholder="Partagez votre expérience à Madagascar avec la communauté..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="border-none resize-none p-0 text-lg placeholder:text-muted-foreground focus-visible:ring-0"
                rows={3}
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-travel-blue">
                    <Camera className="w-4 h-4 mr-2" />
                    Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="text-travel-green">
                    <MapPin className="w-4 h-4 mr-2" />
                    Lieu
                  </Button>
                  <Button variant="ghost" size="sm" className="text-travel-orange">
                    <Users className="w-4 h-4 mr-2" />
                    Amis
                  </Button>
                  <Button variant="ghost" size="sm" className="text-travel-purple">
                    <Smile className="w-4 h-4 mr-2" />
                    Humeur
                  </Button>
                </div>
                <Button 
                  disabled={!newPost.trim()} 
                  className="bg-primary hover:bg-primary-hover"
                >
                  Publier
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sponsored Hotel Post */}
      <SponsoredPost {...sponsoredHotel} />

      {/* Regular Posts */}
      {posts.map((post) => (
        <Card key={post.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="font-semibold">{post.author.name}</h4>
                    {post.author.verified && (
                      <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <span>{post.time}</span>
                    {post.location && (
                      <>
                        <span>•</span>
                        <MapPin className="w-3 h-3" />
                        <span>{post.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Signaler</DropdownMenuItem>
                  <DropdownMenuItem>Masquer</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="px-4 pb-3">
              <p className="text-foreground">{post.content}</p>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {post.image && (
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-travel-blue to-travel-green"></div>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            )}

            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.likes} mentions j'aime</span>
                <div className="flex gap-4">
                  <span>{post.comments} commentaires</span>
                  <span>{post.shares} partages</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t pt-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className={`flex-1 gap-2 ${post.liked ? 'text-destructive' : ''}`}
                >
                  <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                  J'aime
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Commenter
                </Button>
                <Button variant="ghost" size="sm" className="flex-1 gap-2">
                  <Share2 className="w-4 h-4" />
                  Partager
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSave(post.id)}
                  className={post.saved ? 'text-primary' : ''}
                >
                  <Bookmark className={`w-4 h-4 ${post.saved ? 'fill-current' : ''}`} />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Feed;