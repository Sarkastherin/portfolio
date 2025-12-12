# Fuentes Auto-hosted

Para mejorar el rendimiento y eliminar cookies de terceros, se cambió a fuentes del sistema.

## Si quieres usar Nunito original:

1. Descarga Nunito Variable desde Google Fonts o usa herramientas como `google-webfonts-helper`
2. Coloca el archivo `nunito-variable.woff2` en esta carpeta
3. Descomenta la configuración de @font-face en `BaseLayout.astro`
4. Actualiza `tailwind.config.js` para incluir 'Nunito' como primera opción

## Beneficios del cambio actual:
- ❌ 0 cookies de terceros por fuentes
- ⚡ Carga más rápida (sin requests externos)
- 📱 Fuentes nativas del sistema se ven perfectas
- 🔒 Mayor privacidad para los usuarios