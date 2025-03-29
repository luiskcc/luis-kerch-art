import Image from 'next/image';
export default function EighthPage() {
    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                    src="/8.jpg" 
                    alt="Concrete stairs with light" 
                    fill 
                    className="object-cover sm:object-contain sm:object-center" 
                    quality={100}
                    sizes="100vw"
                    priority
                />
            </div>
        </div>
    );
}