import { ChangeEvent, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Credits page displays the user's current credit balance and
 * provides a form to purchase new credits by uploading a payment
 * screenshot and entering a transaction reference. In this demo
 * version we do not integrate with a backend; purchases must be
 * validated manually by an administrator.
 */
const Credits = () => {
  const { user } = useUser();
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [reference, setReference] = useState("");

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setScreenshot(file);
  };

  // Submit handler – in a real app this would upload the image and
  // create a payment request. Here we simply reset the form and
  // display a toast using sonner/toaster. For now we'll use an
  // alert as placeholder.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!screenshot || !reference) {
      alert("Veuillez fournir une capture d'écran et une référence.");
      return;
    }
    // Reset form
    setScreenshot(null);
    setReference("");
    alert(
      "Votre demande d'achat de crédits a été soumise. Un administrateur vérifiera votre paiement et créditera votre compte."
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mon solde</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-bold">
            {user.credits} crédits
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            1 crédit = 5 Ariary
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Acheter des crédits</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            Pour acheter des crédits, effectuez un virement via l'un
            des services mobiles suivants puis téléversez la capture
            d'écran du transfert avec la référence :
          </p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Mvola : <strong>034 55 897 35</strong>
            </li>
            <li>
              Airtel Money : <strong>033 71 063 34</strong>
            </li>
            <li>
              Orange Money : <strong>032 47 041 43</strong>
            </li>
            <li>
              Carte Visa : contact admin (à venir)
            </li>
          </ul>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="screenshot">Capture d'écran du paiement</Label>
              <Input
                id="screenshot"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reference">Référence</Label>
              <Input
                id="reference"
                type="text"
                placeholder="N° de transaction"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />
            </div>
            <Button type="submit">Envoyer</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Credits;