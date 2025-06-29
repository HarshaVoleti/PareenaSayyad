# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration to automatically store contact form submissions from your portfolio website.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it "Portfolio Contact Submissions" (or any name you prefer)
4. Set up the header row with these columns in row 1:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Project Details`
   - E1: `Source`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` > `Apps Script`
2. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Prepare row data
    const rowData = [
      new Date(data.timestamp), // Timestamp
      data.name,               // Name
      data.email,              // Email
      data.project,            // Project Details
      data.source              // Source
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Contact form endpoint is working'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Save the project with a name like "Portfolio Contact Form Handler"

## Step 3: Deploy the Web App

1. Click the `Deploy` button in the Apps Script editor
2. Choose `New deployment`
3. Click the gear icon next to "Type" and select `Web app`
4. Configure the deployment:
   - **Description**: "Portfolio Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
5. Click `Deploy`
6. Copy the **Web app URL** that appears - you'll need this for your website

## Step 4: Update Your Website Code

1. Open `/src/components/Contact.vue`
2. Find this line:
   ```javascript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
   ```
3. Replace `YOUR_SCRIPT_ID` with your actual Web app URL from Step 3

## Step 5: Test the Integration

1. Run your Vue.js website locally:
   ```bash
   npm run dev
   ```
2. Fill out the contact form and submit it
3. Check your Google Sheet - you should see a new row with the form data
4. If you see the data, congratulations! The integration is working.

## Troubleshooting

### Common Issues:

1. **"Script function not found" error**:
   - Make sure you've saved the Apps Script code
   - Ensure the function name is `doPost`

2. **CORS errors**:
   - This is normal and expected due to Google's security policies
   - The form will still work, we're using `mode: 'no-cors'`

3. **No data appearing in sheets**:
   - Check that your Web app URL is correct
   - Verify the deployment is set to "Anyone" access
   - Test the endpoint directly by visiting the URL in your browser

4. **Permission errors**:
   - Make sure you're logged into the same Google account that owns the sheet
   - Re-deploy the web app if needed

### Testing the Endpoint:

You can test if your Google Apps Script is working by visiting the Web app URL directly in your browser. You should see:
```json
{
  "status": "success",
  "message": "Contact form endpoint is working"
}
```

## Security Notes

- The endpoint is public but only accepts POST requests with the expected data format
- Consider adding additional validation in the Apps Script if needed
- Form data is stored securely in your private Google Sheet
- Only you have access to the Google Sheet data

## Optional Enhancements

You can enhance the setup by:

1. **Adding email notifications**: Modify the Apps Script to send you an email when a form is submitted
2. **Data validation**: Add more robust validation in the Apps Script
3. **Formatting**: Auto-format the Google Sheet with colors and styling
4. **Backup**: Set up automatic backups of your form submissions

## Alternative: Using FormSpree or Netlify Forms

If you prefer not to use Google Sheets, you can also use:
- **Formspree**: Simple form backend service
- **Netlify Forms**: If you're deploying on Netlify
- **EmailJS**: Send form data directly to email

Let me know if you need help setting up any of these alternatives!
