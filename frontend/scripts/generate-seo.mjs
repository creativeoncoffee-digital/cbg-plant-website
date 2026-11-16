import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, "../dist");
const templatePath = path.join(distDir, "index.html");

// Your Page-specific SEO metadata dictionary for Ryverda Energies
const seoRoutes = [
  {
    route: "", // Root homepage
    title: "Ryverda Energies | Pioneering the Circular Bio-Economy & CBG Solutions",
    description: "Leading the green revolution with state-of-the-art Compressed Biogas (CBG) facilities. We transform agricultural waste into sustainable, carbon-negative energy.",
  },
  {
    route: "about",
    title: "About Us | Ryverda Energies",
    description: "Learn how Ryverda Energies bridges the gap between environmental stewardship and industrial energy demands through advanced bio-methanation.",
  },
  {
    route: "cbg",
    title: "Compressed Biogas (CBG) Technology | Ryverda Energies",
    description: "Explore the science behind our Compressed Biogas plants, featuring VPSA purification, water scrubbing, and advanced floating drum digesters.",
  },
  {
    route: "blogs",
    title: "Green Energy Insights & Blog | Ryverda Energies",
    description: "Read the latest insights on the circular bio-economy, biogas production, agricultural waste management, and renewable energy advancements in India.",
  },
  {
    route: "contact",
    title: "Contact Us | Ryverda Energies",
    description: "Get in touch with the experts at Ryverda Energies for consultations, project inquiries, and sustainable energy partnerships.",
  }
];

// Main function to render pages
async function generateFullSEO() {
  if (!fs.existsSync(templatePath)) {
    console.error("Error: dist/index.html not found! Run npm run build first.");
    process.exit(1);
  }

  // 1. Start a temporary local server to serve the React files
  const app = express();
  app.use(express.static(distDir));

  // React Router fallback
  app.use((req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });

  const server = app.listen(3000, async () => {
    console.log("🌍 Temporary server started. Launching headless browser...");

    // 2. Open headless browser
    let browser;
    if (process.env.VERCEL) {
      console.log('☁️ Vercel detected: Using Serverless Chromium...');
      const puppeteerCore = (await import('puppeteer-core')).default;
      const chromium = (await import('@sparticuz/chromium')).default;
      
      browser = await puppeteerCore.launch({
        args: chromium.args,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      console.log('💻 Local environment detected: Using standard Puppeteer...');
      const puppeteer = (await import('puppeteer')).default;
      
      browser = await puppeteer.launch({ 
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox'] 
      });
    }
    const page = await browser.newPage();

    // 3. Visit each route and save the FULL HTML
    for (const { route, title, description } of seoRoutes) {
      const url = `http://localhost:3000/${route}`;

      try {
        await page.goto(url, { waitUntil: "networkidle2" });
        await new Promise((resolve) => setTimeout(resolve, 3000));

        let html = await page.content();

        const siteUrl = "https://ryverdaenergies.com";
        const canonicalUrl = route === "" ? siteUrl : `${siteUrl}/${route}`;

        html = html.replace(
          /<title>[\s\S]*?<\/title>/i,
          `<title>${title}</title>`,
        );
        html = html.replace(
          /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
          `<meta name="description" content="${description}" />`,
        );

        const seoTags = `
          <link rel="canonical" href="${canonicalUrl}" />
          <meta property="og:title" content="${title}" />
          <meta property="og:description" content="${description}" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="${canonicalUrl}" />
        `;
        html = html.replace("</head>", `${seoTags}\n</head>`);

        const targetFolder = route === "" ? distDir : path.join(distDir, route);
        if (!fs.existsSync(targetFolder)) {
          fs.mkdirSync(targetFolder, { recursive: true });
        }
        fs.writeFileSync(path.join(targetFolder, "index.html"), html, "utf8");
        console.log(`✓ Full Page HTML & SEO generated for: /${route || "home"}`);
      } catch (err) {
        console.error(`✕ Failed to render /${route || "home"}`, err);
      }
    }

    // 4. Clean up and close
    await browser.close();
    server.close();
    console.log("🚀 All pages fully pre-rendered! Search engines can now read the page body.");
    process.exit(0);
  });
}

generateFullSEO();