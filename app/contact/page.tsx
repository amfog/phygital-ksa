"use client";

import { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message captured locally. Wire this form's action to the Supabase webhook to go live.");
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 36 }}>
        <div className="container">
          <span className="section-tag">Contact</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)" }}>Get in Touch</h1>
          <p style={{ maxWidth: 600 }}>General inquiries, media requests, and partnership questions.</p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="grid grid-2">
            <div className="form-block">
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>Name</label>
                  <input type="text" required />
                </div>
                <div className="form-row">
                  <label>Email</label>
                  <input type="email" required />
                </div>
                <div className="form-row">
                  <label>Subject</label>
                  <select required defaultValue="">
                    <option value="" disabled>Select subject</option>
                    <option>General Inquiry</option>
                    <option>Media / Press</option>
                    <option>Sponsorship</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="form-row">
                  <label>Message</label>
                  <textarea required />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                <p className="form-note">
                  [PLACEHOLDER — webhook to Supabase tracker pending wiring.]
                </p>
              </form>
            </div>
            <div>
              <h3>Phygital KSA</h3>
              <p className="desc">Riyadh, Saudi Arabia</p>
              <p className="form-note" style={{ marginTop: -8 }}>
                Direct contact email pending official confirmation — use the form for now.
              </p>
              <div style={{ marginTop: 20 }}>
                <a href="#" className="btn btn-outline" style={{ marginRight: 10 }}>Twitter / X</a>
                <a href="#" className="btn btn-outline">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}