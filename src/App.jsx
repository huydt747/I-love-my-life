import { Outlet } from "react-router-dom"
import Header from "./components/header";
import Footer from "./components/footer";

const App=()=>{
  return(
      <>
      <Header />
      <div className="wrapper">
        <Outlet />
      </div>
      <Footer />
      </>
  )
}  

export default App
