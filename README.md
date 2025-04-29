# RiskAssess Pro

RiskAssess Pro is a modern web application that helps businesses evaluate location-based risks for their business units. Built with React, TypeScript, and Firebase, it provides real-time risk assessment and analysis.

## Features

- 🔒 **Secure Authentication**
  - Email/Password login
  - Google Sign-in
  - Password reset functionality
  - Protected routes

- 📊 **Risk Assessment**
  - Location-based risk evaluation
  - Comprehensive business unit analysis
  - Real-time market risk indicators
  - AI-powered analytics

- ⚡ **Modern Tech Stack**
  - React 18
  - TypeScript
  - Firebase Authentication
  - Tailwind CSS
  - React Router v6

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/QingyuanL1/riskassess-pro.git
cd riskassess-pro
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
src/
├── components/        # Reusable UI components
├── contexts/         # React contexts (Auth, etc.)
├── pages/           # Page components
├── firebase.ts      # Firebase configuration
└── App.tsx          # Main application component
```

## Authentication Flow

The application uses Firebase Authentication with the following features:
- Email/Password authentication
- Google Sign-in integration
- Password reset functionality
- Persistent authentication state
- Protected routes for authenticated users

## Deployment

1. Build the project
```bash
npm run build
# or
yarn build
```

2. Deploy to your preferred hosting platform (Firebase Hosting recommended)
```bash
firebase deploy
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@riskassess.pro or open an issue in the GitHub repository.

## Acknowledgments

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Unsplash](https://unsplash.com/) for the images 