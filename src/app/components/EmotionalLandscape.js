export default function EmotionalLandscape() {
    return (
        <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
            <div className="max-w-4xl w-full aspect-video">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/4Q11LEMnzgY?autoplay=1"
                    title="Luis Kerch Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>  
        </div>
    );
}