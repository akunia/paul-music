// Firebase Configuration
// Replace these placeholder values with your actual Firebase project credentials
export const firebaseConfig = {
  apiKey: "AIzaSyDyf3PPpu-_IY5wS7lT-y2oOUmjzad8WjM",
  authDomain: "paulwebsite-7191f.firebaseapp.com",
  projectId: "paulwebsite-7191f",
  storageBucket: "paulwebsite-7191f.firebasestorage.app",
  messagingSenderId: "999789613606",
  appId: "1:999789613606:web:21d76299d7eb9713364ce7"
};

// ============================================
// EmailJS Configuration
// ============================================
// 1. Créez un compte gratuit sur https://www.emailjs.com
// 2. Créez un "Email Service" (Gmail, Outlook, etc.)
// 3. Créez 2 templates:
//    - Template 1 (new_user): pour notifier l'admin d'une nouvelle inscription
//      Variables: {{user_name}}, {{user_email}}, {{admin_url}}
//    - Template 2 (user_status): pour notifier l'utilisateur de son statut
//      Variables: {{user_name}}, {{status}}, {{site_url}}
// 4. Copiez vos IDs ci-dessous
// ============================================
export const emailJsConfig = {
  publicKey: "YOUR_PUBLIC_KEY",           // Dashboard > Account > Public Key
  serviceId: "YOUR_SERVICE_ID",           // Email Services > Service ID
  templateNewUser: "YOUR_TEMPLATE_ID_1",  // Email Templates > Template pour admin
  templateUserStatus: "YOUR_TEMPLATE_ID_2" // Email Templates > Template pour utilisateur
};

// Admin emails to receive notifications
export const adminEmails = ["gbedna@gmail.com", "paulbed210@gmail.com"];

// Site URL (for email links)
export const siteUrl = "https://akunia.github.io/paul-music";
