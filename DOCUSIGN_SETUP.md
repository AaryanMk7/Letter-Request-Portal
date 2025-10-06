# DocuSign Integration Setup Guide

This guide will help you set up DocuSign integration with your HR Letter Generator for template management.

## 🎯 **What This Integration Provides:**

1. **Template Management**: Create, edit, and delete templates directly in DocuSign
2. **Document Signing**: Send documents for electronic signatures
3. **Template Library**: Access all your DocuSign templates from the admin panel
4. **Seamless Workflow**: Manage templates in DocuSign, use them in your app

## 📋 **Prerequisites:**

1. **DocuSign Developer Account** (free)
2. **DocuSign Production Account** (for real use)
3. **OAuth 2.0 Application** configured in DocuSign

## 🔧 **Step 1: Create DocuSign Developer Account**

1. Go to [DocuSign Developer Center](https://developers.docusign.com/)
2. Click "Get Started" and create a free account
3. Complete email verification

## 🔧 **Step 2: Create OAuth 2.0 Application**

1. **Login to DocuSign Developer Center**
2. **Go to "My Apps"** → "Integrations"
3. **Click "Add App"** → "OAuth 2.0"
4. **Configure your app:**

   ```
   App Name: HR Letter Generator
   App Type: Web Application
   Redirect URI: http://localhost:4000/api/docusign/callback
   Scopes: signature, extended
   ```

5. **Save and note down:**
   - Client ID
   - Client Secret
   - Account ID (found in your DocuSign account)

## 🔧 **Step 3: Configure Environment Variables**

Update your `backend/.env` file:

```bash
# MongoDB Configuration
MONGO_URI=your_mongodb_atlas_connection_string

# Server Configuration
PORT=4000
SESSION_SECRET=your_random_session_secret

# DocuSign Configuration
DOCUSIGN_CLIENT_ID=your_docusign_client_id_here
DOCUSIGN_CLIENT_SECRET=your_docusign_client_secret_here
DOCUSIGN_REDIRECT_URI=http://localhost:4000/api/docusign/callback
DOCUSIGN_OAUTH_BASE=https://account-d.docusign.com
DOCUSIGN_ACCOUNT_ID=your_docusign_account_id_here

# Frontend Origins
FRONTEND_ORIGIN=http://localhost:5173,http://localhost:5174
```

## 🔧 **Step 4: Start Your Application**

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Start backend server:**
   ```bash
   npm start
   ```

3. **Start frontend:**
   ```bash
   cd ../
   npm run dev
   ```

## 🔧 **Step 5: Connect DocuSign**

1. **Go to Admin Dashboard**
2. **Click "DocuSign Integration" tab**
3. **Click "Connect DocuSign Account"**
4. **Complete OAuth flow** in the popup window
5. **You're now connected!** 🎉

## 📱 **Using the Integration:**

### **Template Management:**
- **View Templates**: See all your DocuSign templates
- **Create Templates**: Build new templates with custom fields
- **Edit Templates**: Modify existing templates
- **Delete Templates**: Remove unused templates

### **Document Workflow:**
1. **Create Template** in DocuSign
2. **Use Template** in your HR Letter Generator
3. **Send for Signing** to employees
4. **Track Status** of signed documents

## 🔍 **API Endpoints Available:**

- `GET /api/docusign/auth` - Get OAuth URL
- `GET /api/docusign/callback` - OAuth callback
- `GET /api/docusign/status` - Check authentication
- `GET /api/docusign/templates` - List all templates
- `GET /api/docusign/templates/:id` - Get template details
- `POST /api/docusign/templates` - Create new template
- `PUT /api/docusign/templates/:id` - Update template
- `DELETE /api/docusign/templates/:id` - Delete template
- `POST /api/docusign/envelopes` - Create envelope from template
- `GET /api/docusign/envelopes/:id/status` - Get envelope status
- `POST /api/docusign/envelopes/:id/signing-url` - Create signing URL
- `POST /api/docusign/logout` - Disconnect DocuSign

## 🚀 **Production Deployment:**

### **Environment Changes:**
- Use production DocuSign URLs
- Update redirect URIs to your domain
- Set proper CORS origins
- Use secure session secrets

### **Security Considerations:**
- Store secrets securely
- Use HTTPS in production
- Implement proper session management
- Regular token refresh

## 🔍 **Troubleshooting:**

### **Common Issues:**

1. **"Invalid redirect URI"**
   - Check redirect URI in DocuSign app settings
   - Ensure it matches exactly

2. **"Authentication failed"**
   - Verify Client ID and Secret
   - Check OAuth scopes

3. **"No templates found"**
   - Ensure you're authenticated
   - Check DocuSign account has templates

4. **"CORS error"**
   - Verify frontend origin in backend CORS settings
   - Check environment variables

### **Debug Steps:**

1. **Check browser console** for frontend errors
2. **Check backend logs** for API errors
3. **Verify environment variables** are loaded
4. **Test OAuth flow** step by step

## 📚 **Next Steps:**

1. **Create your first template** in DocuSign
2. **Test template creation** from the admin panel
3. **Explore envelope creation** for document signing
4. **Customize template fields** for your HR letters

## 🎉 **You're Ready!**

Your HR Letter Generator now has full DocuSign integration for professional template management and electronic signatures!

## 📞 **Need Help?**

- Check DocuSign Developer Documentation
- Review API response logs
- Test with DocuSign sandbox first
- Ensure all environment variables are set correctly

Happy integrating! 🚀
