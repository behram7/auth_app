# AuthApp 🔐

A modern, secure authentication system built with SvelteKit, PostgreSQL, and OAuth integration. Features a beautiful, responsive UI with enterprise-grade security.

![AuthApp](https://img.shields.io/badge/AuthApp-Secure%20Authentication-blue?style=for-the-badge&logo=shield)
![SvelteKit](https://img.shields.io/badge/SvelteKit-4.0-ff3e00?style=for-the-badge&logo=svelte)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-336791?style=for-the-badge&logo=postgresql)

## ✨ Features

- **🔐 Multi-Provider Authentication**
  - Email/password registration and login
  - Google OAuth 2.0 integration
  - GitHub OAuth integration
  - Secure session management

- **🎨 Modern UI/UX**
  - Responsive, mobile-first design
  - Beautiful gradient backgrounds
  - Glassmorphism effects
  - Tailwind CSS styling

- **⚡ Performance & Security**
  - Built with SvelteKit for optimal performance
  - TypeScript for type safety
  - PostgreSQL with Drizzle ORM
  - Encrypted sessions and secure password handling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL 15+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd auth_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/authapp"
   
   # OAuth Configuration
   GOOGLE_CLIENT_ID="your_google_client_id"
   GOOGLE_CLIENT_SECRET="your_google_client_secret"
   GITHUB_CLIENT_ID="your_github_client_id"
   GITHUB_CLIENT_SECRET="your_github_client_secret"
   
   # App Configuration
   BASE_URL="http://localhost:5174"
   SESSION_SECRET="your_session_secret_here"
   ```

4. **Set up the database**
   ```bash
   npm run setup-db
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:5174](http://localhost:5174)

## 🏗️ Project Structure

```
auth_app/
├── src/
│   ├── lib/
│   │   ├── auth.ts          # OAuth configuration and URLs
│   │   ├── db/
│   │   │   ├── index.ts     # Database connection
│   │   │   └── schema.ts    # Database schema definitions
│   │   ├── server/
│   │   │   └── session.ts   # Session management
│   │   └── utils.ts         # Utility functions
│   ├── routes/
│   │   ├── auth/            # Authentication routes
│   │   │   ├── google/      # Google OAuth
│   │   │   └── github/      # GitHub OAuth
│   │   ├── dashboard/       # Protected dashboard
│   │   ├── login/           # Login page
│   │   ├── register/        # Registration page
│   │   └── profile/         # User profile
│   └── app.html             # Main HTML template
├── static/                   # Static assets
├── package.json
└── README.md
```

## 🔧 Configuration

### OAuth Setup

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Set authorized redirect URI: `http://localhost:5174/auth/google/callback`
6. Copy Client ID and Client Secret to your `.env` file

#### GitHub OAuth
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Set Homepage URL: `http://localhost:5174`
4. Set Authorization callback URL: `http://localhost:5174/auth/github/callback`
5. Copy Client ID and Client Secret to your `.env` file

### Database Setup

The application uses PostgreSQL with the following schema:

```sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sessions table
CREATE TABLE sessions (
  id VARCHAR PRIMARY KEY,
  user_data JSONB NOT NULL,
  expires_at TIMESTAMP NOT NULL
);
```

## 📱 Usage

### Authentication Flow

1. **Registration**: Users can create accounts with email/password
2. **Login**: Multiple options available:
   - Traditional email/password
   - Google OAuth
   - GitHub OAuth
3. **Session Management**: Secure, encrypted sessions with expiration
4. **Profile Management**: Users can view and edit their profiles

### Protected Routes

- `/dashboard` - User dashboard (requires authentication)
- `/profile` - User profile management
- `/logout` - Session termination

## 🛠️ Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Database
npm run setup-db     # Initialize database schema
npm run check-users  # Check existing users

# Code Quality
npm run lint         # Run ESLint
npm run check        # TypeScript type checking
```

### Tech Stack

- **Frontend**: SvelteKit 2.0
- **Styling**: Tailwind CSS
- **Backend**: Node.js with SvelteKit SSR
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Custom OAuth implementation
- **Build Tool**: Vite
- **Language**: TypeScript

## 🔒 Security Features

- **Password Security**: Secure password hashing and validation
- **Session Management**: Encrypted session storage with expiration
- **OAuth 2.0**: Industry-standard OAuth implementation
- **Environment Variables**: Secure configuration management
- **Type Safety**: TypeScript for runtime safety

## 🚀 Deployment

### Production Build

```bash
npm run build
npm run preview
```

### Environment Variables for Production

Update your `.env` file with production values:
```env
BASE_URL="https://yourdomain.com"
DATABASE_URL="your_production_database_url"
SESSION_SECRET="strong_random_secret"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Drizzle ORM](https://orm.drizzle.team/) for database management
- [PostgreSQL](https://www.postgresql.org/) for the robust database

## 📞 Support

If you have any questions or need help:

- Create an issue in the repository
- Check the documentation
- Review the code examples

---

**Built with ❤️ using modern web technologies**
