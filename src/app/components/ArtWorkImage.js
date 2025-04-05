import Image from 'next/image';

export default function ArtworkImage({ src, alt, className = "object-cover object-center" }) {
    return (
        <div className="relative w-full h-full">
            {/* Mobile view */}
            <div className="block md:hidden relative w-full h-full">
                <Image 
                    src={src} 
                    alt={alt || "Abstract artwork by Luis Kerch"} 
                    fill 
                    className="object-cover"
                    quality={100}
                    sizes="100vw"
                    priority
                />
            </div>
            
            {/* Desktop view with constrained size */}
            <div className="hidden md:block relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-3/4 lg:w-2/3 xl:w-1/2 aspect-[3/4]">
                        <Image 
                            src={src} 
                            alt={alt || "Abstract artwork by Luis Kerch"} 
                            fill 
                            className={`object-contain ${className.includes('object-right') ? 'object-right' : 'object-center'}`}
                            quality={100}
                            sizes="(max-width: 1200px) 75vw, 50vw"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}