// 🔐 CONFIG TEMPLATE - HOW TO SET UP YOUR SECRETS
// 
// INSTRUCTIONS:
// 1. Copy this file as "config.js" in your repository root
// 2. Replace PLACEHOLDER values with your actual Firebase credentials
// 3. DO NOT COMMIT config.js (it's in .gitignore)
// 4. Keep config.js on your computer/server only
//
// For GitHub Pages, you have two options:
// Option A: Load config.js locally (development only)
// Option B: Use environment-specific files

// ============================================
// FIREBASE CONFIGURATION
// ============================================
// Get these from: Firebase Console → Project Settings → General

const FIREBASE_CONFIG = {
  apiKey: "YOUR_NEW_API_KEY_HERE", // 🔴 NEVER SHARE THIS
  authDomain: "kuriaspace-809f7.firebaseapp.com",
  databaseURL: "https://kuriaspace-809f7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kuriaspace-809f7",
  storageBucket: "kuriaspace-809f7.firebasestorage.app",
  messagingSenderId: "539503194984",
  appId: "1:539503194984:web:08af1e81b1ae11e7ff5cdd",
  measurementId: "G-1GQ1868N5V"
};

// ============================================
// ADMIN CREDENTIALS
// ============================================
// Change this to a strong, unique password

const ADMIN_PASSWORD = "YOUR_STRONG_PASSWORD_HERE"; // 🔴 CHANGE THIS

// ============================================
// STEP-BY-STEP SETUP
// ============================================
/*
1. Get new Firebase API key:
   - Firebase Console → Project Settings
   - Look for "Your API key" section
   - Copy the key

2. Create config.js:
   - Copy this file
   - Save as "config.js" in your repo root
   - Replace YOUR_NEW_API_KEY_HERE with actual key
   - Replace YOUR_STRONG_PASSWORD_HERE with admin password

3. Update your HTML files:
   - Add this at top of admin.html and index.html:
   <script src="config.js"></script>

   - Then use: firebaseConfig = FIREBASE_CONFIG;

4. Verify .gitignore includes config.js

5. Test locally first, then push to GitHub

6. Your secrets stay safe ✅
*/
