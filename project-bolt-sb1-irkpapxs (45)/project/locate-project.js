const path = require('path');
const fs = require('fs');

// Get current working directory
const projectDir = process.cwd();

// Create a simple info display
console.log('\n📂 Project Location Information\n');
console.log(`Project Directory: ${projectDir}`);
console.log('\nKey Folders:');
console.log(`├── src/`);
console.log(`│   ├── components/`);
console.log(`│   ├── pages/`);
console.log(`│   ├── hooks/`);
console.log(`│   └── services/`);
console.log(`├── public/`);
console.log(`└── dist/ (after build)\n`);

// Check if we're in the right directory
if (fs.existsSync(path.join(projectDir, 'package.json'))) {
  console.log('✅ You are in the correct project directory\n');
} else {
  console.log('❌ Warning: package.json not found. You might not be in the project root directory\n');
}