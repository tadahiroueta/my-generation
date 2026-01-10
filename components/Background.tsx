"use client";

import { useState } from "react";

export function Background() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="fixed -z-5 inset-0 pointer-events-none">
      <div className={"absolute -z-10 w-full h-30 bg-black" + (isLoaded ? " hidden" : "")} />
      <iframe
        src="https://www.youtube.com/embed/AMNyQds2ABQ?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&enablejsapi=1"
        className="absolute -z-20 top-0 left-0 w-[177.78vh] h-[56.25vh] min-w-full min-h-lvh"
        allow="autoplay; encrypted-media"
        onLoad={() => setTimeout(() => setIsLoaded(true), 3000)}
        title="Background Video"
      />
      <div 
        className="absolute inset-0 -z-10 w-full h-lvh"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0) 25%, 
            rgba(0,0,0,0) 75%, 
            rgba(0,0,0,1) 100%)`,
        }}
      />
      <div className={"absolute -z-10 bottom-0 w-full h-30 bg-black" + (isLoaded ? " hidden" : "")} />
    </div>
  );
}