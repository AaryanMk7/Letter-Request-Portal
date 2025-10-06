### ST.HR Letter Generator

Full‑stack app to request, preview, approve, and download HR letters as filled PDFs.

Frontend: React + Vite (port 5173)
Backend: Node.js + Express (port 4000) with MongoDB, PDF generation, email notifications, CSV import.

### Prerequisites

- Node.js 18+ and npm 9+ (`node -v`, `npm -v`)
- MongoDB Community Server 6+ running locally
  - macOS (Homebrew): `brew tap mongodb/brew && brew install mongodb-community@7.0`
  - Start service: `brew services start mongodb-community@7.0`
  - Windows: install from `https://www.mongodb.com/try/download/community` and start MongoDB
- Git (optional) `https://git-scm.com/`
- For email: SMTP credentials (Gmail recommended with an App Password)

### Project layout (important)

- Backend API: `backend/`
- Frontend app: project root (this folder) using `src/` and `vite.config.js`
- Local PDF templates: `public/templates/*.pdf`

Ignore the `hr-letter-frontend/` subfolder; the active frontend is at the project root.

### 1) Clone and install

```bash
git clone <your-repo-url>
cd ST.HR-Letter-Generator

# Frontend deps (project root)
npm install

# Backend deps
cd backend
npm install
```

### 2) Configure environment

Create `backend/.env`:

```env
# Server
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/hr-letters

# SMTP (use your provider or Gmail App Password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
MAIL_FROM=HR Letters <your@gmail.com>
# Fallback if no admin emails are configured in the portal
ADMIN_EMAIL=admin@example.com
```

Notes:
- You can also manage SMTP settings in the Admin portal under Settings. The backend reads DB settings first, then falls back to `.env`.
- Ensure `public/templates/` contains your PDF templates (e.g., `visa_letter.pdf`, `certification_reimbursement.pdf`, `hr_letter.pdf`, `internship_completion.pdf`, `travel_noc.pdf`).

### 3) Start services

Open two terminals.

Terminal A – backend:
```bash
cd ST.HR-Letter-Generator/backend
npm start
# Server runs at http://localhost:4000
```

Terminal B – frontend:
```bash
cd ST.HR-Letter-Generator
npm run dev
# App at http://localhost:5173
```

### 4) Login and first‑time use

- Default login uses `employeeId` as username and password `123`.
- Add employees:
  - Admin portal → Employee Data → Add Employee, or
  - Import CSV in Admin portal (merges/updates `backend/employees.csv`).
- Only the Super Admin (Aarav Mehta) can grant/revoke admin roles. Admins can switch between Admin and Employee dashboards.

### 5) Key features

- Employee: request letters, preview request before submit, view history, withdraw pending requests, download approved filled PDFs, edit profile (address, email), change password.
- Admin: review requests, preview filled PDFs in‑app, approve/reject with notes, manage templates, import CSV, add employees.




### Useful scripts

- Backend: `cd backend && npm start`
- Frontend: `npm run dev`

### 6) DocuSign Integration

The application includes full DocuSign integration for electronic document signing:

- **Setup**: See `DOCUSIGN_SETUP.md` for detailed configuration instructions
- **Features**: OAuth authentication, envelope management, real-time status updates, multiple recipients
- **Usage**: After generating a filled PDF, use the DocuSign Integration panel to send for signing

### Troubleshooting

- Port in use (5173): close other Vite instances or run `lsof -i :5173` and kill the process.
- Backend not starting: ensure MongoDB is running; verify `MONGO_URI` in `.env`.
- PDF preview blank: confirm the PDF exists under `public/templates/` with the expected filename; hard refresh the browser (Cmd/Ctrl+Shift+R).
- Misaligned certification reimbursement text: alignment uses an overlay; if fonts/positions look off, update coordinates in `backend/routes/pdfFiller.js`.
- Emails not sending: verify SMTP creds or configure via Admin → Settings; for Gmail, use an App Password.

### Security notes

- Passwords are stored as hashes. Existing accounts without hashes are auto‑bootstrapped to `123` on first login; users should change passwords immediately.

---

That’s it. Start backend on 4000, frontend on 5173, open `http://localhost:5173`, log in with your `employeeId` and `123`, and you’re good to go.

