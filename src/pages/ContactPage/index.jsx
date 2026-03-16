import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar"

const ContactPage=()=>{
    return(
        <>
        <Navbar/>
         <Contact/>
         <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>© 2026 MyShop | All Rights Reserved</p>
      </footer>

        </>
    )
}
export default ContactPage;