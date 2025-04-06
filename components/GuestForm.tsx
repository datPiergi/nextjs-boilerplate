"use client";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";

interface GuestFormProps {
  id: string;
  className?: string;
}

const GuestForm: React.FC<GuestFormProps> = ({ id, className }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    rsvp: "yes",
    meal: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submitGuest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("🎉 RSVP submitted successfully!");
      setFormData({ name: "", phone: "", rsvp: "yes", meal: "" });
    } catch (error) {
      console.error("Error submitting guest:", error);
      alert("⚠️ There was an error submitting the form.");
    }
  };

  return (
    <div
      id={id}
      className={`w-full mx-auto max-w-2xl bg-white text-[#8b8585] rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center font-serif ${className}`}
    >
      <h2 className="text-3xl font-semibold text-center mb-6">Fateci sapere se ci sarete!</h2>
      <Form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-6 max-w-xl">
        <Form.Group>
          <Form.Label className="font-medium text-lg">Nome</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Il tuo nome completo"
            required
            className="rounded-lg shadow-sm"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-medium text-lg">Telefono</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Inserisci il tuo numero di telefono"
            required
            className="rounded-lg shadow-sm"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label className="font-medium text-lg">Conferma la tua partecipazione</Form.Label>
          <Form.Select
            name="rsvp"
            value={formData.rsvp}
            onChange={handleChange}
            required
            style={{ color: "#8b8585" }}
            className="rounded-lg shadow-sm text-[#8b8585]"
          >
            <option value="yes">Sì, ci sarò! 🎉</option>
            <option value="no">No, purtroppo non potrò esserci 😢</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label className="text-lg">Allergie ed intolleranze</Form.Label>
          <Form.Control
            type="text"
            name="meal"
            value={formData.meal}
            onChange={handleChange}
            className="rounded-lg shadow-sm"
          />
        </Form.Group>

        <a
          href="#"
          onClick={handleSubmit}
          style={{
            textDecoration: 'none',
            color: '#8b8585'
          }}
          className="w-full mt-4 bg-[#ece9e5] hover:bg-[#e5dfda] text-[#8b8585] text-center rounded-lg py-2 text-lg no-underline block"
        >
          Invia RSVP
        </a>
      </Form>
    </div>
  );
};

export default GuestForm;
