import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);

  const handleNameChange = (event) =>
  {
    setName(event.target.value);
  }

  const handleAuthorChange = (event) =>
  {
    setAuthor(event.target.value);
  }

  const handlePagesChange = (event) =>
  {
    setPages(event.target.value);
  }

  const handleSubmit = () =>
  {
    const newBook = {
      name,
      author,
      pages
    };

    console.log(newBook);

    fetch('/api/book', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBook)
    });
  }

  return (
    <div className="App">
      <h1>Books</h1>
      <input type="text" value={name} onChange={handleNameChange} />
      <br/>
      <br/>
      <input type="text" value={author} onChange={handleAuthorChange} />
      <br/>
      <br/>
      <input type="number" value={pages} onChange={handlePagesChange} />
      <br/>
      <br/>
      <input id="submit" type="submit" value="Submit" onClick={handleSubmit}/>
    </div>
  );
}

export default App;
