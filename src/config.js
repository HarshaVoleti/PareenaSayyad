// Configuration file for external services
export const config = {
  // Google Sheets Integration
  // Google Apps Script Web App URL for storing contact form submissions
  googleScriptUrl: 'https://script.google.com/macros/s/AKfycbxnakVrTRPIZy-5n1lT40M9reTaF5lWz9xJhbYd_r3A7bA8CT6qdlI7KsjRPtJMss2J/exec',
  
  // Form settings
  form: {
    // Show success message for this duration (in milliseconds)
    successMessageDuration: 5000,
    
    // Maximum character limits
    maxNameLength: 100,
    maxEmailLength: 255,
    maxProjectLength: 1000,
  },
  
  // Email settings (if you want to add email integration later)
  email: {
    // Add your email configuration here if needed
    // supportEmail: 'your-email@example.com'
  }
}

export default config
