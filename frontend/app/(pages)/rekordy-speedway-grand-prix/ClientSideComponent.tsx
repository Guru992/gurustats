// app/ClientComponent.js
"use client"; // Mark this component as a Client Component

import React, { useEffect } from "react";

const ClientComponent = ({ htmlContent }: any) => {
  useEffect(() => {
    const scrollToHashElement = () => {
      const hash = window.location.hash.substring(1); // Remove the '#' from the hash
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Scroll when component is mounted
    scrollToHashElement();

    // Listen for hash changes
    window.addEventListener("hashchange", scrollToHashElement);

    // Clean up the event listener
    return () => {
      window.removeEventListener("hashchange", scrollToHashElement);
    };
  }, []);

  return (
    <div
      className="py-8 rekordySubWrapper"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default ClientComponent;
