import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NoteEditor from '../NoteEditor';

describe('NoteEditor', () => {
  const mockNote = { id: 1, content: 'Test Note' };
  const mockOnSave = jest.fn();
  const mockOnCancel = jest.fn();

  it('renders with correct initial content', () => {
    render(<NoteEditor note={mockNote} onSave={mockOnSave} onCancel={mockOnCancel} />);
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Test Note')).toBeInTheDocument();
  });

  it('calls onSave with updated content', () => {
    render(<NoteEditor note={mockNote} onSave={mockOnSave} onCancel={mockOnCancel} />);
    fireEvent.change(screen.getByDisplayValue('Test Note'), { target: { value: 'Updated Note' } });
    fireEvent.click(screen.getByText('Save'));
    expect(mockOnSave).toHaveBeenCalledWith({ id: 1, content: 'Updated Note' });
  });

  it('calls onCancel when cancel button is clicked', () => {
    render(<NoteEditor note={mockNote} onSave={mockOnSave} onCancel={mockOnCancel} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(mockOnCancel).toHaveBeenCalled();
  });
});
