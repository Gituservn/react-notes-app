import Note from "../Note/Note";
import './NotesList.scss';
import AddNote from "../AddNotes/AddNote";

const Noteslist = ({notes, handleAddNote,handleDeleteNote}) => {


    return (
        <>
            <div className="notes-list">
                {notes.map((note) =>
                    <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
                )}
                <AddNote handleAddNote={handleAddNote} />
            </div>
        </>

    );
};

export default Noteslist;