import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Tinydancer</span>,
  project: {
    link: "https://github.com/tinydancer-io",
  },
  chat: {
    link: "https://twitter/tinydancer-io",
  },
  docsRepositoryBase: "https://github.dev/tinydancer-io/tinydancer-docs",
  footer: {
    text: "© 2021 Schwifty Labs",
  },
};

export default config;
