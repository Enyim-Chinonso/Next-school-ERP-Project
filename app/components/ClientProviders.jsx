// // app/components/ClientProviders.jsx
// "use client";

// import { useEffect } from "react";
// import LenisProvider from "./LenisProvider";

// // Import Bootstrap JS only in client-side
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// export default function ClientProviders({ children }) {
//   useEffect(() => {
//     console.log("✅ Client-side initialized (Bootstrap JS + Lenis ready)");
//   }, []);

//   return <LenisProvider>{children}</LenisProvider>;
// }



// app/components/ClientProviders.jsx
// "use client";

// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function ClientProviders({ children }) {
//   useEffect(() => {
//     // ✅ Load Bootstrap JS only in the browser
//     import("bootstrap/dist/js/bootstrap.bundle.min.js")
//       .then(() => console.log("✅ Bootstrap JS loaded on client"))
//       .catch((err) => console.error("❌ Bootstrap JS failed:", err));

//     // Register GSAP plugin
//     gsap.registerPlugin(ScrollTrigger);

//     // Init Lenis
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smoothWheel: true,
//       smoothTouch: false,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }
//     requestAnimationFrame(raf);

//     lenis.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         return arguments.length
//           ? lenis.scrollTo(value)
//           : lenis.scroll.instance.scroll;
//       },
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//     });

//     ScrollTrigger.addEventListener("refresh", () => lenis.update());
//     ScrollTrigger.refresh();

//     return () => {
//       lenis.destroy();
//       ScrollTrigger.kill();
//     };
//   }, []);

//   return <>{children}</>;
// }





"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClientProviders({ children }) {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    // RAF loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync GSAP ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
