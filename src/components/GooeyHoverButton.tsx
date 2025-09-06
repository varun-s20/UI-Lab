// "use client";
// import React, { useState } from "react";
// import { motion, useAnimationControls } from "framer-motion";

// const darkBlue = "#183a08";
// const actionGreen = "#a3e635";

// // Burst anchor points relative to button
// const TL_BURST = { x: -28, y: -32 };
// const BR_BURST = { x: 28, y: 32 };

// // Triangle offsets for split bubbles
// const triOffsetsTL = [
//   { x: 0, y: -10, size: 16 },
//   { x: -12, y: 4, size: 12 },
//   { x: 12, y: 4, size: 12 },
// ];
// const triOffsetsBR = [
//   { x: 0, y: 10, size: 16 },
//   { x: -12, y: -4, size: 12 },
//   { x: 12, y: -4, size: 12 },
// ];

// const GooeyHoverButton: React.FC = () => {
//   const [hovered, setHovered] = useState(false);

//   // Controls
//   const buttonCtrl = useAnimationControls();
//   const effectCtrl = useAnimationControls();
//   const mainTL = useAnimationControls();
//   const mainBR = useAnimationControls();
//   const splitTL = useAnimationControls();
//   const splitBR = useAnimationControls();

//   const bounceButton = () => {
//     buttonCtrl.start({
//       scale: [1, 0.96, 1.08, 1],
//       transition: { duration: 0.36, times: [0, 0.35, 0.7, 1], ease: "easeOut" },
//     });
//     effectCtrl.start({
//       scaleX: [1, 0.95, 1.03, 1],
//       scaleY: [1, 0.9, 1.05, 1],
//       transition: { duration: 0.36, times: [0, 0.35, 0.7, 1], ease: "easeOut" },
//     });
//   };

//   const runBurst = async () => {
//     // Phase 1: Detach both main bubbles simultaneously
//     await Promise.all([
//       mainTL.start({
//         x: [0, TL_BURST.x * 0.45, TL_BURST.x],
//         y: [0, TL_BURST.y * 0.45, TL_BURST.y],
//         scaleX: [1, 1.18, 1],
//         scaleY: [1, 0.92, 1],
//         opacity: 1,
//         transition: { duration: 0.52, times: [0, 0.5, 1], ease: "easeOut" },
//       }),
//       mainBR.start({
//         x: [0, BR_BURST.x * 0.45, BR_BURST.x],
//         y: [0, BR_BURST.y * 0.45, BR_BURST.y],
//         scaleX: [1, 1.18, 1],
//         scaleY: [1, 0.92, 1],
//         opacity: 1,
//         transition: { duration: 0.52, times: [0, 0.5, 1], ease: "easeOut" },
//       }),
//     ]);

//     // Bounce only once
//     bounceButton();

//     // Phase 2: Both main bubbles pop & split bubbles appear simultaneously
//     mainTL.start({
//       scale: [1, 1.2, 0],
//       opacity: [1, 1, 0],
//       transition: { duration: 0.26, ease: [0.34, 1.56, 0.64, 1] },
//     });
//     mainBR.start({
//       scale: [1, 1.2, 0],
//       opacity: [1, 1, 0],
//       transition: { duration: 0.26, ease: [0.34, 1.56, 0.64, 1] },
//     });

//     // Reset split bubbles at burst points
//     splitTL.set({ x: TL_BURST.x, y: TL_BURST.y, scale: 0, opacity: 0 });
//     splitBR.set({ x: BR_BURST.x, y: BR_BURST.y, scale: 0, opacity: 0 });

//     splitTL.start((i: number) => ({
//       x: TL_BURST.x + triOffsetsTL[i].x,
//       y: TL_BURST.y + triOffsetsTL[i].y,
//       scale: [0, 1, 0],
//       opacity: [0, 1, 0],
//       transition: { duration: 0.9, times: [0, 0.25, 1], ease: "easeOut" },
//     }));
//     splitBR.start((i: number) => ({
//       x: BR_BURST.x + triOffsetsBR[i].x,
//       y: BR_BURST.y + triOffsetsBR[i].y,
//       scale: [0, 1, 0],
//       opacity: [0, 1, 0],
//       transition: { duration: 0.9, times: [0, 0.25, 1], ease: "easeOut" },
//     }));
//   };

