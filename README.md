# Authentication App

A full-stack authentication application built with SvelteKit, PostgreSQL, and Drizzle ORM. Features secure database-based session management, user registration, login, and profile management.

## Features

- ✅ User Registration with email/password
- ✅ Secure Login/Logout functionality
- ✅ Database-based session management (not JWT)
- ✅ Protected routes with authentication
- ✅ Profile management (view and update)
- ✅ Password hashing with bcrypt
- ✅ Type-safe database queries with Drizzle ORM
- ✅ PostgreSQL database integration
- ✅ Modern, responsive UI

## Tech Stack

- **Frontend**: SvelteKit 5
- **Backend**: SvelteKit server-side rendering
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: Custom session management
- **Styling**: CSS with modern design
- **Password Hashing**: bcrypt

## Setup Instructions

### 1. Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### 2. Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/auth_app
SESSION_SECRET=your-super-secret-key-change-this-in-production
NODE_ENV=development
```

### 3. Database Setup

1. Create a PostgreSQL database named `auth_app`
2. Run the database setup script:

```bash
npm run db:setup
```

This will create the necessary tables:
- `users` - User accounts with email, password, name
- `sessions` - Session storage with user data and expiration

### 4. Install Dependencies

```bash
npm install
```

### 5. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Project Structure

```
auth-app/
├── src/
│   ├── lib/
│   │   ├── db/
│   │   │   ├── index.ts      # Database connection
│   │   │   └── schema.ts     # Drizzle schema definitions
│   │   └── server/
│   │       └── session.ts    # Session management functions
│   ├── routes/
│   │   ├── +page.svelte      # Welcome page
│   │   ├── login/            # Login functionality
│   │   ├── register/         # Registration functionality
│   │   ├── dashboard/        # Protected dashboard
│   │   ├── profile/          # Profile management
│   │   └── logout/           # Logout functionality
│   └── hooks.server.ts       # Request handling and session setup
├── setup-db.js               # Database setup script
└── package.json
```

## API Endpoints

- `GET /` - Welcome page (redirects to login if not authenticated)
- `GET /login` - Login page
- `POST /login` - Login form submission
- `GET /register` - Registration page
- `POST /register` - Registration form submission
- `GET /dashboard` - Protected dashboard (requires authentication)
- `GET /profile` - Profile management page
- `POST /profile` - Profile update form submission
- `POST /logout` - Logout functionality

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt
- **Session Management**: Database-based sessions with expiration
- **Protected Routes**: Authentication required for dashboard and profile
- **Input Validation**: Form validation and error handling
- **Secure Cookies**: HttpOnly, secure, and SameSite cookie settings
- **SQL Injection Protection**: Type-safe queries with Drizzle ORM

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Sessions Table
```sql
CREATE TABLE sessions (
  id VARCHAR(255) PRIMARY KEY,
  user_data JSONB NOT NULL,
  expires_at TIMESTAMP NOT NULL
);
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:setup` - Setup database tables
- `npm run db:check` - Check database users

### Adding New Features

1. Create new routes in `src/routes/`
2. Add database schema changes in `src/lib/db/schema.ts`
3. Update session management if needed in `src/lib/server/session.ts`
4. Test authentication flow

## Production Deployment

1. Set `NODE_ENV=production`
2. Use a strong `SESSION_SECRET`
3. Configure secure database connection
4. Set up proper SSL certificates
5. Use environment variables for all secrets

## License

MIT License
