export default function FirstPage() {
    return (
        <div className="min-h-screen px-4 py-6 md:px-8 lg:px-16">
            {/* Header with Email and Social Icons */}
            <header className="flex justify-between items-center py-20 px-4 md:px-24 lg:px-32">
                <a href="mailto:arte@luiskerch.com" 
                   className="font-jost text-sm md:text-base tracking-wider hover:opacity-70 transition-opacity">
                    arte@luiskerch.com
                </a>
                <div className="flex gap-4 items-center">
                    {/* Instagram Icon */}
                    <a href="https://www.instagram.com/luiskerchf/" target="_blank" rel="noopener noreferrer"
                       className="hover:opacity-70 transition-opacity">
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                    {/* Pinterest Icon */}
                    <a href="https://es.pinterest.com/pinturaa/_saved/" target="_blank" rel="noopener noreferrer"
                       className="hover:opacity-70 transition-opacity">
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.87-1.835l.437-1.664c.229.436.895.804 1.604.804 2.111 0 3.633-1.941 3.633-4.354 0-2.312-1.888-4.042-4.316-4.042-3.021 0-4.625 2.027-4.625 4.235 0 1.027.547 2.305 1.422 2.712.132.062.203.034.234-.094l.193-.793c.017-.071.009-.132-.049-.202-.288-.35-.521-.995-.521-1.597 0-1.544 1.169-3.038 3.161-3.038 1.72 0 2.924 1.172 2.924 2.848 0 1.894-.957 3.205-2.201 3.205-.687 0-1.201-.568-1.036-1.265.197-.833.58-1.73.58-2.331 0-.537-.288-.986-.89-.986-.705 0-1.269.73-1.269 1.708 0 .623.211 1.044.211 1.044s-.694 2.934-.821 3.479c-.142.605-.086 1.454-.025 2.008-2.603-1.02-4.448-3.553-4.448-6.518 0-3.866 3.135-7 7-7s7 3.134 7 7-3.135 7-7 7z"/>
                        </svg>
                    </a>
                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com/luis.kerch.3" target="_blank" rel="noopener noreferrer"
                       className="hover:opacity-70 transition-opacity">
                        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                        </svg>
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="mt-20 md:mt-32">
                <div className="max-w-2xl mx-auto">
                    {/* Title */}
                    <div className="mb-16 md:mb-24">
                        <h1 className="font-jost font-light text-5xl md:text-7xl tracking-[.25em] mb-8">
                            <span className="block mb-2">LUIS</span>
                            <span className="block">KERCH</span>
                        </h1>
                        <h2 className="font-jost font-light text-xl md:text-2xl tracking-[.25em]">
                            O B R A S
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-6 font-jost text-sm md:text-base leading-relaxed">
                        <p className="mb-8">
                            Kerch es un pintor plenairista. Organiza sus lienzos 
                            a modo de reverberaciones que activan nuestra 
                            imaginación dando luz a los paisajes que parecen 
                            conformar.
                        </p>
                        
                        <p className="mb-8">
                            Kerch actualmente vive 
                            entre Las Islas Canarias y Baja California. Es Licenciado en Bellas 
                            Artes por la Universidad de Miami, Florida. Estudió en 
                            Pratt Institute, Brooklyn, Nueva York, obteniendo, en 
                            1990, el título de Master of Science in Communication 
                            Design.
                        </p>

                        <p className="mb-8">
                            Sus imágenes son movedizas, oscilaciones 
                            de luz y color originadas por manchas traslúcidas. Sus 
                            motivos parecen no disolverse completamente para 
                            permanecer en un estado de perpetua disolución. Al 
                            igual que en Turner, en su obra la intensidad se funde 
                            con el instante.
                        </p>

                        <p>
                            Luis Kerch ha expuesto en EEUU., 
                            México, España, Reino Unido, Portugal y China. Entre 
                            sus exposiciones se encuentran The Mall Galleries de 
                            Londres, Centro Cultural de España en México y en 
                            el Instituto Cabrera Pinto del Gobierno de Canarias en 
                            2016 y 2011.
                        </p>
                    </div>
                </div>
            </main>

            {/* Page Number */}
            <footer className="mt-16 md:mt-24 flex justify-center items-center">
                <div className="w-px h-12 bg-current opacity-50 mb-4"></div>
                <p className="font-jost text-lg">2</p>
            </footer>
        </div>
    );
}