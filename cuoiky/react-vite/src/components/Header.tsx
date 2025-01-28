import {Link} from "react-router-dom"

const Header=()=>{
    return (
        <>
            <nav className="bg-lime-200 rounded-lg w-45 flex gap-9 p-4 ">
                <Link to="/home" className="hover:bg-teal-200 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-lg shadow-xl ">
                    Home
                </Link>
                <Link to="/about" className="hover:bg-teal-200 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-lg shadow-xl">About me</Link>
                <Link to="/project" className="hover:bg-teal-200 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-lg shadow-xl">Project</Link>
                <Link to="/skill" className="hover:bg-teal-200 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-lg shadow-xl">Skill</Link>
                <Link to="/contact" className="hover:bg-teal-200 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-lg shadow-xl">Contact</Link>
                <Link to="/experience" className="hover:bg-teal-200 active:bg-orange-500 focus:outline-none focus:ring focus:ring-violet-300 p-2 rounded-lg shadow-xl">Experience</Link>
              
            </nav>
        </>
        
    )
}
export default Header