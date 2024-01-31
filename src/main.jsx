import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// function getAIRes(ingredients) {
//   getAIResult(ingredients) // api method
//    .then(res => res.json())
//    .then(recipies => displayRecipies(recipies))
//    .catch(error => console.error("error : ", error))
// } 



