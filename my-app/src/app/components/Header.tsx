import React from 'react';

const Header = () => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-3xl font-bold mb-4">AADITYA DESAI</h1>
      <div className="flex justify-center space-x-6 text-gray-600">
        <a href="mailto:aadityadesai09@gmail.com" className="hover:text-gray-900">
          aadityadesai09@gmail.com
        </a>
        <a href="tel:(469) 803-1342" className="hover:text-gray-900">
          (469) 803-1342
        </a>
        <a href="https://github.com/adesai47" className="hover:text-gray-900">
          github.com/adesai47
        </a>
      </div>
    </header>
  );
};

export default Header;