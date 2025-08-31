import { RouterProvider } from 'react-router-dom'
import './App.css'
import { MyRouter } from './router/Router'
import useWindowSize from './hooks/useWindowSize'
import { IoMdInformationCircleOutline } from 'react-icons/io'

function App() {

  const { isTabletandMobile } = useWindowSize()
  // if (isTabletandMobile) {
  //   return (
  //     <section className=" h-screen flex items-center justify-center">
  //       <div className=' flex items-center gap-2 text-blue-500'><IoMdInformationCircleOutline/> Open App on your laptop or desktop</div>
  //     </section>
  //   )
  // }

  // return (
  //   <section className=" h-screen flex items-center justify-center">
  //     <div className=" flex items-center gap-2 text-red-500">
  //       <IoMdInformationCircleOutline /> Not available.
  //     </div>
  //   </section>
  // )
  return (
    <>
    <RouterProvider router={MyRouter}/>
    </>
  )
}

export default App
