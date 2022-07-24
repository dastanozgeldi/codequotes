import { useEffect, useState } from 'react'
import "./App.css";
import Footer from "./components/Footer"

function App() {
  const [quote, setQuote] = useState({})

  const getQuote = () => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
      .then(res => res.json())
      .then(data => setQuote(data))
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div className="App">
      <div className="quote">
        <h1>{quote.en}</h1>
        <p>~ {quote.author}</p>
        <button onClick={getQuote}>Get a New One</button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
