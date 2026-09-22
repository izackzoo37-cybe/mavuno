export interface Location {
  name: string;
  type: "Retailer" | "Supermarket" | "Wholesaler" | "Distributor";
  county: string;
  address: string;
  mapUrl?: string;
}

// No retailers or distributors have been confirmed yet — do not invent any.
export const locations: Location[] = [];
