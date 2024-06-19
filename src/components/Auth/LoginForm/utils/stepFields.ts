// Define fields to validate for each step
export const stepFields: Array<keyof IFleetInquiryForm>[] = [
  [
    "firstName",
    "lastName",
    "email",
    "fleetUsageCompanyName",
    "address",
    "city",
    "zipCode",
    "idCountry",
    "idState",
    "phoneNumber",
  ],
  ["businessType", "numberOfVehicles"],
  ["timeTable", "customFeatures"],
];
