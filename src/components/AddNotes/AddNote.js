import './AddNote.scss';
import {useState} from "react";


const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const handleChange = (e) => {
        setNoteText(e.target.value);
    };




    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    };
    return (<div className="note new">
        <textarea
            maxLength={characterLimit}
            cols="10"
            rows="8"
            placeholder="Type to add a note..."
            onChange={handleChange}

        >
        </textarea>
        <div className="note-filter">
            <small>{characterLimit-noteText.length} Remaining</small>
            <button onClick={handleSaveClick} className="save">Save</button>
        </div>
    </div>);
};

export default AddNote;