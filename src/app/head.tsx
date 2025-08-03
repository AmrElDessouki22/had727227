import React from 'react';

export const metadata = {
  title: 'Notes App',
  description: 'A simple notes management application',
};

const Head = () => {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
};

export default Head;
