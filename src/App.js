import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList/NotesList";
import Search from "./components/Search/Search";
import Header from "./components/Header/Header";


function App() {
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-app-data')) || []);

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('react-notes-app-dark-mode')) || false);

    useEffect(() => {
        localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
    }, [notes]);

    useEffect(() => {
        const saveNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
        if(saveNotes){
            setNotes(saveNotes)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('react-notes-app-dark-mode', JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        const saveDarkMode = JSON.parse(localStorage.getItem('react-notes-app-dark-mode'));
        if(saveDarkMode){
            setDarkMode(saveDarkMode)
        }
    }, []);
    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleToggleDarkMode={setDarkMode}/>
                <Search handleSearchNote={setSearchText}/>
                <NotesList notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
                           handleAddNote={addNote} handleDeleteNote={deleteNote}/>
            </div>

        </div>
    );
}

export default App;
