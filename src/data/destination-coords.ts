// Shared destination coordinates — single source of truth
// Extracted from plan.astro geoMarkers. Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  prague: { lat: 50.0755, lng: 14.4378, label: 'Prague' },
  budapest: { lat: 47.4979, lng: 19.0402, label: 'Budapest' },
  krakow: { lat: 50.0647, lng: 19.9450, label: 'Krakow' },
  dubrovnik: { lat: 42.6507, lng: 18.0944, label: 'Dubrovnik' },
  split: { lat: 43.5081, lng: 16.4402, label: 'Split' },
  ljubljana: { lat: 46.0569, lng: 14.5058, label: 'Ljubljana' },
  bratislava: { lat: 48.1486, lng: 17.1077, label: 'Bratislava' },
  bucharest: { lat: 44.4268, lng: 26.1025, label: 'Bucharest' },
  sofia: { lat: 42.6977, lng: 23.3219, label: 'Sofia' },
  belgrade: { lat: 44.7866, lng: 20.4489, label: 'Belgrade' },
  tallinn: { lat: 59.4370, lng: 24.7536, label: 'Tallinn' },
  riga: { lat: 56.9496, lng: 24.1052, label: 'Riga' },
  vilnius: { lat: 54.6872, lng: 25.2797, label: 'Vilnius' },
};
