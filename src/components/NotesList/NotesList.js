import Note from "../Note/Note";
import './NotesList.scss';

const Noteslist = ({notes}) => {
    return (
        <div className="notes-list">
            {notes.map((note) =>
                <Note id={note.id} text={note.text} date={note.date}/>
            )}

        </div>
    );
};

export default Noteslist;