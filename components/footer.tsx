export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-[#333] py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                {/* Logo Area */}
                <div>
                    <span className="font-cormorant text-2xl font-bold tracking-widest text-[#ededed]">
                        LENG & ALBERT
                    </span>
                    <p className="font-montserrat text-[10px] text-[#666] uppercase tracking-widest mt-4 max-w-xs leading-relaxed">
                        Data-driven real estate strategies for Singapore's modern wealth builders.
                    </p>
                </div>

                {/* Links */}
                <div className="flex gap-16">
                    <div className="flex flex-col gap-4">
                        <span className="font-montserrat text-[10px] text-[#D4AF37] uppercase tracking-widest">Socials</span>
                        <a href="#" className="font-montserrat text-xs text-[#a3a3a3] hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="font-montserrat text-xs text-[#a3a3a3] hover:text-white transition-colors">Youtube</a>
                        <a href="#" className="font-montserrat text-xs text-[#a3a3a3] hover:text-white transition-colors">Facebook</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-montserrat text-[10px] text-[#D4AF37] uppercase tracking-widest">Legal</span>
                        <a href="#" className="font-montserrat text-xs text-[#a3a3a3] hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="font-montserrat text-xs text-[#a3a3a3] hover:text-white transition-colors">Terms</a>
                    </div>
                </div>

            </div>
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#1a1a1a] flex justify-between items-center text-[10px] text-[#444] font-montserrat uppercase tracking-widest">
                <span>&copy; 2026 Leng & Albert Property. All Rights Reserved.</span>
                <span>Designed for Wealth</span>
            </div>
        </footer>
    );
}
