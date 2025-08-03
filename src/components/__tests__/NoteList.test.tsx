import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoteList from '../NoteList';

describe('NoteList', () => {
  const mockNotes = [
    { id: 1, content: 'First Note' },
    { id: 2, content: 'Second Note' },
  ];
  const mockOnEdit = jest.fn();

  it('renders list of notes', () => {
    render(<NoteList notes={mockNotes} onEdit={mockOnEdit} />);
    expect(screen.getByText('First Note')).toBeInTheDocument();
    expect(screen.getByText('Second Note')).toBeInTheDocument();
  });

  it('calls onEdit with correct id when edit button is clicked', () => {
    render(<NoteList notes={mockNotes} onEdit={mockOnEdit} />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(mockOnEdit).toHaveBeenCalledWith(1);
  });
});
