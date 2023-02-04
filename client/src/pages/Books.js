import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Books = () =>
{
    const {name} = useParams();
    const [book, setBook] = useState("");

    useEffect(() =>
    {
        fetch('/api/book/' + name, {
            method: "GET"
        })
            .then(response => response.json())
            .then(json => {if (json) setBook(json)});
    }, [name]);

    return (
        <div className="App">
            <h1>Books</h1>
            <br/>
            <h4>{book.name}</h4>
            <h4>{book.author}</h4>
            <h4>{book.pages}</h4>
        </div>
    )
} 

export default Books;
