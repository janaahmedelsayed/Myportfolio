import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 relative inline-block group cursor-pointer">
  <span className="bg-clip-text text-[#e29578] relative pb-1">
    Featured projects
    <span className="absolute bottom-0 left-0 h-[2px] bg-[#e29578] transition-all duration-300 w-3/4 group-hover:w-full cursor-pointer"></span>
  </span>
</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#e29578] hover:shadow-[0_0_10px_#e29578] transition">
              <h3 className="text-[#e29578]">Gozor (Virtual Farm Platform)</h3>
              <p className="text-[#006d77] mb-4">
                Developed a responsive React-based platform enabling urban users to remotely monitor and manage farmland with live 
                data on soil conditions and crop growth.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["react", "React Hooks", "bootsrap", "Real-Time Systems", "JWT", "REST APIs"].map((value, key) => (
                  <span
                    key={key}
                    className="bg-[#006d77] text-white py-1 px-3 rounded-full text-sm hover:bg-[#83c5be] hover:shadow-[0_0_10px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#e29578] hover:shadow-[0_0_10px_#e29578] transition">
              <h3 className="text-[#e29578]">furniture website </h3>
              <p className="text-[#006d77] mb-4">
              Developed the client-side interface for a responsive furniture e-commerce platform, ensuring seamless user experience 
              and alignment with backend functionality.               </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "Bootstrap","Javascript"].map((value, key) => (
                  <span
                    key={key}
                    className="bg-[#006d77] text-white py-1 px-3 rounded-full text-sm hover:bg-[#83c5be] hover:shadow-[0_0_10px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-[#e29578] hover:shadow-[0_0_10px_#e29578] transition">
              <h3 className="text-[#e29578]">OneTech-E-commerce</h3>
              <p className="text-[#006d77] mb-4">
              Developed a full-featured e-commerce website specializing in electronics, with product listings, 
    shopping cart functionality, and user authentication. Implemented responsive design principles 
    to ensure seamless browsing across all devices.              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS3", "Bootstrap ","javascript"].map((value, key) => (
                  <span
                    key={key}
                    className="bg-[#006d77] text-white py-1 px-3 rounded-full text-sm hover:bg-[#83c5be] hover:shadow-[0_0_10px_rgba(59,130,246,0.1)] transition-all cursor-pointer"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};