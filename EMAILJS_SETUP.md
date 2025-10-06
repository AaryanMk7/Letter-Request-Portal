# EmailJS Setup Guide for HR Letter Generator

## 🚀 Getting Started with EmailJS

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{to_email}}` - Recipient email
   - `{{to_name}}` - Recipient name
   - `{{from_name}}` - Sender name
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
   - `{{employee_name}}` - Employee name
   - `{{employee_id}}` - Employee ID
   - `{{letter_type}}` - Type of letter
   - `{{request_date}}` - Request date
   - `{{approval_date}}` - Approval date
   - `{{rejection_reason}}` - Rejection reason
   - `{{completion_date}}` - Completion date
   - `{{signing_url}}` - DocuSign signing URL

4. Note down your **Template ID**

### 4. Get Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 5. Configure Environment Variables

#### Backend (.env file)
```bash
# EmailJS Configuration
EMAILJS_SERVICE_ID=your-service-id-here
EMAILJS_TEMPLATE_ID=your-template-id-here
EMAILJS_PUBLIC_KEY=your-public-key-here

# Admin and Employee Email Addresses
ADMIN_EMAIL=admin@company.com
EMPLOYEE_EMAIL=employee@company.com
```

#### Frontend (.env file)
```bash
REACT_APP_EMAILJS_SERVICE_ID=your-service-id-here
REACT_APP_EMAILJS_TEMPLATE_ID=your-template-id-here
REACT_APP_EMAILJS_PUBLIC_KEY=your-public-key-here
```

### 6. Package Installation
The system uses the latest `@emailjs/browser` package (not the deprecated `emailjs-com`):
```bash
# Frontend
npm install @emailjs/browser

# Backend  
npm install @emailjs/browser
```

### 7. Email Template Examples

#### Letter Request Notification (Admin)
```html
Subject: New Letter Request Submitted

Dear {{to_name}},

A new letter request has been submitted:

Employee: {{employee_name}} (ID: {{employee_id}})
Letter Type: {{letter_type}}
Request Date: {{request_date}}

Please review and process this request in the HR Letter Generator system.

Best regards,
{{from_name}}
```

#### Letter Approval Notification (Employee)
```html
Subject: Letter Request Approved

Dear {{to_name}},

Your letter request has been approved:

Letter Type: {{letter_type}}
Approval Date: {{approval_date}}

The letter has been generated and is ready for processing.

Best regards,
{{from_name}}
```

#### Letter Rejection Notification (Employee)
```html
Subject: Letter Request Update

Dear {{to_name}},

Your letter request could not be processed:

Letter Type: {{letter_type}}
Rejection Date: {{rejection_date}}
Reason: {{rejection_reason}}

Please contact HR for more information.

Best regards,
{{from_name}}
```

### 8. Testing EmailJS

1. **Test the Contact Form:**
   - Go to Admin Dashboard → HR Communications tab
   - Fill out the contact form
   - Submit and check if email is received

2. **Test Automatic Notifications:**
   - Submit a letter request as an employee
   - Check if admin receives notification email
   - Approve/reject the request
   - Check if employee receives status email

### 9. Troubleshooting

#### Common Issues:
1. **"EmailJS not configured" error:**
   - Check environment variables are set correctly
   - Restart backend server after changing .env

2. **"Service ID not found" error:**
   - Verify Service ID in EmailJS dashboard
   - Check if service is active

3. **"Template ID not found" error:**
   - Verify Template ID in EmailJS dashboard
   - Check if template is published

4. **"Public Key invalid" error:**
   - Verify Public Key in EmailJS dashboard
   - Check if key is active and not expired

#### Debug Steps:
1. Check browser console for errors
2. Check backend logs for email service errors
3. Verify EmailJS dashboard shows successful sends
4. Check spam/junk folders for test emails

### 10. EmailJS Limits (Free Plan)
- **100 emails per month**
- **2 email templates**
- **1 email service**

For production use, consider upgrading to a paid plan.

### 11. Security Best Practices
1. **Never expose API keys in frontend code**
2. **Use environment variables for all sensitive data**
3. **Validate email inputs on both frontend and backend**
4. **Rate limit email sending to prevent abuse**
5. **Monitor email sending logs for suspicious activity**

## 🎯 Next Steps

After setting up EmailJS:
1. Test all email notifications
2. Customize email templates for your company
3. Set up proper email addresses for admins and employees
4. Monitor email delivery rates
5. Consider email analytics and tracking

## 📞 Support

If you encounter issues:
1. Check EmailJS documentation
2. Review EmailJS dashboard logs
3. Check your email service provider settings
4. Contact EmailJS support if needed

---

**Note:** This setup guide assumes you're using the free EmailJS plan. For enterprise features, refer to EmailJS documentation for advanced configuration options.
