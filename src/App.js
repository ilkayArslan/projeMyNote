import { Container } from "react-bootstrap";
import "./app.css"
import Search from "./companents/search";
import FormArea from "./companents/FormArea";
import Notes from "./companents/Notes"
function App() {
  return (
    <div id="middle">
      <Container className=" bg-light text-center">
        <Search />
        <FormArea />
        <Notes />
      </Container>
    </div>
  );
}

export default App;
