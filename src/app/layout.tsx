import { NotesProvider } from '../contexts/NotesContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}