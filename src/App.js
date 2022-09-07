import {useState} from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList/NotesList";



function App() {
    const [notes, setNotes]=useState([
        {
        id:nanoid(),
        text:"This is my first note!",
        date:'15/03/2022'
        },
        {
            id:nanoid(),
            text:"This is my secont note!",
            date:'15/03/2022'
        },
        {
            id:nanoid(),
            text:"This is my third note!",
            date:'11/04/2022'
        },
        {
            id:nanoid(),
            text:"This is my first note!",
            date:'28/03/2022'
        },
        {
            id:nanoid(),
            text:"This is my first note!",
            date:'28/03/2022'
        },
        {
            id:nanoid(),
            text:"This is my first note!",
            date:'28/03/2022'
        }
    ])
  return (
      <div className="container">
          <NotesList notes={notes}/>
      </div>
  );
}

export default App;
