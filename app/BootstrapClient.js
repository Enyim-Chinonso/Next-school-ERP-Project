 "use client";

 // @ts-ignore
//  import("bootstrap/dist/js/bootstrap.bundle.min.js");
//  import { useEffect } from "react";

//  export default function BootstrapClient() {
//    useEffect(() => {
// //     import("bootstrap/dist/js/bootstrap.bundle.min.js");
//    }, []);
//    return null;
//  }

// "use client";

// import { useEffect } from "react";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// export default function BootstrapClient() {
//   useEffect(() => {
//     // Bootstrap JS is loaded
//   }, []);
//   return null;
// }


// "use client";

// import { useEffect } from "react";

// export default function BootstrapClient() {
//   useEffect(() => {
//     import("bootstrap/dist/js/bootstrap.bundle.min.js"); // client-only
//   }, []);

//   return null;
// }


"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    // dynamically import Bootstrap JS only on the client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
