import React from 'react';
import { Mail } from 'lucide-react';

interface EmailButtonProps {
  email: string;
  className?: string;
}

const EmailButton: React.FC<EmailButtonProps> = ({ email, className = '' }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors ${className}`}
    >
      <Mail className="w-5 h-5" />
      <span>Send us an email</span>
    </button>
  );
};

export default EmailButton;