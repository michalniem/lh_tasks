import React from "react";

import NewsletterSection from "./NewsletterSection";
import AttentionSection from "./AttentionSection";
import TranslatedText from "./TranslatedText";
import LangSwitcher from "./LangSwitcher";

function Index() {
  return (
    <div>
      <LangSwitcher />
      <div>
        Translated text example usage by component (text is rendered inside span):{" "}
        <TranslatedText
          id="attention.title"
          defaultMessage="Hey, check this task"
        />
      </div>
      <div>
        <TranslatedText
          id="attention.title"
          defaultMessage="Hey, check this task"
        >
          {text => `Translated text example usage by render child (we have access to plain text): ${text}`}
        </TranslatedText>
      </div>
      <NewsletterSection />
      <AttentionSection />
    </div>
  );
}

export default Index;
