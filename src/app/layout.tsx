import React from 'react';

export const metadata = {
  title: 'Notes App',
  description: 'A simple notes app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
