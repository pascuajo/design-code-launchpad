import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Focus on the largest, most critical images
const criticalImages = [
  'ProfileRoto.png',      // 3.4MB - Hero section
  'Profile.png',          // 2.3MB - About section  
  'StrategicLeadershipMountain.png', // 2.8MB
  'OperationalExcellenceMountain.png', // 2.5MB
  'ProductInnovationMountain.png', // 2.3MB
  'tubemap.png'           // 0.8MB
];

async function optimizeCriticalImage(filename) {
  const inputPath = path.join('./public', filename);
  const ext = path.extname(filename).toLowerCase();
  const nameWithoutExt = path.basename(filename, ext);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`❌ File not found: ${filename}`);
    return null;
  }
  
  const inputBuffer = fs.readFileSync(inputPath);
  const inputSize = inputBuffer.length;
  
  console.log(`\n🔄 Optimizing ${filename} (${(inputSize/1024/1024).toFixed(2)}MB)...`);
  
  try {
    // Create multiple optimized versions
    const optimizations = [];
    
    // 1. WebP version (best compression)
    const webpPath = path.join('./public', `${nameWithoutExt}.webp`);
    const webpBuffer = await sharp(inputBuffer)
      .resize(1920, null, { withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: 85 })
      .toBuffer();
    
    fs.writeFileSync(webpPath, webpBuffer);
    const webpSize = webpBuffer.length;
    const webpSavings = ((inputSize - webpSize) / inputSize * 100).toFixed(1);
    
    optimizations.push({
      format: 'WebP',
      path: webpPath,
      size: webpSize,
      savings: webpSavings
    });
    
    // 2. Optimized PNG (for images that need transparency)
    if (ext === '.png') {
      const pngPath = path.join('./public', `${nameWithoutExt}_optimized.png`);
      const pngBuffer = await sharp(inputBuffer)
        .resize(1920, null, { withoutEnlargement: true, fit: 'inside' })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toBuffer();
      
      fs.writeFileSync(pngPath, pngBuffer);
      const pngSize = pngBuffer.length;
      const pngSavings = ((inputSize - pngSize) / inputSize * 100).toFixed(1);
      
      optimizations.push({
        format: 'PNG',
        path: pngPath,
        size: pngSize,
        savings: pngSavings
      });
    }
    
    // 3. JPEG version (for photos)
    if (filename.includes('Profile') || filename.includes('Mountain')) {
      const jpegPath = path.join('./public', `${nameWithoutExt}.jpg`);
      const jpegBuffer = await sharp(inputBuffer)
        .resize(1920, null, { withoutEnlargement: true, fit: 'inside' })
        .jpeg({ quality: 90, progressive: true })
        .toBuffer();
      
      fs.writeFileSync(jpegPath, jpegBuffer);
      const jpegSize = jpegBuffer.length;
      const jpegSavings = ((inputSize - jpegSize) / inputSize * 100).toFixed(1);
      
      optimizations.push({
        format: 'JPEG',
        path: jpegPath,
        size: jpegSize,
        savings: jpegSavings
      });
    }
    
    // Show results
    console.log(`✅ ${filename} optimized:`);
    optimizations.forEach(opt => {
      console.log(`   ${opt.format}: ${(opt.size/1024/1024).toFixed(2)}MB (${opt.savings}% smaller)`);
    });
    
    return {
      original: filename,
      inputSize,
      optimizations
    };
    
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
    return null;
  }
}

async function optimizeCriticalImages() {
  console.log('🚀 Optimizing critical images for better performance...\n');
  
  const results = [];
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  
  for (const filename of criticalImages) {
    const result = await optimizeCriticalImage(filename);
    if (result) {
      results.push(result);
      totalOriginalSize += result.inputSize;
      
      // Use the best optimization (usually WebP)
      const bestOptimization = result.optimizations.reduce((best, current) => 
        current.size < best.size ? current : best
      );
      totalOptimizedSize += bestOptimization.size;
    }
  }
  
  console.log('\n📊 Critical Images Optimization Summary:');
  console.log(`Files processed: ${results.length}`);
  console.log(`Total original size: ${(totalOriginalSize/1024/1024).toFixed(2)}MB`);
  console.log(`Total optimized size: ${(totalOptimizedSize/1024/1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalOriginalSize - totalOptimizedSize)/1024/1024).toFixed(2)}MB (${(((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100).toFixed(1)}%)`);
  
  console.log('\n🎯 Next steps:');
  console.log('1. Update your React components to use the optimized images');
  console.log('2. Use WebP format with PNG fallback for best performance');
  console.log('3. Test your website speed with PageSpeed Insights');
}

optimizeCriticalImages().catch(console.error);
