import './App.css'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h1 data-testid="title" className="Title">
          Mock Service Worker
        </h1>
        <p data-testid="quote" className="Quote">
          Mock by intercepting requests on the network level. Seamlessly reuse
          the same mock definition for testing, development, and debugging.
        </p>
      </div>
    </div>
  )
}

export default App
