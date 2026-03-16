import About from "../../components/About";
import Navbar from "../../components/Navbar";
const AboutPage=()=>{
    return(
        <>
        <Navbar/>
        <About/>
         <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>© 2026 MyShop | All Rights Reserved</p>
      </footer>
        </>
    )
}
export default AboutPage;