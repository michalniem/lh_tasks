import React from "react";
import useTranslations from "../hooks/useTranslations";

function AttentionSection({ sectionName = "attention" }) {
  const { title, subtitle, ctaButton } = useTranslations(sectionName);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  );
}

export default AttentionSection;
