#!/usr/bin/env node
/**
 * Creates the splash screen image for the app
 * Requires: npm install sharp
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const WIDTH = 1284;
const HEIGHT = 2778;
const PENGUIN_SIZE = 300; // Scale penguin to this size
const TEXT_Y_OFFSET = 380; // Distance from penguin to text

async function createSplashScreen() {
  try {
    console.log('Creating splash screen...');

    // Load the penguin icon
    const penguinPath = path.join(__dirname, '../designs/Icons/icon-penguin.png');
    const outputPath = path.join(__dirname, 'assets/splash-screen.png');

    if (!fs.existsSync(penguinPath)) {
      console.error('Error: Penguin icon not found at:', penguinPath);
      process.exit(1);
    }

    // Resize penguin to desired size while maintaining aspect ratio
    const penguinBuffer = await sharp(penguinPath)
      .resize(PENGUIN_SIZE, PENGUIN_SIZE, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();

    // Get penguin dimensions after resize
    const penguinMetadata = await sharp(penguinBuffer).metadata();
    const penguinWidth = penguinMetadata.width;
    const penguinHeight = penguinMetadata.height;

    // Calculate positions for centering
    const penguinX = Math.floor((WIDTH - penguinWidth) / 2);
    const penguinY = Math.floor((HEIGHT / 2) - (penguinHeight / 2) - 100); // Slightly above center

    // Create SVG for the text "It's play time!"
    const textSvg = `
      <svg width="${WIDTH}" height="${HEIGHT}">
        <text
          x="${WIDTH / 2}"
          y="${penguinY + penguinHeight + TEXT_Y_OFFSET}"
          font-family="Arial, Helvetica, sans-serif"
          font-size="48"
          font-weight="bold"
          text-anchor="middle"
          fill="#000000"
        >It's play time!</text>
      </svg>
    `;

    // Create a transparent canvas
    const canvas = await sharp({
      create: {
        width: WIDTH,
        height: HEIGHT,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        {
          input: penguinBuffer,
          top: penguinY,
          left: penguinX
        },
        {
          input: Buffer.from(textSvg),
          top: 0,
          left: 0
        }
      ])
      .png()
      .toFile(outputPath);

    console.log('✅ Splash screen created successfully at:', outputPath);
    console.log('   Size:', WIDTH, 'x', HEIGHT);
    console.log('   Background color in app.json: #F5EFE6');
  } catch (error) {
    console.error('Error creating splash screen:', error.message);
    process.exit(1);
  }
}

createSplashScreen();
