// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

// /**
//  * LenisProvider mounts Lenis once on the client and keeps
//  * the requestAnimationFrame loop running until unmount.
//  * It simply renders {children} so you can wrap your whole app.
//  */
// export default function LenisProvider({ children }) {
//   useEffect(() => {
//     // 1) Create Lenis instance
//     const lenis = new Lenis({
//       // Feel free to tweak these:
//       duration: 1.1,       // how “soft” the scroll feels
//       smoothWheel: true,   // smooth mouse wheel
//       smoothTouch: false,  // usually keep touch native
//     });

//     // 2) Hook Lenis into RAF
//     let rafId;
//     const raf = (time) => {
//       lenis.raf(time);
//       rafId = requestAnimationFrame(raf);
//     };
//     rafId = requestAnimationFrame(raf);

//     // 3) Cleanup on unmount
//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//     };
//   }, []);

//   return children;
// }


// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register plugin once
// gsap.registerPlugin(ScrollTrigger);

// export default function LenisProvider({ children }) {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.1,
//       smoothWheel: true,
//       smoothTouch: false,
//     });

//     let rafId;
//     const raf = (time) => {
//       lenis.raf(time);
//       ScrollTrigger.update(); // <- keep ScrollTrigger in sync
//       rafId = requestAnimationFrame(raf);
//     };
//     rafId = requestAnimationFrame(raf);

//     // Connect Lenis with ScrollTrigger
//     ScrollTrigger.scrollerProxy(document.body, {
//       scrollTop(value) {
//         return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll;
//       },
//       getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//       },
//     });

//     // sync GSAP ScrollTrigger with lenis
//     lenis.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.addEventListener("refresh", () => lenis.raf(0));
//     ScrollTrigger.refresh();

//     return () => {
//       cancelAnimationFrame(rafId);
//       lenis.destroy();
//       ScrollTrigger.kill();
//     };
//   }, []);

//   return children;
// }



"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function LenisProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);          // run Lenis on each frame
      ScrollTrigger.update();   // keep ScrollTrigger in sync
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Connect Lenis with GSAP's ScrollTrigger
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value); // programmatically set scroll
        } else {
          return window.scrollY; // current scroll position
        }
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // Sync GSAP when Lenis scrolls
    lenis.on("scroll", ScrollTrigger.update);

    // Refresh ScrollTrigger after setup
    ScrollTrigger.addEventListener("refresh", () => {
      ScrollTrigger.update();
    });
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return children;
}
