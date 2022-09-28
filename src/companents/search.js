
import { useDispatch } from "react-redux";
import { filterNote } from "../redux/NoteSlice"
function Search() {
    const dispatch = useDispatch();
    function handleSearch(e) {
        dispatch(filterNote(e.target.value));
    }
    return (
        <>
            <h1 className='text-dark ' id='noteApp'>Note App</h1>
            <input type="text" placeholder='Search...' className='w-25 rounded-pill ' id='searchForm' onChange={handleSearch} />
        </>
    )
}

export default Search