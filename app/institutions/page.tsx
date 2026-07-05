"use client";

import { useState, FormEvent } from "react";

type Sector = "School" | "University" | "Corporate";

function RegistrationForm({ sector }: { sector: Sector }) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `${sector} registration captured locally. Wire this form's action to the Supabase webhook to go live.`
    );
    e.currentTarget.reset();
  };

  return (
    <div className="form-block">
      <h3>{sector} Registration</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-2">
          <div className="form-row">
            <label>Institution Name</label>
            <input type="text" required />
          </div>
          <div className="form-row">
            <label>Sector</label>
            <input type="text" value={sector} readOnly />
          </div>
          <div className="form-row">
            <label>Contact Name</label>
            <input type="text" required />
          </div>
          <div className="form-row">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="form-row">
            <label>Phone</label>
            <input type="tel" required />
          </div>
          <div className="form-row">
            <label>City</label>
            <input type="text" required />
          </div>
          <div className="form-row">
            <label>Expected Participant Count</label>
            <input type="number" min={1} required />
          </div>
          <div className="form-row">
            <label>Preferred Format</label>
            <select required defaultValue="">
              <option value="" disabled>Select format</option>
              <option>Phygital Football</option>
              <option>Phygital Racing</option>
              <option>Phygital Basketball</option>
              <option>Undecided</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit {sector} Registration
        </button>
        <p className="form-note">
          [PLACEHOLDER — webhook to Supabase tracker: form submission routes to the institutions
          intake table pending Supabase project wiring.]
        </p>
      </form>
    </div>
  );
}

export default function InstitutionsHubPage() {
  const [tab, setTab] = useState<Sector>("School");
  const tabs: Sector[] = ["School", "University", "Corporate"];

  return (
    <>
      <section className="section section--black" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="container">
          <span className="section-tag">Institutions Hub</span>
          <h1 style={{ fontSize: "clamp(2rem,5vw,3.2rem)" }}>
            Onboard Your School,
            <br />
            University, or Company
          </h1>
          <p style={{ maxWidth: 600 }}>
            Register through the track that fits your institution. Every submission is reviewed by
            the Phygital KSA operations team before your profile goes live on the Directory.
          </p>
        </div>
      </section>

      <section className="section section--light" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="tabs">
            {tabs.map((t) => (
              <button
                key={t}
                className={`tab-btn ${tab === t ? "active" : ""}`}
                onClick={() => setTab(t)}
              >
                {t}s
              </button>
            ))}
          </div>
          <RegistrationForm sector={tab} />
        </div>
      </section>
    </>
  );
}
