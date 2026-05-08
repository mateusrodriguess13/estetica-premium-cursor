export function Footer() {
  return (
    <footer className="bg-matte-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white text-matte-black flex items-center justify-center font-display font-bold text-xs rounded-sm">
            E
          </div>
          <span className="font-display font-medium text-base tracking-tight text-white">
            Estética<span className="text-gray-500 font-normal">Premium</span>
          </span>
        </div>
        
        <div className="text-gray-500 text-sm font-light text-center md:text-left">
          © {new Date().getFullYear()} Estética Automotiva Premium. Todos os direitos reservados.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
