import AddNoteForm from '../../components/AddNoteForm';
import { NotesProvider } from '../../contexts/NotesContext';

export default function NotesLayout({ children }) {
  return (
    <NotesProvider>
      <div>
        <AddNoteForm />
        {children}
      </div>
    </NotesProvider>
  );
}