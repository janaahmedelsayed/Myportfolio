import { useEffect } from "react"

export const Navbar=({menuOpen,setmenuOpen})=>{
    useEffect(()=>{
        document.body.style.overflow=menuOpen?"hidden":"";
    },[menuOpen]);
    return(
        <nav className="fixed top-0 w-full z-40 bg-[#f9f7f3] backdrop-blur-lg border-b border-white/10 shadow-lg" >
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
<a href="#home" className="font-mono text-xl font-bold text-[#f7a072]">
    {" "}
    jana <span className="text-[#f7a072]">Ahmed</span>{" "}
</a>
<div className="w-7 h-5 relative cursor-pointer z-40 md:hidden "  style={{ color: '#f7a072' }} onClick={()=>setmenuOpen((prev)=>!prev)}>
&#9776;
</div>
<div className="hidden md:flex items-center space-x-8">
    <a href="#home" className="text-[#f7a072] hover:text-[#0fa3b1] hover:underline hover:decoration-[#b5e2fa] hover:underline-offset-8 transition-colors">
        {" "}
        Home {" "}

    </a>
    <a href="#about" className="text-[#f7a072] hover:text-[#0fa3b1] hover:underline hover:decoration-[#b5e2fa] hover:underline-offset-8 transition-colors">
        {" "}
        About {" "}

    </a>
    <a href="#projects" className="text-[#f7a072] hover:text-[#0fa3b1] hover:underline hover:decoration-[#b5e2fa] hover:underline-offset-8 transition-colors">
        {" "}
        Projects {" "}

    </a>
    <a href="#contact" className="text-[#f7a072] hover:text-[#0fa3b1] hover:underline hover:decoration-[#b5e2fa] hover:underline-offset-8 transition-colors">
        {" "}
        Contact {" "}

    </a>

</div>
                </div>

            </div>

        </nav>
    )
}