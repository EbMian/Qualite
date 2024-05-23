import type { PlaywrightTestConfig } from "@playwright/test";

const config : PlaywrightTestConfig = {
  webServer: {
		// Si php installé sur le poste
    command: 'cd src && php -S localhost:8000',
    url: 'http://localhost:8000',
    reuseExistingServer: true,
    timeout: 2_000
  }
};

export default config;