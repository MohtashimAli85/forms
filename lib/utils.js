import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import getCountryList from 'react-select-country-list';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getCountryOptions = () => {
  return getCountryList().getData();
};
