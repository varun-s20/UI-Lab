"use client";
import React, { useState } from "react";
import { Clipboard, ClipboardCheck, TerminalSquare } from "lucide-react";
import Image from "next/image";

interface ButtonContainerProps {
  children: React.ReactNode;
  buttonCode: string;
}

const ButtonContainer = ({ children, buttonCode }: ButtonContainerProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(buttonCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="group relative w-[300px] h-[250px] bg-card border border-gray-700 rounded-lg p-6 flex items-center justify-center hover:border-gray-600 transition-colors">
      {/* Copy button - visible on hover */}
      <button
        onClick={copyToClipboard}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-600"
      >
        {copied ? (
          <ClipboardCheck className="w-4 h-4 text-primary" />
        ) : (
          <Clipboard className="w-4 h-4 text-gray-300" />
        )}
      </button>

      {/* Button content */}
      {children}
    </div>
  );
};

const Buttons = () => {
  // Individual button code snippets
  const slideInButtonCode = `<button
  className="
    relative isolate select-none cursor-pointer
    bg-transparent py-3 px-5 touch-manipulation
    text-base font-bold text-[#16181d] tracking-wider
    border-2 border-white outline-none 
    md:px-10 after:absolute after:w-full after:h-full
    after:bg-[#a3e635] after:-z-10
    after:top-[7px] after:left-[7px]
    after:transition-all after:duration-200
    hover:after:top-0 hover:after:left-0 uppercase"
>
  Slide In
</button>`;

  const aiButtonCode = `<button
  className="group relative h-[68px] w-[68px] rounded-xl border border-transparent 
     flex items-center justify-center cursor-pointer 
     bg-gradient-to-br from-[#3a5f0b] to-[#2d4708] 
     shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15),0_30px_60px_-30px_rgba(0,0,0,0.3),inset_0_-2px_6px_rgba(52,52,52,0.35)] 
     transition-transform duration-200 active:scale-95"
  role="button"
>
  <svg
    className="absolute z-10 text-[#9eff00] 
       top-[6px] left-[6px] h-[24px] w-[24px] 
       transition-all duration-300 
       animate-pulse
       group-hover:h-[44px] group-hover:w-[44px] 
       group-hover:left-[11px] group-hover:top-[12px] 
       group-hover:text-white"
    stroke="none"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
    ></path>
  </svg>
  <span className="text-[36px] font-extrabold leading-none text-white transition-opacity duration-200 group-hover:opacity-0">
    AI
  </span>
</button>`;

  const jelloButtonCode = `<>
  <style>{\`
    @keyframes jello-horizontal {
      0% { transform: scale3d(1, 1, 1); }
      30% { transform: scale3d(1.25, 0.75, 1); }
      40% { transform: scale3d(0.75, 1.25, 1); }
      50% { transform: scale3d(1.15, 0.85, 1); }
      65% { transform: scale3d(0.95, 1.05, 1); }
      75% { transform: scale3d(1.05, 0.95, 1); }
      100% { transform: scale3d(1, 1, 1); }
    }
  \`}</style>

  <button
              className="
            relative w-[150px] h-[55px] rounded-[45px] border-none
            bg-[#975fff] text-shadow-red-900 text-shadow-sm text-white font-medium cursor-pointer
            flex items-center justify-center shadow-lg
            shadow-white/30
            before:content-[''] before:absolute before:w-[70%] before:h-[3px]
            before:bg-[rgba(255,255,255,0.5)] before:blur-[2px]
            before:top-[6px] before:rounded-full
            after:content-[''] after:absolute after:w-[70%] after:h-[3px]
            after:bg-[rgba(255,255,255,0.2)] after:blur-[2px]
            after:bottom-[6px] after:rounded-full
            hover:animate-[jello-horizontal_0.9s_both]
          "
            >
              Candy crush
            </button>
</>`;

  const playStoreCode = `<button
            type="button"
            className="
        relative
        inline-flex
        items-center
        justify-center
        rounded-lg
        overflow-hidden
        shadow-lg
        hover:shadow-xl
        transition-shadow
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-green-500
        p-1
      "
          >
            <Image
              width={120}
              height={60}
              className="h-[60px] w-auto object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play Store"
            />
          </button>`;

  const downloadCode = `<button
            type="button"
            className="
        relative flex items-center font-medium text-[17px] 
        px-5 py-3 text-white bg-[#675c9c] rounded-lg
        shadow-[0_0.7em_1.5em_-0.5em_rgba(59,48,78,0.527)]
        hover:shadow-[0_0.5em_1.5em_-0.5em_rgba(88,71,116,0.627)]
        active:shadow-[0_0.3em_1em_-0.5em_rgba(88,71,116,0.627)]
        before:content-[''] before:absolute before:left-0 before:top-[30%]
        before:w-[4px] before:h-[40%] before:bg-white
        before:rounded-tr-md before:rounded-br-md
        before:transition-all before:duration-200
        hover:before:h-[60%] hover:before:top-[22%]
        after:content-[''] after:absolute after:right-0 after:top-[30%]
        after:w-[4px] after:h-[40%] after:bg-white
        after:rounded-tl-md after:rounded-bl-md
        after:transition-all after:duration-200
        hover:after:h-[60%] hover:after:top-[22%] 
      "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512"
              className="mr-2 w-[25px] fill-white"
            >
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
            </svg>
            <span>Download</span>
          </button>`;

  const valorantCode = `<button
            type="button"
            className="
        relative inline-block px-10 py-4 text-[16px] font-bold text-white
        border-3 border-[#fc4664] bg-transparent overflow-hidden z-0
        font-sans cursor-pointer
        before:content-[''] before:absolute before:top-0 before:left-0
        before:w-full before:h-full before:bg-[#fc4664]
        before:-z-10 before:transform before:-translate-x-full
        before:transition-all before:duration-300
        hover:before:translate-x-0
      "
          >
            Valorant
          </button>`;

  const amongUsCode = `<button
            type="button"
            className="
        relative flex items-center justify-center gap-2 px-5
        text-white font-semibold text-[17px] tracking-wide
        border-2 border-black rounded-full bg-yellow-400
        overflow-hidden cursor-pointer select-none
        transition-transform duration-500 ease-in-out
        active:scale-90
        group
      "
          >
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="38px"
              height="36px"
              className="
          z-20 transition-transform duration-500 ease-in-out
          group-hover:scale-300 group-hover:translate-x-12"
            >
              <rect width="36" height="36" x="0" y="0" fill="transparent"></rect>
              <path
                fill="#e53935"
                d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
              ></path>
              <path
                fill="#b71c1c"
                d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
              ></path>
              <path
                fill="#212121"
                d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
              ></path>
              <path
                fill="#01579b"
                d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
              ></path>
              <path
                fill="#212121"
                d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
              ></path>
              <path
                fill="#81d4fa"
                d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
              ></path>
              <path
                fill="#212121"
                d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
              ></path>
              <path
                fill="#e1f5fe"
                d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
              ></path>
            </svg>

            {/* Sliding "now!" text */}
            <span
              className="
          absolute left-0 z-20 transform -translate-x-full
          transition-transform duration-300 ease-in-out
          group-hover:translate-x-2 group-hover:delay-100
          drop-shadow-[0_1px_1px_rgba(0,0,0,1)]
        "
            >
              now!
            </span>

            {/* Sliding "play" text */}
            <span
              className="
          z-20 transition-transform duration-300 ease-in-out
          group-hover:translate-x-[200%] group-hover:delay-100
          drop-shadow-[0_1px_1px_rgba(0,0,0,1)]
        "
            >
              Play
            </span>
          </button>`;

  const socialsCode = `<>
            {/* Hidden clipPath SVG */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
                </clipPath>
              </defs>
            </svg>

            <div className="relative">
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>

              {/* Button container */}
              <div className="relative flex items-end gap-2 p-2">
                {/* GitHub */}
                <div className="relative">
                  <div
                    style={{ clipPath: "url(#squircleClip)" }}
                    className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="relative">
                  <div
                    style={{ clipPath: "url(#squircleClip)" }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>

                {/* YouTube */}
                <div className="relative">
                  <div
                    style={{ clipPath: "url(#squircleClip)" }}
                    className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                </div>

                {/* Twitter */}
                <div className="relative">
                  <div
                    style={{ clipPath: "url(#squircleClip)" }}
                    className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg border border-indigo-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>`;

  const learnMoreCode = `<button className="relative inline-block w-48 cursor-pointer outline-none border-0 align-middle text-left bg-transparent p-0 font-inherit">
            {/* Circle with arrow */}
            <span className="relative block w-12 h-12 bg-[#a3e635] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
              <span className="absolute top-1/2 left-4 w-4 h-[2px] bg-black -translate-y-1/2 transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-2">
                {/* Arrowhead */}
                <span className="absolute top-[-4.5px] right-[1px] w-2.5 h-2.5 border-t-[2px] border-r-[2px] border-black rotate-45"></span>
              </span>
            </span>

            {/* Button text */}
            <span className="absolute top-0 left-0 right-0 bottom-0 ml-7 py-3 text-[#fff] font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-black">
              Learn More
            </span>
          </button>`;

  const welcomeCode = `<button className="relative flex flex-col items-center justify-center w-[130px] h-[130px] border-4 border-black rounded-[12px] bg-[#057702] shadow-[4px_4px_0_#000] overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1)] hover:translate-[-4px_-4px] hover:shadow-[8px_8px_0_#000] active:translate-[2px_2px] active:shadow-[2px_2px_0_#000] group">

              {/* Logo */}
              <div className="absolute top-4 left-4 w-[90px] h-[90px] rounded-full bg-[#0f1715] flex items-center justify-center shadow-lg z-20 transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:animate-spin group-hover:w-[60px] group-hover:h-[60px] group-hover:top-[12%] group-hover:left-[25%]">
                  <TerminalSquare className="text-primary h-8 w-12" />
              </div>

              {/* Text */}
              <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:opacity-100 group-hover:translate-y-2 z-20">
                <span className="text-[13px] font-medium text-white/80">
                  Welcome to
                </span>
                <span className="text-[16px] font-extrabold uppercase tracking-[0.8px] text-[#d6cbbf]">
                  UI Lab
                </span>
              </div>
            </button>`;

  const tabSenseCode = `<button
            className="group relative cursor-pointer outline-none border-none rounded-full flex items-center justify-center h-12 w-12 
                 hover:w-[115px] transition-all duration-[750ms] text-white scale-110"
          >
            {/* Background pseudo-element replacement */}
            <span
              className="absolute inset-0 rounded-full 
                       bg-[linear-gradient(130deg,#7209d4,#141F2D_90%,#00a5b2)] 
                       ring-2 ring-[#141F2D] ring-offset-4 ring-offset-[#141F2D]/60 
                       transition-transform duration-300 transform scale-100 group-hover:scale-105 group-active:scale-95"
            ></span>

            {/* SVG Icon */}
            <img
              src="/tabsenselogo.png" // path relative to public folder
              alt="Github"
              className="absolute left-2 w-8 h-8 z-10 transition-all duration-300 group-hover:left-2 group-active:left-[10px]"
            />

            {/* Text */}
            <span
              className="absolute right-1.5 text-[15px] font-semibold w-[calc(100%-48px)] max-w-[calc(100%-48px)] overflow-hidden flex items-center justify-end 
                   -z-1 opacity-0 group-hover:opacity-100 group-hover:z-10 text-transparent group-hover:text-white
                   transition-all duration-[300ms] group-active:scale-85 group-active:right-2"
            >
              TabSense
            </span>
          </button>`;

  const knotsLoopsCode = `<button className="relative h-[140px] flex items-end bg-none border-none outline-none group">
            {/* Light Holder */}
            <div className="absolute h-[150px] w-[250px] flex flex-col items-center">
              {/* Dot */}
              <div className="absolute top-0 w-[10px] h-[10px] bg-[#4B4B4B] rounded-full z-20 transition-colors duration-500 group-hover:bg-[#E7DFD8]"></div>

              {/* Triangular Beam that grows from the dot */}
              <div
                className="absolute top-0 w-[350px] h-[100px] origin-top scale-y-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-y-100 group-hover:opacity-100"
                style={{
                  clipPath: "polygon(50% 0%, 25% 100%, 75% 100%)",
                  background:
                    "linear-gradient(180deg, rgba(248,243,238,1) 0%, rgba(248,243,238,0.4) 50%, rgba(248,243,238,0) 100%)",
                }}
              ></div>
            </div>

            {/* Button Holder */}
            <div className="flex flex-col items-center justify-center h-[100px] w-[250px] rounded-md opacity-5 font-bold transition-all duration-300 group-hover:text-white/70 group-hover:opacity-100">
              {/* Image instead of SVG */}
              <img
                src="/knotslogo.png"
                alt="Knots and Loops Logo"
                className="h-40 w-40 object-contain opacity-50 transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 group-hover:opacity-100"
              />
              <p className="text-center text-lg -mt-4">
                Knots and Loops Creations
              </p>
            </div>
          </button>`;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <ButtonContainer buttonCode={welcomeCode}>
          <button className="relative flex flex-col items-center justify-center w-[130px] h-[130px] border-4 border-black rounded-[12px] bg-[#057702] shadow-[4px_4px_0_#000] overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1)] hover:translate-[-4px_-4px] hover:shadow-[8px_8px_0_#000] active:translate-[2px_2px] active:shadow-[2px_2px_0_#000] group">
            {/* Logo */}
            <div className="absolute top-4 left-4 w-[90px] h-[90px] rounded-full bg-[#0f1715] flex items-center justify-center shadow-lg z-20 transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:animate-spin group-hover:w-[60px] group-hover:h-[60px] group-hover:top-[12%] group-hover:left-[25%]">
              <TerminalSquare className="text-primary h-8 w-12" />
            </div>

            {/* Text */}
            <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center text-center opacity-0 translate-y-10 transition-all duration-[600ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:opacity-100 group-hover:translate-y-2 z-20">
              <span className="text-[13px] font-medium text-white/80">
                Welcome to
              </span>
              <span className="text-[16px] font-extrabold uppercase tracking-[0.8px] text-[#d6cbbf]">
                UI Lab
              </span>
            </div>
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={tabSenseCode}>
          <button
            className="group relative cursor-pointer outline-none border-none rounded-full flex items-center justify-center h-12 w-12 
                 hover:w-[115px] transition-all duration-[750ms] text-white scale-110"
          >
            {/* Background pseudo-element replacement */}
            <span
              className="absolute inset-0 rounded-full 
                       bg-[linear-gradient(130deg,#7209d4,#141F2D_90%,#00a5b2)] 
                       ring-2 ring-[#141F2D] ring-offset-4 ring-offset-[#141F2D]/60 
                       transition-transform duration-300 transform scale-100 group-hover:scale-105 group-active:scale-95"
            ></span>

            {/* SVG Icon */}
            <img
              src="/tabsenselogo.png" // path relative to public folder
              alt="Github"
              className="absolute left-2 w-8 h-8 z-10 transition-all duration-300 group-hover:left-2 group-active:left-[10px]"
            />

            {/* Text */}
            <span
              className="absolute right-1.5 text-[15px] font-semibold w-[calc(100%-48px)] max-w-[calc(100%-48px)] overflow-hidden flex items-center justify-end 
                   -z-1 opacity-0 group-hover:opacity-100 group-hover:z-10 text-transparent group-hover:text-white
                   transition-all duration-[300ms] group-active:scale-85 group-active:right-2"
            >
              TabSense
            </span>
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={knotsLoopsCode}>
          <button className="relative h-[140px] flex items-end bg-none border-none outline-none group">
            {/* Light Holder */}
            <div className="absolute h-[150px] w-[250px] flex flex-col items-center">
              {/* Dot */}
              <div className="absolute top-0 w-[10px] h-[10px] bg-[#4B4B4B] rounded-full z-20 transition-colors duration-500 group-hover:bg-[#E7DFD8]"></div>

              {/* Triangular Beam that grows from the dot */}
              <div
                className="absolute top-0 w-[350px] h-[100px] origin-top scale-y-0 opacity-0 transition-all duration-700 ease-out group-hover:scale-y-100 group-hover:opacity-100"
                style={{
                  clipPath: "polygon(50% 0%, 25% 100%, 75% 100%)",
                  background:
                    "linear-gradient(180deg, rgba(248,243,238,1) 0%, rgba(248,243,238,0.4) 50%, rgba(248,243,238,0) 100%)",
                }}
              ></div>
            </div>

            {/* Button Holder */}
            <div className="flex flex-col items-center justify-center h-[100px] w-[250px] rounded-md opacity-5 font-bold transition-all duration-300 group-hover:text-white/70 group-hover:opacity-100">
              {/* Image instead of SVG */}
              <img
                src="/knotslogo.png"
                alt="Knots and Loops Logo"
                className="h-40 w-40 object-contain opacity-50 transition-all duration-300 group-hover:scale-110 group-hover:brightness-110 group-hover:opacity-100"
              />
              <p className="text-center text-lg -mt-4">
                Knots and Loops Creations
              </p>
            </div>
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={socialsCode}>
          <>
            {/* Hidden clipPath SVG */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                  <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
                </clipPath>
              </defs>
            </svg>

            <div className="relative">
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"></div>

              {/* Button container */}
              <div className="relative flex items-end gap-2 p-2">
                {/* GitHub */}
                <div className="relative">
                  <div
                    style={{ clipPath: "url(#squircleClip)" }}
                    className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="relative">
                  <div
                    style={{ clipPath: "url(#squircleClip)" }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                </div>

                {/* YouTube */}
                <div className="relative">
                  <div
                    style={{ clipPath: "url(#squircleClip)" }}
                    className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center shadow-lg border border-red-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                </div>

                {/* Twitter */}
                <div className="relative">
                  <div
                    style={{ clipPath: "url(#squircleClip)" }}
                    className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl flex items-center justify-center shadow-lg border border-indigo-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0189 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </>
        </ButtonContainer>

        <ButtonContainer buttonCode={amongUsCode}>
          <button
            type="button"
            className="
        relative flex items-center justify-center gap-2 px-5
        text-white font-semibold text-[17px] tracking-wide
        border-2 border-black rounded-full bg-yellow-400
        overflow-hidden cursor-pointer select-none
        transition-transform duration-500 ease-in-out
        active:scale-90
        group
      "
          >
            {/* SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="38px"
              height="36px"
              className="
          z-20 transition-transform duration-500 ease-in-out
          group-hover:scale-300 group-hover:translate-x-12"
            >
              <rect
                width="36"
                height="36"
                x="0"
                y="0"
                fill="transparent"
              ></rect>
              <path
                fill="#e53935"
                d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
              ></path>
              <path
                fill="#b71c1c"
                d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
              ></path>
              <path
                fill="#212121"
                d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
              ></path>
              <path
                fill="#01579b"
                d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
              ></path>
              <path
                fill="#212121"
                d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
              ></path>
              <path
                fill="#81d4fa"
                d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
              ></path>
              <path
                fill="#212121"
                d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
              ></path>
              <path
                fill="#e1f5fe"
                d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
              ></path>
            </svg>

            {/* Sliding "now!" text */}
            <span
              className="
          absolute left-0 z-20 transform -translate-x-full
          transition-transform duration-300 ease-in-out
          group-hover:translate-x-2 group-hover:delay-100
          drop-shadow-[0_1px_1px_rgba(0,0,0,1)]
        "
            >
              now!
            </span>

            {/* Sliding "play" text */}
            <span
              className="
          z-20 transition-transform duration-300 ease-in-out
          group-hover:translate-x-[200%] group-hover:delay-100
          drop-shadow-[0_1px_1px_rgba(0,0,0,1)]
        "
            >
              Play
            </span>
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={valorantCode}>
          <button
            type="button"
            className="
        relative inline-block px-10 py-4 text-[16px] font-bold text-white
        border-3 border-[#fc4664] bg-transparent overflow-hidden z-0
        font-sans cursor-pointer
        before:content-[''] before:absolute before:top-0 before:left-0
        before:w-full before:h-full before:bg-[#fc4664]
        before:-z-10 before:transform before:-translate-x-full
        before:transition-all before:duration-300
        hover:before:translate-x-0
      "
          >
            Valorant
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={learnMoreCode}>
          <button className="relative inline-block w-48 cursor-pointer outline-none border-0 align-middle text-left bg-transparent p-0 font-inherit">
            {/* Circle with arrow */}
            <span className="relative block w-12 h-12 bg-[#a3e635] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full">
              <span className="absolute top-1/2 left-4 w-4 h-[2px] bg-black -translate-y-1/2 transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-2">
                {/* Arrowhead */}
                <span className="absolute top-[-4.5px] right-[1px] w-2.5 h-2.5 border-t-[2px] border-r-[2px] border-black rotate-45"></span>
              </span>
            </span>

            {/* Button text */}
            <span className="absolute top-0 left-0 right-0 bottom-0 ml-7 py-3 text-[#fff] font-bold leading-[1.6] text-center uppercase transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-black">
              Learn More
            </span>
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={downloadCode}>
          <button
            type="button"
            className="
        relative flex items-center font-medium text-[17px] 
        px-5 py-3 text-white bg-[#675c9c] rounded-lg
        shadow-[0_0.7em_1.5em_-0.5em_rgba(59,48,78,0.527)]
        hover:shadow-[0_0.5em_1.5em_-0.5em_rgba(88,71,116,0.627)]
        active:shadow-[0_0.3em_1em_-0.5em_rgba(88,71,116,0.627)]
        before:content-[''] before:absolute before:left-0 before:top-[30%]
        before:w-[4px] before:h-[40%] before:bg-white
        before:rounded-tr-md before:rounded-br-md
        before:transition-all before:duration-200
        hover:before:h-[60%] hover:before:top-[22%]
        after:content-[''] after:absolute after:right-0 after:top-[30%]
        after:w-[4px] after:h-[40%] after:bg-white
        after:rounded-tl-md after:rounded-bl-md
        after:transition-all after:duration-200
        hover:after:h-[60%] hover:after:top-[22%] 
      "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512"
              className="mr-2 w-[25px] fill-white"
            >
              <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
            </svg>
            <span>Download</span>
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={aiButtonCode}>
          <button
            className="group relative h-[68px] w-[68px] rounded-xl border border-transparent 
               flex items-center justify-center cursor-pointer 
               bg-gradient-to-br from-[#3a5f0b] to-[#2d4708] 
               shadow-[0_1px_2px_0_rgba(60,64,67,0.3),0_2px_6px_2px_rgba(60,64,67,0.15),0_30px_60px_-30px_rgba(0,0,0,0.3),inset_0_-2px_6px_rgba(52,52,52,0.35)] 
               transition-transform duration-200 active:scale-95"
            role="button"
          >
            <svg
              className="absolute z-10 text-[#9eff00] 
                 top-[6px] left-[6px] h-[24px] w-[24px] 
                 transition-all duration-300 
                 animate-pulse
                 group-hover:h-[44px] group-hover:w-[44px] 
                 group-hover:left-[11px] group-hover:top-[12px] 
                 group-hover:text-white"
              stroke="none"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
              ></path>
            </svg>
            <span className="text-[36px] font-extrabold leading-none text-white transition-opacity duration-200 group-hover:opacity-0">
              AI
            </span>
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={jelloButtonCode}>
          <>
            <style>{`
        @keyframes jello-horizontal {
          0% { transform: scale3d(1, 1, 1); }
          30% { transform: scale3d(1.25, 0.75, 1); }
          40% { transform: scale3d(0.75, 1.25, 1); }
          50% { transform: scale3d(1.15, 0.85, 1); }
          65% { transform: scale3d(0.95, 1.05, 1); }
          75% { transform: scale3d(1.05, 0.95, 1); }
          100% { transform: scale3d(1, 1, 1); }
        }
      `}</style>

            <button
              className="
            relative w-[150px] h-[55px] rounded-[45px] border-none
            bg-[#975fff] text-shadow-red-900 text-shadow-sm text-white font-medium cursor-pointer
            flex items-center justify-center shadow-lg
            shadow-white/30
            before:content-[''] before:absolute before:w-[70%] before:h-[3px]
            before:bg-[rgba(255,255,255,0.5)] before:blur-[2px]
            before:top-[6px] before:rounded-full
            after:content-[''] after:absolute after:w-[70%] after:h-[3px]
            after:bg-[rgba(255,255,255,0.2)] after:blur-[2px]
            after:bottom-[6px] after:rounded-full
            hover:animate-[jello-horizontal_0.9s_both]
          "
            >
              Candy crush
            </button>
          </>
        </ButtonContainer>

        <ButtonContainer buttonCode={slideInButtonCode}>
          <button
            className="
            relative isolate select-none cursor-pointer
            bg-transparent py-3 px-5 touch-manipulation
            text-base font-bold text-[#16181d] tracking-wider
            border-2 border-white outline-none 
            md:px-10 after:absolute after:w-full after:h-full
            after:bg-[#a3e635] after:-z-10
            after:top-[7px] after:left-[7px]
            after:transition-all after:duration-200
            hover:after:top-0 hover:after:left-0 uppercase"
          >
            Slide In
          </button>
        </ButtonContainer>

        <ButtonContainer buttonCode={playStoreCode}>
          <button
            type="button"
            className="
        relative
        inline-flex
        items-center
        justify-center
        rounded-lg
        overflow-hidden
        shadow-lg
        hover:shadow-xl
        transition-shadow
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-green-500
        p-1
      "
          >
            <Image
              width={120}
              height={60}
              className="h-[60px] w-auto object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
              alt="Google Play Store"
            />
          </button>
        </ButtonContainer>
      </div>
    </div>
  );
};

export default Buttons;
