import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description }) => {
  const location = useLocation();
  
  // Updated with your actual live domain for Ryverda Energies
  const siteUrl = "https://ryverdaenergies.com"; 
  
  // Auto-generates the full canonical URL (e.g., https://ryverdaenergies.com/contact)
  const canonicalUrl = `${siteUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph (Social Media) tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default SEO;