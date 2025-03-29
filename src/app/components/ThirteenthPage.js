import Image from 'next/image';
export default function ThirteenthPage() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden">
                    <Image 
                        src="/13.jpg" 
                        alt="Abstract artwork by Luis Kerch" 
                        fill 
                        className="object-cover scale-[1.4] object-center" 
                        quality={100}
                        sizes="100vw"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}