import Image from 'next/image';

export default function ArtworkImage({ src, alt, className = "object-contain object-center" }) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-5xl mx-auto">
                    <Image 
                        src={src} 
                        alt={alt || "Abstract artwork by Luis Kerch"} 
                        fill 
                        className={className} 
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 65vw"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}