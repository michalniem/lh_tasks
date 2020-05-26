import React from "react";

import { useTranslations } from "../context/LangContext";

function NewsletterSection({ sectionName = "newsletter" }) {
  const {
    translations: { title, ctaButton, action },
  } = useTranslations(sectionName);
  return (
    <form action={action}>
      <h1>{title}</h1>
      <button>{ctaButton}</button>
    </form>
  );
}

export default NewsletterSection;
