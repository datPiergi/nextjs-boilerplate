"use client";

import { useState } from "react";
import { Form } from "react-bootstrap";
import SocialTags from "./SocialTags";

interface SongSuggestionFormProps {
  id: string;
  className?: string;
}

const SongSuggestionForm: React.FC<SongSuggestionFormProps> = ({ id, className }) => {
  const [song, setSong] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/submitSong", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ song }),
      });

      if (!res.ok) {
        throw new Error("Errore nell'invio");
      }

      alert("🎶 Canzone inviata con successo!");
      setSong("");
    } catch (err) {
      console.error(err);
      alert("⚠️ Errore nell'invio della canzone.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id={id} className={`w-full mx-auto max-w-2xl bg-white text-[#8b8585] rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center font-serif ${className}`}>
      <h2 className="text-3xl font-semibold text-center mb-3">Aiutaci a creare la playlist perfetta</h2>
      <p className="text-center text-lg italic mb-6">
        Se avete una canzone che vi fa pensare a noi o che volete ballare con noi, suggeritecela qui!
      </p>
      <Form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-6 max-w-xl">
        <Form.Group>
          <Form.Label className="font-medium text-lg">Titolo o artista</Form.Label>
          <Form.Control
            type="text"
            name="song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            placeholder="Es. MIROH - Stray Kids"
            required
            className="rounded-lg shadow-sm"
          />
        </Form.Group>

        <button
          type="submit"
          disabled={loading}
          style={{
            textDecoration: 'none',
            color: '#8b8585',
            pointerEvents: loading ? 'none' : 'auto',
            opacity: loading ? 0.6 : 1
          }}
          className="w-full mt-4 bg-[#ece9e5] hover:bg-[#e5dfda] text-[#8b8585] text-center rounded-lg py-2 text-lg no-underline block transition"
        >
          {loading ? "Invio in corso..." : "Invia suggerimento"}
        </button>
      </Form>
      <SocialTags className="mt-8" />
    </div>
  );
};

export default SongSuggestionForm;
