import React from "react";

function CardFACEBOOK() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {/* Card 1: Video */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border p-2 max-w-xl w-full mx-auto">
                <div className="aspect-[1/1.0] w-full">
                    <iframe
                       src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fshivatruck.parts.1%2Fvideos%2F1080583660623038%2F&show_text=true&width=560&t=0"
                        className="w-full h-full"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        title="Facebook Post"
                    />
                </div>
            </div>
            

            {/* Card 2: Post */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border p-2 max-w-xl w-full mx-auto">
                <div className="aspect-[1/1.0] w-full">
                    <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/shivatruck.parts.1/posts/pfbid022KayMMtYzBE9YtVj7dL8g6cpZQ7phnt7k6ATMNuXnJu48ATQPxMF8d5zbfv72oY9l&show_text=true"
                        className="w-full h-full"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        allowFullScreen
                        title="Facebook Post"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardFACEBOOK;
