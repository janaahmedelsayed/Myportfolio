import { RevealOnScroll } from "../RevealOnScroll";

export const About=()=>{
    const Technicalskills =[
    "React",
    "javascripts",
    "tailwind",
    "bootstrap",
    "python",
    "c++",
    "Redux","React Hooks"
    ];
    const Softskills=[
    "Team collaboration",
    "Problem-solving",
    "Adaptability",
    " Time management",
    "Effective communication ",
    "self Learning"
    ];
    return(
        <section className="min-h-screen flex items-center justify-center py-20" id="about">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 relative inline-block group cursor-pointer">
  <span className="bg-clip-text text-[#e29578] relative pb-1">
About    <span className="absolute bottom-0 left-0 h-[2px] bg-[#e29578] transition-all duration-300 w-3/4 group-hover:w-full cursor-pointer"></span>
  </span>
</h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4 text-[#e29578]">Technical skills</h3>
    <div className="flex flex-wrap gap-2">
        {Technicalskills.map((value,key)=>(
            <span key={key} className="bg-[#006d77] text-[#fff] py-1 px-3 rounded-full text-sm hover:bg-[#83c5be]
            hover:shadow-[0.2px_8px_[#83c5be]] transition"
            
            >{value}</span>
        ))}
    </div>

</div>
<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-4 text-[#e29578]">Soft skills</h3>
    <div className="flex flex-wrap gap-2">
        {Softskills.map((value,key)=>(
            <span key={key} className="bg-[#006d77] text-[#fff] py-1 px-3 rounded-full text-sm hover:bg-[#83c5be]
            hover:shadow-[0.2px_8px_[#83c5be]] transition"
            
            >{value}</span>
        ))}
    </div>

</div>
                </div>

                </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
<div className="p-6 rounded-xl border-[#e29578] border hover:-translate-y-1 transition-all">
<h3 className="text-xl font-bold mb-4 text-[#e29578]">Education</h3>
<ul className="list-disc list-inside text-[#006d77] space-y-2">
    <li>
        <strong>Benha university (Fourth Year - Very Good (GPA:3.384)) 
        </strong> Bachelor of Computer Science  (2022-2025)
    </li>
    <li>
   <strong> Relevant Coursework:</strong> Data Structures, Relational Databases, Computer Architecture, OOP, 
    Algorithms, Software Engineering ,cloud computing ,Iot and Operating Systems     </li>
</ul>
</div>
<div className="p-6 rounded-xl border-[#e29578] border hover:-translate-y-1 transition-all">
<h3 className="text-xl font-bold mb-4 text-[#e29578]">Work Experience</h3>
<div className="space-y-4 text-[#006d77]">
    <div >
<h4 className="font-semibold">Intern at NTI (Web designer) 2023-2024 </h4>

    </div>
    <div >
<h4 className="font-semibold">Intern at ITI (Web designer) 2023-2024 
</h4>

    </div>
    <div >
<h4 className="font-semibold">Python Training Benha university 2022-2023 

</h4>

    </div>
</div>
</div>
</div>
            </div>
            </RevealOnScroll>
        </section>
    )
}