# Guía de Optimización de Imágenes

## ✅ Cambios Implementados

### 1. **Instalación de Sharp**
- ✅ Instalado `sharp` para optimización automática de imágenes
- ✅ Configurado en `astro.config.mjs` para usar Sharp como servicio de imágenes

### 2. **Migración a `src/assets`**
- ✅ Movidas imágenes principales de `/public` a `/src/assets`
- ✅ Estas se procesan automáticamente y se optimizan al build

### 3. **Componente Image Optimizado**
- ✅ Actualizado `ImgAndText.astro` para soportar tanto imágenes optimizadas como URLs
- ✅ Agregado `format="webp"` para mejor compresión
- ✅ Implementado `loading="lazy"` en todas las imágenes fuera del viewport

### 4. **Dimensiones Explícitas**
- ✅ Todas las imágenes tienen `width` y `height` definidos
- ✅ Evita Cumulative Layout Shift (CLS)

### 5. **Loading Lazy**
- ✅ Implementado en todas las imágenes que no están "above the fold"
- ✅ Mejora significativamente el tiempo de carga inicial

## 📊 Beneficios Esperados

- **Reducción de ~8MB**: Las imágenes ahora se sirven en WebP automáticamente
- **Carga Lazy**: Solo se cargan las imágenes visibles
- **Dimensiones Responsivas**: Sharp genera múltiples tamaños automáticamente
- **Mejor Cache**: Las imágenes optimizadas tienen mejor cache del navegador

## 🔄 Cómo Usar Imágenes Optimizadas

### Para nuevas imágenes:

1. **Coloca la imagen en `/src/assets/`**
2. **Importa en tu componente:**
   ```astro
   ---
   import { Image } from "astro:assets";
   import miImagen from "../assets/mi-imagen.jpg";
   ---
   
   <Image 
     src={miImagen}
     alt="Descripción"
     width={600}
     height={400}
     loading="lazy"
     format="webp"
   />
   ```

3. **Para ImgAndText component:**
   ```astro
   <ImgAndText
     imageAsset={miImagen}
     altImg="Descripción"
     description="..."
   />
   ```

### Para imágenes dinámicas (frontmatter):
- Mantén en `/public/` si vienen de markdown
- Se les aplicará `loading="lazy"` automáticamente

## 🎯 Próximos Pasos Sugeridos

1. **Convertir imágenes de screenshots a WebP/AVIF** manualmente si son muy pesadas
2. **Revisar imágenes en `/public/ss_proyectos/`** - pueden ser las más pesadas
3. **Implementar responsive images** con `srcset` para pantallas móviles
4. **Considerar lazy loading para galleries** con intersection observer

## 📁 Estructura de Archivos

```
src/
  assets/           # ✅ Imágenes optimizadas automáticamente
    about-me-picture.jpg
    apps-web-example.jpg
    dashboards.png
    ...
public/             # URLs directas (no optimizadas)
  posts/            # Imágenes de blog posts
  store/            # Screenshots de productos
  ss_proyectos/     # Screenshots de proyectos
  ...
```

Las imágenes en `/src/assets/` se procesan en build time y se optimizan automáticamente.
Las imágenes en `/public/` se sirven tal como están, ideales para contenido dinámico.