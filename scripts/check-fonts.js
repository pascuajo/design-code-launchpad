#!/usr/bin/env node

/**
 * Pre-commit hook to check for hardcoded fonts
 * This script scans for common font-related patterns that bypass the font system
 */

const fs = require('fs');
const path = require('path');

// Patterns that indicate hardcoded fonts
const FORBIDDEN_PATTERNS = [
  /fontFamily\s*:/,           // style={{ fontFamily: '...' }}
  /font-family\s*:/,          // CSS font-family
  /className="[^"]*font-/,    // Tailwind font classes
  /fontFamily:\s*['"`]/,      // fontFamily: '...'
  /font-family:\s*['"`]/,     // font-family: '...'
];

// Files to ignore
const IGNORE_FILES = [
  'node_modules',
  '.git',
  'dist',
  'build',
  'scripts',
  'src/config/fonts.ts',      // Font system config
  'src/hooks/useFonts.tsx',   // Font system hooks
  '_TEMPLATE_Component.tsx',  // Template file
  '.eslintrc.json',           // ESLint config
];

// Directories to scan
const SCAN_DIRECTORIES = [
  'src/components',
  'src/pages',
  'src/hooks',
];

function scanDirectory(dir, fileExtensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const results = [];
  
  if (!fs.existsSync(dir)) return results;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!IGNORE_FILES.includes(item)) {
        results.push(...scanDirectory(fullPath, fileExtensions));
      }
    } else if (fileExtensions.some(ext => item.endsWith(ext))) {
      if (!IGNORE_FILES.some(ignore => fullPath.includes(ignore))) {
        results.push(fullPath);
      }
    }
  }
  
  return results;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const issues = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const lineNumber = i + 1;
    
    for (const pattern of FORBIDDEN_PATTERNS) {
      if (pattern.test(line)) {
        issues.push({
          line: lineNumber,
          content: line.trim(),
          pattern: pattern.toString()
        });
      }
    }
  }
  
  return issues;
}

function main() {
  console.log('🔍 Scanning for hardcoded fonts...\n');
  
  let totalIssues = 0;
  let filesWithIssues = 0;
  
  for (const dir of SCAN_DIRECTORIES) {
    const files = scanDirectory(dir);
    
    for (const file of files) {
      const issues = checkFile(file);
      
      if (issues.length > 0) {
        filesWithIssues++;
        totalIssues += issues.length;
        
        console.log(`❌ ${file}:`);
        for (const issue of issues) {
          console.log(`   Line ${issue.line}: ${issue.content}`);
        }
        console.log('');
      }
    }
  }
  
  if (totalIssues === 0) {
    console.log('✅ No hardcoded fonts found! All components are using the font system.');
    process.exit(0);
  } else {
    console.log(`🚨 Found ${totalIssues} hardcoded font issues in ${filesWithIssues} files.`);
    console.log('\n💡 To fix these issues:');
    console.log('   1. Import the useFonts hook: import { useFonts } from "../hooks/useFonts"');
    console.log('   2. Use font hooks: const h1Font = useFonts("componentName", "h1")');
    console.log('   3. Apply styles: style={h1Font.getFontStyle()}');
    console.log('   4. Add data-component attribute to root elements');
    console.log('   5. Add CSS classes for font targeting');
    console.log('\n📚 See README.md and _TEMPLATE_Component.tsx for examples.');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { scanDirectory, checkFile };
