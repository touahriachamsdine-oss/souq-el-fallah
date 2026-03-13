---
description: Deploying the Web Application for Free
---

You can host your application for free using providers like **Vercel** or **Netlify**. Since your project is built with Vite/React, these platforms are perfect.

### Method 1: Vercel (Recommended - Automatic Updates)

This method connects your code to GitHub. Every time you save specific changes (push to GitHub), your website automatically updates.

1.  **Initialize Git** (if you haven't already):
    Open your terminal in the project folder and run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Push to GitHub**:
    *   Go to [GitHub.com](https://github.com) and create a new repository (name it `souq-el-fallah` or similar).
    *   Follow the instructions on GitHub to push your existing code:
        ```bash
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
        git push -u origin main
        ```

3.  **Deploy on Vercel**:
    *   Go to [Vercel.com](https://vercel.com) and sign up (you can log in with GitHub).
    *   Click "Add New..." -> "Project".
    *   Select your GitHub repository.
    *   Vercel will detect it's a Vite project. **Click Deploy**.
    *   Done! You'll get a URL like `souq-el-fallah.vercel.app`.

---

### Method 2: Netlify Drop (Fastest - No Git required)

If you just want a link *right now* and don't want to use GitHub yet:

1.  **Build your project**:
    Run this command in your terminal:
    ```bash
    npm run build
    ```
    This creates a `dist` folder in your project directory.

2.  **Drag & Drop**:
    *   Go to [app.netlify.com/drop](https://app.netlify.com/drop).
    *   Open your file explorer to your project folder (`c:\Users\Gang\Desktop\last`).
    *   Find the `dist` folder.
    *   Drag and drop the **entire `dist` folder** onto the Netlify page.
    *   Netlify will upload it and give you a link immediately.
