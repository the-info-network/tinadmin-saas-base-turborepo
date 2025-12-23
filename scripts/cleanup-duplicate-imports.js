#!/usr/bin/env node

/**
 * Script to clean up duplicate icon imports
 */

const fs = require('fs');
const path = require('path');

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== '.next' && file !== 'dist') {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function cleanupImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const changes = [];
  
  // Check if file has both Heroicons TrashIcon and @/icons TrashIcon
  const hasHeroiconsTrash = /import.*TrashIcon.*from.*@heroicons/.test(content);
  const hasIconsTrash = /import.*TrashIcon.*from.*@\/icons/.test(content);
  
  if (hasHeroiconsTrash && hasIconsTrash) {
    // Remove @/icons TrashIcon import
    const iconsImportRegex = /import\s+{([^}]*TrashIcon[^}]*)}\s+from\s+["']@\/icons["'];?\n?/g;
    const match = content.match(iconsImportRegex);
    if (match) {
      match.forEach(m => {
        const importList = m.match(/{([^}]+)}/)[1];
        const icons = importList.split(',').map(i => i.trim()).filter(i => !i.includes('TrashIcon'));
        
        if (icons.length === 0) {
          // Remove entire import
          content = content.replace(m, '');
          changes.push('Removed duplicate @/icons TrashIcon import');
        } else {
          // Keep other icons
          content = content.replace(m, `import { ${icons.join(', ')} } from "@/icons";\n`);
          changes.push('Removed TrashIcon from @/icons import');
        }
        modified = true;
      });
    }
  }
  
  // Also fix TrashIcon as TrashBinIcon - change to just TrashIcon
  if (/TrashIcon\s+as\s+TrashBinIcon/.test(content)) {
    content = content.replace(/TrashIcon\s+as\s+TrashBinIcon/g, 'TrashIcon');
    content = content.replace(/<TrashBinIcon/g, '<TrashIcon');
    modified = true;
    changes.push('Fixed TrashIcon alias');
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  
  return { modified, changes };
}

function main() {
  const adminAppDir = path.join(__dirname, '..', 'apps', 'admin');
  
  console.log('🔍 Cleaning up duplicate imports...\n');
  
  const files = findFiles(adminAppDir).filter(file => 
    file.includes('app/')
  );
  
  let totalModified = 0;
  
  files.forEach(file => {
    try {
      const result = cleanupImports(file);
      if (result.modified) {
        totalModified++;
        const relativePath = path.relative(process.cwd(), file);
        console.log(`✅ ${relativePath}`);
        result.changes.forEach(change => console.log(`   - ${change}`));
      }
    } catch (error) {
      // Ignore errors
    }
  });
  
  console.log(`\n✨ Fixed ${totalModified} files\n`);
}

if (require.main === module) {
  main();
}

