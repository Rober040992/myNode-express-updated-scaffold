#!/usr/bin/env node
import { cpSync, existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get project name from CLI args
const projectName = process.argv[2] || "my-api";
const targetDir = join(process.cwd(), projectName);

// Avoid overwriting existing folders
if (existsSync(targetDir)) {
  console.error(`❌ Directory "${projectName}" already exists.`);
  process.exit(1);
}

// Create the new directory
mkdirSync(targetDir, { recursive: true });

// Copy template folder contents
cpSync(join(__dirname, "template"), targetDir, { recursive: true });

console.log(`

  ✅ Project created in ./${projectName}
  
      👇  Next steps  👇 

      cd ${projectName}
      ---------------------
      npm install
      ---------------------
      cp .env.example .env
      ---------------------
      npm run dev
  `);

console.log(`
      ---------------------
      👌  Project ready!
    
  `);
