export const communicationOptions = [
  { value: 0, label: "Email" },
  { value: 1, label: "Phone" },
];

export const testDriveOptions = [
  { value: 3, label: "3 months" },
  { value: 6, label: "6 months" },
  { value: 12, label: "12 months" },
];

export const industryOptions = [
  {
    value: "car-share",
    label: "Car Share",
  },
  {
    value: "car-rental",
    label: "Car Rental",
  },
  {
    value: "trucking",
    label: "Trucking & transport",
  },
  {
    value: "tourism",
    label: "Tourism & recreation",
  },
  {
    value: "delivery",
    label: "Trucking & delivery services",
  },
  {
    value: "shipping",
    label: "Shipping and maritime",
  },
  {
    value: "public-transportation",
    label: "Public transportation",
  },
  {
    value: "emergency",
    label: "Emergency services",
  },
  {
    value: "government",
    label: "Government & municipalities",
  },
  {
    value: "agriculture",
    label: "Agriculture",
  },
  {
    value: "construction",
    label: "Construction, plumbing, HVAC",
  },
];

/**
 * Generates an array of time options representing working hours from 09:00 AM to 06:00 PM.
 * Each option contains a value in HHMM format and a label in HH:MM AM/PM format.
 * @returns {Array} An array of time options.
 */
export const getWorkingTimeOptions = () => {
  const timeOptions = [];

  // Loop through hours from 9 AM to 6 PM
  for (let hour = 9; hour <= 18; hour++) {
    // Loop through minutes, incrementing by 30 minutes
    for (let minute = 0; minute < 60; minute += 30) {
      // Skip minutes past 6 PM
      if (hour === 18 && minute > 0) {
        break;
      }

      // Convert hour and minute to string format with leading zeros if necessary
      const hourString = hour.toString().padStart(2, "0");
      const minuteString = minute.toString().padStart(2, "0");

      // Concatenate hour and minute strings to form the time value
      const time = `${hourString}${minuteString}`;

      // Convert hour to 12-hour format and determine AM/PM
      const displayHour = hour > 12 ? hour - 12 : hour;
      const displayTime = `${displayHour}:${minuteString} ${
        hour < 12 ? "AM" : "PM"
      }`;

      timeOptions.push({ value: time, label: ` ${displayTime}` });
    }
  }

  return timeOptions;
};
