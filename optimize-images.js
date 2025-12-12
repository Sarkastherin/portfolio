import { ImagePool } from '@squoosh/lib';
import { cpus } from 'os';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { resolve, extname, basename } from 'path';
import { glob } from 'glob';

const imagePool = new ImagePool(cpus().length);

async function optimizeImage(inputPath, outputPath) {
  try {
    const inputBuffer = await readFile(inputPath);
    const image = imagePool.ingestImage(inputBuffer);
    
    const extension = extname(inputPath).toLowerCase();
    let encodeOptions;
    
    if (extension === '.png') {
      encodeOptions = {
        webp: { quality: 85, effort: 6 },
        avif: { quality: 80, effort: 6 }
      };
    } else {
      encodeOptions = {
        webp: { quality: 85, effort: 6 },
        avif: { quality: 80, effort: 6 }
      };
    }
    
    await image.encode(encodeOptions);
    
    const webpResult = await image.encodedWith.webp;
    const originalSize = inputBuffer.length;
    const newSize = webpResult.binary.length;
    
    // Solo reemplazar si el ahorro es significativo (>20%) o el archivo es muy grande (>500KB)
    if (newSize < originalSize * 0.8 || originalSize > 500 * 1024) {
      const webpPath = outputPath.replace(/\.[^.]+$/, '.webp');
      await writeFile(webpPath, webpResult.binary);
      
      console.log(`✅ ${inputPath}: ${Math.round(originalSize/1024)}KB → ${Math.round(newSize/1024)}KB WebP (${Math.round((1-newSize/originalSize)*100)}% reducción)`);
      return { original: originalSize, optimized: newSize, saved: originalSize - newSize };
    } else {
      console.log(`⏭️  ${inputPath}: Ya optimizada (${Math.round(originalSize/1024)}KB)`);
      return { original: originalSize, optimized: originalSize, saved: 0 };
    }
    
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error.message);
    return { original: 0, optimized: 0, saved: 0 };
  }
}

async function main() {
  // Imágenes más pesadas para optimizar
  const heavyImages = [
    'public/ss_proyectos/portadas/truckFlow_home.png',
    'public/ss_proyectos/screenshots/dashboard_principal.png',
    'public/ss_proyectos/screenshots/responsive.png',
    'public/ss_proyectos/screenshots/validacion_cuit.png',
    'public/quotes-app-ss/*.png',
    'public/order-management/*.png',
    'public/store/*.png',
    'public/posts/*.png'
  ];
  
  let totalOriginal = 0;
  let totalOptimized = 0;
  let totalSaved = 0;
  
  console.log('🚀 Iniciando optimización de imágenes pesadas...\n');
  
  for (const pattern of heavyImages) {
    const files = await glob(pattern);
    
    for (const file of files) {
      if (existsSync(file)) {
        const result = await optimizeImage(file, file);
        totalOriginal += result.original;
        totalOptimized += result.optimized;
        totalSaved += result.saved;
      }
    }
  }
  
  console.log(`\n📊 Resumen de optimización:`);
  console.log(`📁 Tamaño original: ${Math.round(totalOriginal/1024/1024*100)/100} MB`);
  console.log(`📁 Tamaño optimizado: ${Math.round(totalOptimized/1024/1024*100)/100} MB`);
  console.log(`💾 Ahorro total: ${Math.round(totalSaved/1024/1024*100)/100} MB (${Math.round(totalSaved/totalOriginal*100)}%)`);
  
  await imagePool.close();
}

main().catch(console.error);