import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import './clerk.css'; // Import the custom CSS file

// Get your Clerk publishable key from environment variables
// You'll need to set this in your .env file
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || '';

if (!publishableKey) {
  console.error('Missing Clerk publishable key. Set VITE_CLERK_PUBLISHABLE_KEY in your .env file.');
}

interface ClerkProviderWithChildrenProps {
  children: React.ReactNode;
}

export const ClerkProviderWithChildren: React.FC<ClerkProviderWithChildrenProps> = ({ children }) => {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}; 