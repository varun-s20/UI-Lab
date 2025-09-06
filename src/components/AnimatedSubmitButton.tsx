// "use client";
// import React, { useState } from "react";
// import { motion, useAnimationControls } from "framer-motion";

// const AnimatedSubmitButton = () => {
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showCheck, setShowCheck] = useState(false);

//   const buttonControls = useAnimationControls();
//   const progressControls = useAnimationControls();
//   const checkControls = useAnimationControls();

//   const runSequence = async () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setShowCheck(false);

//     // Reset check
//     await checkControls.start({
//       opacity: 0,
//       pathLength: 0,
//       transition: { duration: 0 },
//     });

//     // Step 1: Button shrinks into pill
//     await buttonControls.start({
//       height: 10,
//       width: 300,
//       borderRadius: 100,
//       backgroundColor: "#183a08",
//       transition: { duration: 1.3, ease: "easeInOut" },
//     });

//     // Step 2: Progress bar grows outward from center
//     await progressControls.start({
//       width: 300,
//       x: "-50%",
//       transition: { duration: 2, ease: "linear" },
//     });

//     // Step 3: Button collapses away
//     await buttonControls.start({
//       width: 0,
//       transition: { duration: 0.001 },
//     });

//     // Step 4: Progress bar morphs into circle
//     await progressControls.start({
//       width: 50,
//       height: 50,
//       borderRadius: 80,
//       backgroundColor: "#a3e635",
//       x: "-50%",
//       transition: { delay: 0.5, duration: 0.75, ease: "easeInOut" },
//     });

//     // Step 5: Show checkmark
//     setShowCheck(true);
//     await checkControls.start({ opacity: 1, transition: { duration: 0.1 } });
//     await checkControls.start({
//       pathLength: 1,
//       transition: { duration: 0.3, ease: "easeInOut" },
//     });

//     // Hold success
//     await new Promise((r) => setTimeout(r, 800));

//     // Step 6: Reset
//     setShowCheck(false);
//     await progressControls.start({
//       width: 0,
//       height: 10,
//       borderRadius: 200,
//       x: "-50%",
//       transition: { duration: 0.2 },
//     });
//     await buttonControls.start({
//       height: 60,
//       width: 140,
//       borderRadius: 8,
//       backgroundColor: "#183a08",
//       transition: { duration: 0.2 },
//     });

//     setIsAnimating(false);
//   };

//   return (
//     <div className="relative grid place-items-center h-96">
//       {/* Button */}
//       <motion.div
//         className="absolute cursor-pointer select-none flex items-center justify-center overflow-hidden"
//         style={{ borderRadius: 8, backgroundColor: "#183a08" }}
//         animate={buttonControls}
//         initial={{
//           height: 60,
//           width: 140,
//           borderRadius: 8,
//           backgroundColor: "#183a08",
//         }}
//         onClick={runSequence}
//       >
//         {/* Text */}
//         <motion.div
//           className="relative z-20 px-10 py-5 text-sm tracking-widest  font-medium rounded-lg"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: isAnimating ? 0 : 1 }}
//           transition={{ duration: 0.2 }}
//         >
//           <span className="">Submit</span>
//         </motion.div>
//       </motion.div>

//       {/* Progress bar (independent of button) */}
//       <motion.div
//         className="absolute left-1/2 top-1/2 -translate-y-1/2"
//         style={{
//           height: 10,
//           width: 0,
//           borderRadius: 200,
//           background: "#a3e635",
//         }}
//         animate={progressControls}
//         initial={{ width: 0, height: 10, borderRadius: 200, x: "-50%" }}
//       />

//       {showCheck && (
//         <motion.svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2"
//           fill="none"
//         >
//           <motion.path
//             d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
//             stroke="#1D1F20"
//             strokeWidth={3.5}
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             initial={{ pathLength: 0 }}
//             animate={{ pathLength: 1 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           />
//         </motion.svg>
//       )}
//     </div>
//   );
// };

// export default AnimatedSubmitButton;
