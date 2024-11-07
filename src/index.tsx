import ReactDOM from 'react-dom/client'; // React 18+ uses this to create a root
import React from 'react';
import App from './App.tsx';

// Assuming you're using React 18+
// Get the root element
const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement); // React 18+ root rendering method
  root.render(<App />);
} else {
  console.error('Root element not found');
}
