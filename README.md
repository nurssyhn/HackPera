# 🚀 Safepay Web App

Safepay is a Web3-native payment platform built on the Stellar Blockchain, allowing foundations and DAOs to send funds securely via email + Telegram OTP, without requiring the sender to input any wallet address.

## 🌳 Branch Structure

This project follows a modular branch structure:

| **Branch**        | **Purpose**                            |
|-------------------|-----------------------------------------|
| `main`            |         
| `frontend`        | Next.js based client-side development   |
| `backend`         | API routes, database, Telegram & email  |
| `escrow`          | Stellar escrow logic & blockchain SDK   |

Each branch is independently maintained and merged into `main` during release cycles.

To contribute:
```bash
git checkout frontend    # or backend, escrow

## 🌐 Tech Stack
- **Frontend**: Next.js 14, TailwindCSS
- **Backend**: Next.js API Routes / FastAPI (planned)
- **Blockchain**: Stellar Escrow, SDK (Rust)
- **Database**: PostgreSQL / Prisma ORM
- **Email Service**: SendGrid / Resend
- **Telegram Bot**: Node-Telegram-Bot / python-telegram-bot
- **Deployment**: Vercel

## 🧩 Core Features
- Send grants using only recipient emails
- Email + Telegram OTP authentication for secure claims
- Unique claim URL generation
- Stellar smart transaction handling (escrow style)
- Admin dashboard (in progress)
- Mobile app support (in roadmap)

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-org/safepay-web.git
cd safepay-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Add the following keys:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
DATABASE_URL=your_postgres_url
TELEGRAM_BOT_TOKEN=your_telegram_token
EMAIL_API_KEY=your_sendgrid_or_resend_key
STELLAR_SECRET=your_stellar_account_secret
```

### 4. Run the App
```bash
npm run dev
```

App will be live on http://localhost:3000

## 🧪 Testing
```bash
npm run test
```

## 🧱 Project Structure
```
/pages         → Next.js pages
/components    → Reusable UI components
/lib           → Stellar SDK + helper functions
/api           → Server-side actions (OTP, email, tx)
/styles        → Tailwind + globals
/public        → Static assets
```

## 📌 DONE 
- [ + ] Stellar pre-auth transactions
- [ + ] Telegram OTP verification
- [ + ] Recipient claim flow with wallet connect
- [ ] SDF Grant Application Submission
- [ ] Dashboard for tracking transactions
- [ ] Mobile app for bulk transaction (Q1 2026)

## 📄 License
MIT © 2025 Safepay Team

Presentation Link : https://www.canva.com/design/DAGBAGORh8Q/Os96yVcGijQlYqHBe2KRkg/view?utm_content=DAGBAGORh8Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1f596821bc

## 🤝 Contributing
We welcome PRs! Please fork, branch, and submit pull requests. For major changes, open an issue first.
