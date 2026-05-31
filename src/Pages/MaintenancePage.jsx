import { useState } from "react";
import "./MaintenancePage.css";

export default function MaintenancePage() {

  const [formData, setFormData] =
    useState({

      name: "",

      institution: "",

      phone: "",

      equipment: "",

      issue: "",

    });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const message = `

Maintenance Request

Name: ${formData.name}

Institution: ${formData.institution}

Phone: ${formData.phone}

Equipment: ${formData.equipment}

Issue: ${formData.issue}

`;

    const whatsappUrl =

      `https://wa.me/237670899763?text=${encodeURIComponent(message)}`;

    window.open(
      whatsappUrl,
      "_blank"
    );

  };

  return (

    <div
      style={{
        maxWidth: "800px",
        margin: "120px auto 60px",
        padding: "0 20px",
      }}
    >

      <h1>
        Maintenance Request
      </h1>

      <p>

        Request technical assistance,
        maintenance support or
        troubleshooting for your
        laboratory equipment.

      </p>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="institution"
          placeholder="Institution / Company"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="equipment"
          placeholder="Equipment Name"
          required
          onChange={handleChange}
        />

        <textarea
          name="issue"
          placeholder="Describe the issue"
          rows="6"
          required
          onChange={handleChange}
        />

        <button
          type="submit"
        >

          Submit Request

        </button>

      </form>

    </div>

  );

}