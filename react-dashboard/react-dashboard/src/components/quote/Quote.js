import React, {useState,useEffect} from "react";
import"./style.css"
import axios from "axios";

const Quote=()=>{
    const [quote, setQuote]=useState("");
    const [author, setAuthor]=useState("");

    const quoteAPI = async ()=> {
        let arrayOfQuotes = [];
        try{
            const data = await axios.get("https://api.quotable.io/random");
            console.log(data);
            arrayOfQuotes= data.data;
        }catch(error){
            console.log(error)
        }
         try{
            setQuote(arrayOfQuotes.content);
            setAuthor(arrayOfQuotes.author);
         }catch(error){
            console.log(error);
         }
    };
    useEffect(() => {
        quoteAPI();
    }, []);
    return(
        <div className="Quote">
        <div className="quoteBox">
        <div className="container">
        <div className="quoteButton">  <button onClick={quoteAPI}>Your quote</button>
        <div className="quote">{quote}</div>
        <div className="author">{author}</div>
        </div>
        </div>
        </div>
        
        </div>
    )
}
export default Quote;