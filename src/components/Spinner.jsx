import { useState, useEffect } from 'react';

function Spinner() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-16 h-16  border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
      <p className="mt-5 text-lg font-bold">
        Loading{dots}
      </p>
    </div>
  );
}

export default Spinner;