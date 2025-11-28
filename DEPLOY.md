# 🚀 Guía de Despliegue - VPG Energy

## 📋 Pasos para Subir a GitHub

1. **Crea un repositorio en GitHub:**
   - Ve a [github.com](https://github.com)
   - Click en el botón **"+"** arriba a la derecha → **"New repository"**
   - Nombre sugerido: `vpg-energy-website`
   - **NO marques** la opción "Initialize with README"
   - Click en **"Create repository"**

2. **Conecta tu repo local con GitHub:**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/vpg-energy-website.git
   git branch -M main
   git push -u origin main
   ```
   *(Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub)*

---

## 🌐 Opciones de Despliegue (Deploy)

### Opción 1: Vercel (Recomendado) ⚡

1. Ve a [vercel.com](https://vercel.com)
2. Click en **"Add New Project"**
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Click en **"Deploy"**
6. ¡Listo! Tu web estará en línea en segundos.

**URL final:** `https://vpg-energy-website.vercel.app`

---

### Opción 2: Netlify 🎯

1. Ve a [netlify.com](https://netlify.com)
2. Click en **"Add new site"** → **"Import an existing project"**
3. Conecta con GitHub y selecciona tu repositorio
4. Netlify usará la configuración de `netlify.toml` automáticamente
5. Click en **"Deploy site"**

**URL final:** `https://vpg-energy-website.netlify.app`

---

### Opción 3: GitHub Pages 🐙

1. En tu repositorio de GitHub, ve a **Settings** → **Pages**
2. En "Build and deployment":
   - Source: **GitHub Actions**
3. Crea el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

4. Haz push de este archivo y GitHub desplegará automáticamente
5. Tu web estará en: `https://TU_USUARIO.github.io/vpg-energy-website/`

---

## ⚙️ Variables de Entorno (Si las necesitas)

Si más adelante necesitas usar variables de entorno (API keys, etc.):

- **Vercel/Netlify:** Añádelas en el dashboard → Settings → Environment Variables
- **Localmente:** Crea un archivo `.env` (ya está en `.gitignore` para no subirlo)

---

## 📞 Soporte

Si tienes problemas durante el despliegue:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
