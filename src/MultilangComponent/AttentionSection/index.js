import React from "react";
import { useTranslations } from "../context/LangContext";

function AttentionSection({ sectionName = "attention" }) {
  const {
    translations: { title, subtitle, ctaButton },
  } = useTranslations(sectionName);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <button>{ctaButton}</button>
    </div>
  );
}

export default AttentionSection;