//   const onEnter = () => {
//     setHovered(true);
//     buttonCtrl.start({
//       backgroundColor: actionGreen,
//       color: "#fff",
//       transition: { duration: 0.15 },
//     });
//     runBurst();
//   };

//   const resetAll = () => {
//     mainTL.set({ x: 0, y: 0, scale: 1, opacity: 1 });
//     mainBR.set({ x: 0, y: 0, scale: 1, opacity: 1 });
//     splitTL.set({ x: 0, y: 0, scale: 0, opacity: 1 });
//     splitBR.set({ x: 0, y: 0, scale: 0, opacity: 1 });
//     effectCtrl.set({ scaleX: 1, scaleY: 1 });
//   };

//   const onLeave = () => {
//     setHovered(false);
//     buttonCtrl.start({
//       scale: 1,
//       backgroundColor: darkBlue,
//       color: "#fff",
//       transition: { duration: 0.2 },
//     });
//     resetAll();
//   };

//   const currentColor = hovered ? actionGreen : darkBlue;

//   return (
//     <div className="relative grid place-items-center h-96">
//       {/* Gooey filter */}
//       <svg xmlns="http://www.w3.org/2000/svg" className="absolute w-px h-px opacity-0">
//         <defs>
//           <filter id="goo">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
//               result="goo"
//             />
//             <feComposite in="SourceGraphic" in2="goo" />
//           </filter>
//         </defs>
//       </svg>

//       <span className="relative inline-block [filter:url(#goo)]">
//         {/* Button */}
//         <motion.button
//           type="button"
//           onHoverStart={onEnter}
//           onHoverEnd={onLeave}
//           animate={buttonCtrl}
//           className="relative z-20 px-10 py-5 text-sm tracking-widest font-medium rounded-lg shadow-md"
//           style={{ backgroundColor: darkBlue, color: "#fff" }}
//         >
//           Hover me
//         </motion.button>

//         {/* Effect overlay */}
//         <motion.span
//           className="pointer-events-none absolute inset-0 z-10"
//           animate={effectCtrl}
//           style={{
//             borderRadius: 12,
//             background: currentColor,
//           }}
//         />

//         {/* Bubble layer */}
//         <span className="pointer-events-none absolute inset-0 z-0">
//           {/* TOP-LEFT main bubble */}
//           <motion.span
//             animate={mainTL}
//             className="absolute rounded-full"
//             style={{
//               width: 28,
//               height: 28,
//               top: "0%",
//               left: "0%",
//               background: currentColor,
//               transformOrigin: "left top",
//             }}
//             initial={{ opacity: 0 }}
//           />
//           {/* TOP-LEFT split */}
//           {triOffsetsTL.map((o, i) => (
//             <motion.span
//               key={`tl-split-${i}`}
//               custom={i}
//               animate={splitTL}
//               className="absolute rounded-full"
//               style={{
//                 width: o.size,
//                 height: o.size,
//                 top: "0%",
//                 left: "0%",
//                 background: currentColor,
//               }}
//               initial={{ scale: 0, opacity: 0 }}
//             />
//           ))}

//           {/* BOTTOM-RIGHT main bubble */}
//           <motion.span
//             animate={mainBR}
//             className="absolute rounded-full"
//             style={{
//               width: 28,
//               height: 28,
//               bottom: "0%",
//               right: "0%",
//               background: currentColor,
//               transformOrigin: "right bottom",
//             }}
//             initial={{ opacity: 0 }}
//           />
//           {/* BOTTOM-RIGHT split */}
//           {triOffsetsBR.map((o, i) => (
//             <motion.span
//               key={`br-split-${i}`}
//               custom={i}
//               animate={splitBR}
//               className="absolute rounded-full"
//               style={{
//                 width: o.size,
//                 height: o.size,
//                 bottom: "0%",
//                 right: "0%",
//                 background: currentColor,
//               }}
//               initial={{ scale: 0, opacity: 0 }}
//             />
//           ))}
//         </span>
//       </span>
//     </div>
//   );
// };

// export default GooeyHoverButton;
