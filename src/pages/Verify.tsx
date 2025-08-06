import { ChangeEvent, useState } from "react";
import { useUser } from "../contexts/UserContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/**
 * Verify page allows users to submit a scan of their CIN (national
 * identity card) to become verified. Once verified, a badge appears
 * next to their name. In this demo we merely toggle the `verified`
 * flag in the user context; an admin approval process would be
 * required in a production system.
 */
const Verify = () => {
  const { user, setVerified } = useUser();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert("Veuillez sélectionner un fichier.");
      return;
    }
    // Simulate sending the file to an administrator. For now we
    // immediately set the user as verified. In a real app the admin
    // would review the document before approving.
    setVerified(true);
    setFile(null);
    alert("Votre document a été soumis. Vous êtes maintenant vérifié.");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Vérification d'identité</CardTitle>
        </CardHeader>
        <CardContent>
          {user.verified ? (
            <p className="text-success font-semibold">
              Votre compte est déjà vérifié et porte un badge bleu.
            </p>
          ) : (
            <>
              <p className="text-sm mb-4">
                Pour utiliser les crédits, vous devez vérifier votre
                identité. Veuillez téléverser une photo ou un scan de
                votre carte CIN.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cinFile">Photo de votre CIN</Label>
                  <Input
                    id="cinFile"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                <Button type="submit">Soumettre</Button>
              </form>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Verify;