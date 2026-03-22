# 🚀 AI Career Coach

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.1.4-black" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0.0-blue" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Clerk-6.9.10-orange" alt="Clerk" />
  <img src="https://img.shields.io/badge/Prisma-6.2.1-green" alt="Prisma" />
  <img src="https://img.shields.io/badge/Google_AI-0.21.0-red" alt="Google AI" />
</div>

<div align="center">
  <h3>AI-Powered Career Development Platform</h3>
  <p>Transform your career with personalized AI guidance, interview preparation, and professional document creation.</p>
</div>

## ✨ Features

### 🤖 AI-Powered Career Guidance
- **Personalized Career Advice**: Get tailored recommendations based on your industry and experience
- **Industry Insights**: Real-time market trends, salary data, and demand analysis
- **Skill Recommendations**: AI-driven learning suggestions for career advancement

### 📄 Smart Document Creation
- **ATS-Optimized Resumes**: Generate professional resumes that pass Applicant Tracking Systems
- **AI Cover Letters**: Create compelling cover letters customized for specific job applications
- **Real-time Feedback**: Instant AI-powered suggestions and improvements

### 🎯 Interview Preparation
- **Mock Interviews**: Practice with role-specific questions and scenarios
- **Performance Analytics**: Track your progress with detailed statistics and charts
- **Instant Feedback**: Get AI-generated tips to improve your interview performance

### 📊 Dashboard & Analytics
- **Career Progress Tracking**: Monitor your development journey
- **Industry Salary Ranges**: Compare your compensation with market standards
- **Growth Rate Analysis**: Stay informed about industry trends and opportunities

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Authentication**: Clerk
- **Database**: PostgreSQL with Prisma ORM
- **AI Integration**: Google Generative AI
- **UI Components**: Radix UI, Lucide Icons
- **Charts**: Recharts
- **Forms**: React Hook Form with Zod validation
- **Background Jobs**: Inngest
- **PDF Generation**: html2pdf.js

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Google AI API key
- Clerk account for authentication

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RishiBoudh1312/career-coach.git
   cd career-coach
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/career_coach"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   # Google AI
   GOOGLE_AI_API_KEY=your_google_ai_api_key

   # Inngest (Optional - for background jobs)
   INNGEST_SIGNING_KEY=your_inngest_signing_key
   INNGEST_EVENT_KEY=your_inngest_event_key
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── actions/                 # Server actions for API calls
├── app/                     # Next.js app directory
│   ├── (auth)/             # Authentication pages
│   ├── (main)/             # Protected app pages
│   │   ├── ai-cover-letter/ # Cover letter management
│   │   ├── dashboard/      # User dashboard
│   │   ├── interview/      # Interview preparation
│   │   ├── onboarding/     # User onboarding
│   │   └── resume/         # Resume builder
│   └── api/                # API routes
├── components/             # Reusable UI components
├── data/                   # Static data files
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and configurations
├── prisma/                 # Database schema and migrations
└── public/                 # Static assets
```

## 🎯 How It Works

1. **Sign Up & Onboard**: Create your account and complete the onboarding process
2. **Build Your Profile**: Share your industry, experience, and skills
3. **Create Documents**: Generate ATS-optimized resumes and tailored cover letters
4. **Practice Interviews**: Take mock interviews with AI-powered feedback
5. **Track Progress**: Monitor your career development on the dashboard

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


<div align="center">

  <p>
    <a href="https://github.com/RishiBoudh1312/career-coach">GitHub</a> •
    <a href="#features">Features</a> •
    <a href="#getting-started">Getting Started</a>
  </p>
</div></content>
<parameter 0