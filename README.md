# CVXpert-AI: AI-Powered Resume Builder

CVXpert-AI is a modern, AI-powered resume builder application that helps users create professional, ATS-friendly resumes with ease. The platform offers a variety of professionally designed templates, an intuitive editor, and real-time preview capabilities.

## Features

- **Multiple Professional Templates**: Choose from a variety of professionally designed resume templates tailored for different industries and career levels.
- **Intuitive Resume Editor**: User-friendly interface to easily input and organize your professional information.
- **Real-time Preview**: See changes to your resume in real-time as you edit.
- **PDF Export**: Download your completed resume as a professionally formatted PDF file.
- **ATS-Friendly Designs**: All templates are designed to be compatible with Applicant Tracking Systems.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **User Authentication**: Secure user accounts with Clerk authentication.

## Technology Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **PDF Generation**: html2pdf.js
- **State Management**: React Hooks
- **Routing**: React Router
- **UI Components**: Custom components with Radix UI primitives

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ashish5689/CVXpert-AI.git
   cd CVXpert-AI
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your Clerk publishable key:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Sign Up/Login**: Create an account or log in to access the resume builder.
2. **Select a Template**: Browse through available templates and select one that fits your needs.
3. **Edit Your Resume**: Fill in your personal information, work experience, education, skills, and other relevant details.
4. **Preview Your Resume**: See how your resume looks in real-time as you make changes.
5. **Download as PDF**: Once you're satisfied with your resume, download it as a PDF file.

## Project Structure

```
CVXpert-AI/
├── public/               # Static assets
├── src/
│   ├── components/       # React components
│   │   ├── auth/         # Authentication components
│   │   ├── dashboard/    # Dashboard components
│   │   ├── landing/      # Landing page components
│   │   ├── layout/       # Layout components
│   │   ├── profile/      # User profile components
│   │   ├── resume/       # Resume editor components
│   │   ├── templates/    # Resume templates
│   │   └── ui/           # UI components
│   ├── lib/              # Utility functions and libraries
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── .env                  # Environment variables
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.dev/)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js)
- [Radix UI](https://www.radix-ui.com/)

## Contact

For any questions or feedback, please reach out to [your-email@example.com](mailto:your-email@example.com)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
