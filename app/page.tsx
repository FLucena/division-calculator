"use client"
import { useState } from 'react';
import { divide } from './utils/division';

const DividePage = () => {
  const [dividend, setDividend] = useState(0);
  const [divisor, setDivisor] = useState(0);
  const [result, setResult] = useState<{ quotient: number, remainder: number } | null>(null);

  const handleDivide = () => {
    try {
      const divisionResult = divide(dividend, divisor);
      setResult(divisionResult);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">Division Calculator Without `/` or `*`</h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700">Dividend:</label>
          <input
            type="number"
            value={dividend}
            onChange={(e) => setDividend(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Divisor:</label>
          <input
            type="number"
            value={divisor}
            onChange={(e) => setDivisor(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          onClick={handleDivide}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Divide
        </button>
        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p>Quotient: <span className="font-bold">{result.quotient}</span></p>
            <p>Remainder: <span className="font-bold">{result.remainder}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DividePage;