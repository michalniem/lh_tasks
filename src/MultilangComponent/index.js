import React from "react";

import NewsletterSection from "./NewsletterSection";
import AttentionSection from "./AttentionSection";
import LangSwitcher from "./LangSwitcher";

function Index() {
  return (
    <div>
      <LangSwitcher />
      <NewsletterSection />
      <AttentionSection />
    </div>
  )
}

export default Index;
