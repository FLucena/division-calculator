export function divide(dividend: number, divisor: number): { quotient: number, remainder: number } {
    if (divisor === 0) throw new Error("Divisor cannot be zero");
  
    let quotient = 0;
    let remainder = Math.abs(dividend);
    const absoluteDivisor = Math.abs(divisor);
  
    while (remainder >= absoluteDivisor) {
      remainder -= absoluteDivisor;
      quotient++;
    }
  
    if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
      quotient = -quotient;
    }
  
    return { quotient, remainder };
}