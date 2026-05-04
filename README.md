# 🌟 **Text Analyzer** - Advanced Animated Text Utility by **Intiyaj Ansari**

[![React](https://img.shields.io/badge/React-19.2.5-%232196b9?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.10-%23c8a449?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-%237549b8?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com)
[![Animated](https://img.shields.io/badge/Animated-✨-%23ff6b6b?style=for-the-badge&logo=sparkles)](https://github.com/)

<div align=\"center\">

## 🎬 **Live Demo Animations**

<img src=\"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnd1d2Y0czd1b3NjM2I0eWltNXhkNGV6bWZuemw0eGg4YW9qYmNxMCZjdD1n/eIeNrQohbRMqM/giphy.gif\" alt=\"Typing Animation\" width=\"250\"/>
<img src=\"https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif\" alt=\"Clear Animation\" width=\"250\"/>
<img src=\"https://media.giphy.com/media/26ufnwz3wDUll5JKe/giphy.gif\" alt=\"Copy Success\" width=\"250\"/>

**Intiyaj Ansari's Text Analyzer – Transform Text with Magic! ✨**

</div>

## 🚀 **Features** _(Fully Implemented & Animated)_

| 🎯 **Action**  | ✨ **Effect**               | 🎪 **Animation**                                     |
| -------------- | --------------------------- | ---------------------------------------------------- |
| **Uppercase**  | `text.toUpperCase()`        | Instant transform                                    |
| **Lowercase**  | `text.toLowerCase()`        | Instant transform                                    |
| **Capitalize** | Title case per word         | Smart word-by-word                                   |
| **Clean Text** | `split(/\\s+/).join(\" \")` | Extra spaces removed                                 |
| **Copy**       | `navigator.clipboard`       | ✅ Success alert                                     |
| **Clear**      | Reset with timeout          | 3s → \"Kuchh to type karo yaar 😀\" → 5s sample text |

**Live Analysis**: Words, Characters, Preview _(debounced typing)_

<div align=\"center\">
<img src=\"https://i.imgur.com/placeholder-app-screenshot.png\" alt=\"App Screenshot\" width=\"700\" />
<i>Dark theme card with shadows & responsive buttons</i>
</div>

## 🛠 **Tech Stack**

```mermaid
graph TD
    A[React 19.2.5 Hooks] --> B[useState text]
    A --> C[useRef timeouts]
    D[Vite 8.0 HMR] --> E[Fast Dev Server]
    F[Bootstrap 5.3] --> G[Responsive UI]
    A --> F
```

- **Performance**: Debounced onChange, timeout clears
- **Zero extra deps**: Pure React + Bootstrap CDN
- **Custom**: Blue gradient bg, black shadows

## 👨‍💻 **About the Developer**

**Intiyaj Ansari** - BTech Student & Frontend Enthusiast  
**Skills**: HTML/CSS/JS • Projects: Text Analyzer, Movie Booking, Portfolio  
🔍 [Google \"Intiyaj Ansari\"](https://www.google.com/search?q=Intiyaj+Ansari)

## ⚡ **Get Started** (2 mins)

```bash
git clone <your-repo> text-analyzer
cd text-analyzer
npm install
npm run dev  # http://localhost:5173
```

**Production**: `npm run build` → `dist/`

## 📹 **Usage Flow**

```
Paste Text → Live Count → Click Transform → Copy/Clear!
↓
Animation: Clear → Emoji message → Auto-reset 😍
```

## 🤝 **Contribute**

```
1. Fork → Clone
2. npm install & npm run dev
3. Add feature (new transform?)
4. PR with description
```

## 📄 **License**

[MIT](LICENSE) © 2024 **Intiyaj Ansari**

<div align=\"center\">
Made with ❤️ **#FrontendDev #React #Animations**  
⭐ **Star & Follow Intiyaj Ansari!**
</div>
