import { createSlice } from "@reduxjs/toolkit";

export const NoteSlice = createSlice({
    name: "Notes",
    initialState: {
        items: [
            { name: "note1", id: 1, inside: "Lorem ıpsum falan filan", isDone: true, color: "red" },
            { name: "note2", id: 2, inside: "Yapılmayan şeyler", isDone: false, color: "yellow" }
        ],
        newFilter: "",
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);

        },
        filterNote: (state, action) => {
            state.newFilter = action.payload
        }
    }
})
export const { addNote, filterNote } = NoteSlice.actions;
export default NoteSlice.reducer;