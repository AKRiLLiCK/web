<div align="center">
  <img src="src/assets/ota.svg" width="120" alt="OTA Logo" />
  <h1>Acrilic's Portfolio & Archive</h1>
  <p><em>Maintained by a Computer Engineering Student and Polymath. Founder of Yutila.</em></p>
  
  [![Astro](https://img.shields.io/badge/Astro-FF7E33?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
  [![OTA License](https://img.shields.io/badge/License-OTA-000000?style=for-the-badge)](./public/OTA.md)
  [![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://akrillick.github.io/web/)
</div>

---

## ◈ Architecture

This project is built using the **[Astro](https://astro.build/)** framework. The user interface utilizes a skeuomorphic "Nintendo 3DS Dark Mode" single-screen design pattern, implemented via raw CSS to maintain strict adherence to our brutalist minimalist aesthetic.

### Core Features
- **🎮 3DS Navigation:** Fixed bottom dock and recessed screen container UI.
- **📚 OTA Archive:** A high-performance digital library catalog powered by Astro Content Collections, featuring strict metadata schema validation, optimized image rendering, and RSS feed support (`/rss.xml`).
- **🔗 Webring System:** Decentralized, static-friendly routing utilizing client-side JS with a robust `<noscript>` fallback.
- **📄 Markdown Support:** Fully functional dynamic routing for technical essays, manuals, and documents.

## ⌖ Deployment

The repository is configured for deployment to GitHub Pages.
- **Base Path:** `/web`
- **CI/CD:** Automated builds and deployments are handled via GitHub Actions.

## ⚙️ Local Setup

To run this project locally, execute the following commands from the repository root:

```sh
# Install dependencies
npm install

# Start the local development server
npm run dev
```

To create a production build:

```sh
# Build the static site
npm run build
```

## ⚖️ License & Copyright

**© 2026 Acrilic. All Rights Reserved.**

The source code, visual design, and persona content of this website are proprietary. You may not reproduce, distribute, or create derivative works of the core website interface or codebase without explicit permission.

> **Exception:** Documents, publications, and structural information explicitly hosted within the **OTA Archive** and marked with the OTA Declaration are governed by the **[Open To All (OTA) Public License v1.0](./public/OTA.md)**.
