import { RouterProvider } from 'react-router-dom'
import './App.css'
import { MyRouter } from './router/Router'

function App() {

  return (
    <>
    <RouterProvider router={MyRouter}/>
    </>
  )
}

export default App
