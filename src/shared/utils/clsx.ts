import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values using clsx and tailwind-merge to generate a single class string.
 * @param inputs - An array of class values or strings to be combined.
 * @returns A string containing the merged class names.
 */

const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export default cn;
