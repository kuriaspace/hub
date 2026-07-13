// 🔐 KURIASPACE CONFIGURATION FILE
// 
// ⚠️  SECURITY WARNING:
// This file contains sensitive configuration.
// 
// If using this on a public server:
// 1. ALWAYS change ADMIN_PASSWORD to something unique
// 2. Never share this file with anyone
// 3. Regenerate Firebase keys periodically
// 4. Keep .gitignore to prevent accidental commits

// ============================================
// FIREBASE CONFIGURATION
// ============================================
// These are your Firebase project credentials
// API Key is safe to be public (Firebase Security Rules protect data)

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDU6G0VOa2Og58E5mWSjuHhrRMzYSPQdXk",
  authDomain: "kuriaspace-809f7.firebaseapp.com",
  databaseURL: "https://kuriaspace-809f7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kuriaspace-809f7",
  storageBucket: "kuriaspace-809f7.firebasestorage.app",
  messagingSenderId: "539503194984",
  appId: "1:539503194984:web:08af1e81b1ae11e7ff5cdd",
  measurementId: "G-1GQ1868N5V"
};

// ============================================
// ADMIN PASSWORD - CHANGE THIS!
// ============================================
// 🔴 THIS MUST BE CHANGED TO A STRONG PASSWORD
// 
// How to change:
// 1. Open this file (config.js)
// 2. Replace "ChangeMe2026!" with your password
// 3. Use a strong password: mix of uppercase, lowercase, numbers, symbols
// 4. Example: "Kuria$pace.Tech2026!Admin"
// 5. Save and reload your admin panel

const ADMIN_PASSWORD = "passwordstrong"; // 🔴 PLEASE CHANGE THIS PASSWORD
