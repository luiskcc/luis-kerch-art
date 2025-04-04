import Image from 'next/image';

export default function ArtworkImage({ src, alt, className = "object-cover object-center" }) {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                    src={src} 
                    alt={alt || "Abstract artwork by Luis Kerch"} 
                    fill 
                    className={className} 
                    quality={100}
                    sizes="100vw"
                    priority
                />
            </div>
        </div>
    );
}