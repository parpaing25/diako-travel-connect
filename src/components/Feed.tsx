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

const Feed = () => {
  const [newPost, setNewPost] = useState("");

  const posts = [
    {
      id: 1,
      author: {
        name: "Marie Dubois",
        avatar: "/placeholder-marie.jpg",
        verified: true,
      },
      content: "Incroyable sunset à Santorini ! 🌅 Cette île grecque est vraiment magique. Qui a déjà visité les Cyclades ?",
      image: "/placeholder-santorini.jpg",
      location: "Santorini, Grèce",
      time: "Il y a 2h",
      likes: 24,
      comments: 5,
      shares: 2,
      tags: ["#Grèce", "#Santorini", "#Sunset"],
      liked: false,
      saved: false,
    },
    {
      id: 2,
      author: {
        name: "Alex Martin",
        avatar: "/placeholder-alex.jpg",
        verified: false,
      },
      content: "Premier jour à Tokyo ! Street food incroyable dans le quartier de Shibuya 🍜 Quelqu'un connaît de bons spots pour les ramen ?",
      image: "/placeholder-tokyo-food.jpg",
      location: "Tokyo, Japon",
      time: "Il y a 4h",
      likes: 18,
      comments: 12,
      shares: 4,
      tags: ["#Tokyo", "#Streetfood", "#Japon", "#Ramen"],
      liked: true,
      saved: true,
    },
    {
      id: 3,
      author: {
        name: "Sophie Chen",
        avatar: "/placeholder-sophie.jpg",
        verified: true,
      },
      content: "Road trip en Islande avec l'équipe ! Les paysages sont à couper le souffle ❄️ Aurora borealis cette nuit !",
      image: "/placeholder-iceland.jpg",
      location: "Reykjavik, Islande",
      time: "Il y a 6h",
      likes: 45,
      comments: 8,
      shares: 12,
      tags: ["#Islande", "#Roadtrip", "#AuroreBoreale", "#Nature"],
      liked: false,
      saved: false,
    },
  ];

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
                placeholder="Partagez votre aventure avec la communauté..."
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

      {/* Posts */}
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