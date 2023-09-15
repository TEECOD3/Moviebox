import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


 export function formatDateToUTC(inputDateString: string) {
    // Create a Date object from the input date string
    const inputDate = new Date(inputDateString);

    // Define an array for month names
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the day, month, and year from the Date object
    const day = inputDate.getUTCDate();
    const month = monthNames[inputDate.getUTCMonth()];
    const year = inputDate.getUTCFullYear();

    // Determine the day suffix (e.g., "th", "st", "nd")
    let daySuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    }

    // Format the date as "24th June 2023" and return it
    const formattedDate = `${day}${daySuffix} ${month} ${year}`;
    return formattedDate;
  }