function printNumbers(n: number): void {
  if (n <= 0) {
    console.log('Input must be a positive number.');
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // Works fine
printNumbers(-5); // Prints: Input must be a positive number.