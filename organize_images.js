const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'assets', 'images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const fileMap = {
  'image (32).png': 'header_logo.png',
  'footer_logo.png': 'footer_logo.png',
  'Localization service.png': 'localization.png',
  'SEO content writing.png': 'seo.png',
  'Social media content.png': 'social.png',
  'sub-titling services.png': 'subtitling.png',
  'Desktop Publishing (DTP).png': 'dtp.png',
  'voice-over services.png': 'voiceover.png',
  'Transcription Services.png': 'transcription.png',
  'video editing services.png': 'videoediting.png',
  'social media marketing.png': 'smmarketing.png',
  'Web development.png': 'webdev.png'
};

for (const [oldName, newName] of Object.entries(fileMap)) {
  const oldPath = path.join(__dirname, oldName);
  const newPath = path.join(targetDir, newName);

  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`Copied ${oldName} -> ${newPath}`);
  }
}
