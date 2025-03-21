"use client";

import { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";

const GuestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rsvp: "yes", // Default selection
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
      setFormData({ name: "", email: "", rsvp: "yes", meal: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting guest:", error);
      alert("⚠️ There was an error submitting the form.");
    }
  };

  return (
    <Container className="flex justify-center items-center min-h-screen">
      <Card className="shadow-lg rounded-2xl p-6 w-full max-w-lg">
        <Card.Body>
          <h2 className="text-2xl font-semibold text-center mb-4">💍 RSVP for Our Wedding</h2>
          <p className="text-center text-gray-600 mb-4">We can't wait to celebrate with you! 🎉</p>
          
          <Form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <Form.Group>
              <Form.Label className="font-medium">Your Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
                className="rounded-lg shadow-sm"
              />
            </Form.Group>

            {/* Email Input */}
            <Form.Group>
              <Form.Label className="font-medium">Your Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                required 
                className="rounded-lg shadow-sm"
              />
            </Form.Group>

            {/* RSVP Select */}
            <Form.Group>
              <Form.Label className="font-medium">Will You Attend?</Form.Label>
              <Form.Select 
                name="rsvp" 
                value={formData.rsvp} 
                onChange={handleChange} 
                required 
                className="rounded-lg shadow-sm"
              >
                <option value="yes">Yes, I'll be there! 🎉</option>
                <option value="no">Sorry, I can't make it 😢</option>
              </Form.Select>
            </Form.Group>

            {/* Meal Preference */}
            <Form.Group>
              <Form.Label className="font-medium">Meal Preference</Form.Label>
              <Form.Control 
                type="text" 
                name="meal" 
                value={formData.meal} 
                onChange={handleChange} 
                placeholder="E.g., Vegetarian, Chicken, Beef" 
                className="rounded-lg shadow-sm"
              />
            </Form.Group>

            {/* Submit Button */}
            <Button 
              variant="primary" 
              type="submit" 
              className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2"
            >
              ✅ Submit RSVP
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GuestForm;
