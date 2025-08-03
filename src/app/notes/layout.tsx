import AddNoteForm from '../../components/AddNoteForm';

export default function NotesLayout({ children }) {
  return (
    <div>
      <AddNoteForm />
      {children}
    </div>
  );
}