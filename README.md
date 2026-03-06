# Mmesoma Victory Nwachukwu — Portfolio

Personal portfolio website built with React + Vite.

---

## 🚀 Getting Started in VS Code

### 1. Install Node.js (if you haven't)
Download from https://nodejs.org — install the LTS version.

### 2. Open this folder in VS Code
```
File → Open Folder → select the "portfolio" folder
```

### 3. Open the VS Code terminal
```
Terminal → New Terminal  (or Ctrl + `)
```

### 4. Install dependencies
```bash
npm install
```

### 5. Run the development server
```bash
npm run dev
```

Then open your browser at **http://localhost:5173** — your portfolio is live locally!

---

## 📁 Project Structure

```
portfolio/
├── index.html          ← HTML entry point
├── package.json        ← Project config & dependencies
├── vite.config.js      ← Vite build config
└── src/
    ├── main.jsx        ← React entry point
    └── App.jsx         ← All portfolio code lives here
```

---

## 🌐 Deploying to Vercel (Free)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com and sign up with GitHub
3. Click **"Add New Project"** → import your repo
4. Vercel auto-detects Vite — just click **Deploy**
5. Your site goes live at `yourname.vercel.app` in ~1 minute ✅

---

## ✏️ Editing Your Content

All content (projects, blogs, skills, contact info) is in **`src/App.jsx`**.

- **Projects** → Edit the `PROJECTS` array
- **Blog posts** → Edit the `BLOGS` array
- **Skills** → Edit the `SKILLS` array
- **Contact details** → Search for `victorymmesoma003@gmail.com` and update

---

## 🎨 Changing the Accent Color

In `src/App.jsx`, find this line inside the `T` object (light mode):
```js
accent: "#2563eb",
```
Replace `#2563eb` with any hex color you like.

For dark mode, find:
```js
accent: "#4f8ef7",
```

---

Built with React 18 + Vite 5.
