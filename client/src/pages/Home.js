import { useState } from "react";

const Home = () =>
{
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
            <input id="name" type="text" value={name} onChange={handleNameChange} />
            <br/>
            <br/>
            <input id="author" type="text" value={author} onChange={handleAuthorChange} />
            <br/>
            <br/>
            <input id="pages" type="number" value={pages} onChange={handlePagesChange} />
            <br/>
            <br/>
            <input id="submit" type="submit" value="Submit" onClick={handleSubmit}/>
        </div>
    );
} 

export default Home;
