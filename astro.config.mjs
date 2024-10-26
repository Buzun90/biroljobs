import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import pagefind from "astro-pagefind";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), partytown(), pagefind(), react()]
});
