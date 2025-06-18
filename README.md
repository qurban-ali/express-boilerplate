# Express API Boilerplate

A robust Express.js API boilerplate with MongoDB integration, JWT authentication, and Swagger documentation.

## Features

- Express.js framework
- MongoDB with Mongoose
- JWT Authentication
- Request validation using Joi
- API documentation with Swagger
- Winston logger implementation
- Error handling middleware
- Rate limiting
- Security headers with Helmet
- CORS enabled
- Environment variable configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone [your-repository-url]
cd express-boilerplate
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`
Then edit .env with your configuration.

4. Start the server:
\`\`\`bash
npm start
\`\`\`

### API Documentation

Once the server is running, you can access the Swagger documentation at:
\`http://localhost:3030/api-docs\`

## Available Scripts

- \`npm start\`: Start the server
- \`npm run dev\`: Start the server in development mode with nodemon

## Project Structure

\`\`\`
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── docs/          # API documentation
├── middlewares/   # Custom middlewares
├── models/        # Database models
├── routes/        # Route definitions
├── services/      # Business logic
├── utils/         # Utilities and helpers
└── validators/    # Request validators
\`\`\`

## License

MIT
