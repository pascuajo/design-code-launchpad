import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const inputDir = './public';
const outputDir = './public/optimized';
const quality = 85; // WebP quality (0-100)
const jpegQuality = 90; // JPEG quality (0-100)

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization function
async function optimizeImage(inputPath, outputPath, format = 'webp') {
  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const inputSize = inputBuffer.length;
    
    let sharpInstance = sharp(inputBuffer);
    
    // Resize if image is too large (max 1920px width)
    const metadata = await sharpInstance.metadata();
    if (metadata.width > 1920) {
      sharpInstance = sharpInstance.resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    // Optimize based on format
    if (format === 'webp') {
      sharpInstance = sharpInstance.webp({ quality });
    } else if (format === 'jpeg') {
      sharpInstance = sharpInstance.jpeg({ quality: jpegQuality, progressive: true });
    } else if (format === 'png') {
      sharpInstance = sharpInstance.png({ compressionLevel: 9 });
    }
    
    const outputBuffer = await sharpInstance.toBuffer();
    const outputSize = outputBuffer.length;
    const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
    
    fs.writeFileSync(outputPath, outputBuffer);
    
    console.log(`✅ ${path.basename(inputPath)}: ${(inputSize/1024/1024).toFixed(2)}MB → ${(outputSize/1024/1024).toFixed(2)}MB (${savings}% smaller)`);
    
    return {
      input: inputPath,
      output: outputPath,
      inputSize,
      outputSize,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

// Main optimization function
async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');
  
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const files = fs.readdirSync(inputDir);
  const imageFiles = files.filter(file => 
    imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
  );
  
  console.log(`Found ${imageFiles.length} images to optimize:\n`);
  
  const results = [];
  let totalInputSize = 0;
  let totalOutputSize = 0;
  
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const ext = path.extname(file).toLowerCase();
    
    // Determine output format
    let outputFormat = 'webp';
    let outputExt = '.webp';
    
    // Keep PNG for logos/transparent images, convert others to WebP
    if (file.includes('logo') || file.includes('transparent') || ext === '.png') {
      outputFormat = 'png';
      outputExt = '.png';
    }
    
    const outputFile = path.basename(file, ext) + outputExt;
    const outputPath = path.join(outputDir, outputFile);
    
    const result = await optimizeImage(inputPath, outputPath, outputFormat);
    if (result) {
      results.push(result);
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
    }
  }
  
  console.log('\n📊 Optimization Summary:');
  console.log(`Total files processed: ${results.length}`);
  console.log(`Total input size: ${(totalInputSize/1024/1024).toFixed(2)}MB`);
  console.log(`Total output size: ${(totalOutputSize/1024/1024).toFixed(2)}MB`);
  console.log(`Total savings: ${((totalInputSize - totalOutputSize)/1024/1024).toFixed(2)}MB (${(((totalInputSize - totalOutputSize) / totalInputSize) * 100).toFixed(1)}%)`);
  
  console.log('\n🎯 Next steps:');
  console.log('1. Review optimized images in ./public/optimized/');
  console.log('2. Replace original images with optimized versions');
  console.log('3. Update image references in your code');
  console.log('4. Test your website performance');
}

// Run optimization
optimizeImages().catch(console.error);
