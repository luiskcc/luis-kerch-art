import Image from 'next/image';
export default function SecondPage() {
    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                    src="/2_DSC1319-3.jpg" 
                    alt="Concrete stairs with light" 
                    fill 
                    className="object-cover object-right sm:object-contain sm:object-center" 
                    quality={100}
                    sizes="100vw"
                    priority
                />
            </div>
        </div>
    );
}