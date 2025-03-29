import Image from 'next/image';
export default function FourthPage() {
    return (
        <div className="relative w-full h-full bg-white">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                    <Image 
                        src="/3_2578.jpg" 
                        alt="Abstract artwork by Luis Kerch" 
                        className="object-cover sm:object-contain sm:object-center"
                        fill
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
