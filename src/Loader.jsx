import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative flex flex-col items-center">
        {/* Loader Animation */}
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full border-8 border-gradient border-t-transparent animate-spin"></div>
        </div>
        {/* Generating Text */}
        <p className="text-lg font-semibold mt-4 text-gradient">Generating...</p>
      </div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes color-change {
          0% { color: #ff0080; } /* Vivid Pink */
          25% { color: #ff8c00; } /* Orange */
          50% { color: #00bfff; } /* Deep Sky Blue */
          75% { color: #8a2be2; } /* Blue Violet */
          100% { color: #32cd32; } /* Lime Green */
        }
        .animate-spin {
          animation: spin 1.5s linear infinite;
        }
        .text-gradient {
          animation: color-change 2s linear infinite;
          background: linear-gradient(to right, #ff0080, #ff8c00, #00bfff, #8a2be2, #32cd32);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font-size: 1.25rem;
        }
        .border-gradient {
          border-image: linear-gradient(45deg, #ff0080, #ff8c00, #00bfff, #8a2be2, #32cd32);
          border-image-slice: 1;
          border-top-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Loader;
