import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import getCountryList from 'react-select-country-list';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getCountryOptions = () => {
  return getCountryList().getData();
};
const currentYear = new Date().getFullYear();
export const yearsArray = Array.from(
  { length: 50 },
  (_, index) => currentYear - index
);
