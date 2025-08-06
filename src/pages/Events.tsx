import { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Events page allows users to create and view travel events. An
 * event has a name, date, location and description. In this demo
 * events are stored locally. A future iteration could include
 * joining events and notifications.
 */
interface EventItem {
  id: number;
  name: string;
  date: string;
  location: string;
  description: string;
}

const Events = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !date || !location.trim()) {
      alert("Veuillez renseigner le nom, la date et le lieu de l'événement.");
      return;
    }
    const newEvent: EventItem = {
      id: Date.now(),
      name,
      date,
      location,
      description,
    };
    setEvents((prev) => [newEvent, ...prev]);
    setName("");
    setDate("");
    setLocation("");
    setDescription("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Créer un événement</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="event-name">Nom</Label>
              <Input
                id="event-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nom de l'événement"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-date">Date</Label>
              <Input
                id="event-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-location">Lieu</Label>
              <Input
                id="event-location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ville ou adresse"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="event-description">Description (facultatif)</Label>
              <Input
                id="event-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Décrivez brièvement l'événement"
              />
            </div>
            <Button type="submit">Créer l'événement</Button>
          </form>
        </CardContent>
      </Card>
      {events.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Événements à venir</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {events.map((ev) => (
              <div key={ev.id} className="border rounded-md p-3">
                <h4 className="font-semibold">{ev.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {new Date(ev.date).toLocaleDateString()} – {ev.location}
                </p>
                {ev.description && (
                  <p className="text-sm mt-1">{ev.description}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Events;