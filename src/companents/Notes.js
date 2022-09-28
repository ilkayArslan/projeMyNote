import React from 'react'
import { useSelector } from "react-redux";
function Notes() {
    const Notes = useSelector(state => state.Notes.items);
    const newFilter = useSelector(state => state.Notes.newFilter);
    return (
        <div className='row g-2 m-auto my-2 justify-content-start ' style={{ width: "75%" }}>
            {Notes.filter(note => note.name.includes(newFilter)).map(Note => {
                return (
                    <div key={Note.id} className="col-md-3 py-2 border border-2  fw-bolder" style={{ backgroundColor: Note.color, cursor: "pointer" }}>

                        {Note.name}

                    </div>
                )
            })}
        </div>
    )
}

export default Notes