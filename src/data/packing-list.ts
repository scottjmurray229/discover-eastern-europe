// packing-list.ts — Eastern Europe-specific packing config
import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const EASTERN_EUROPE_ESSENTIALS: PackingItem[] = [
  { id: 'ee-cash', name: 'Local Cash per Country', category: 'destination', description: 'Not all Eastern European countries use EUR. Poland uses PLN, Czech Republic uses CZK, Hungary uses HUF. Get some local currency at airport ATMs — market stalls and smaller restaurants are cash-only.', essential: true, quantityMultiplier: 0 },
  { id: 'ee-layers', name: 'Layering System (wide temp range)', category: 'destination', description: 'Prague in April can be 30°F and 65°F in the same day. Krakow in October means cold mornings, mild afternoons, and frost at night. Layers handle Eastern Europe better than any single jacket.', essential: true, climate: ['cold', 'temperate'], amazonSearchFallback: 'packable+down+jacket+travel+lightweight', affiliatePrice: '$60–100' },
  { id: 'ee-walkshoes', name: 'Comfortable Walking Shoes (cobblestone)', category: 'destination', description: 'Prague, Krakow, Budapest, and Tallinn are cobblestone cities. Heels and thin-soled shoes are painful within an hour. Supportive sneakers or walking shoes are the correct choice.', essential: true, amazonSearchFallback: 'comfortable+walking+shoes+cobblestone', affiliatePrice: '$70–120' },
  { id: 'ee-adapter', name: 'Type C/F Adapter', category: 'destination', description: 'All Eastern European countries use 230V European sockets. American plugs don\'t fit without an adapter.', essential: true, amazonSearchFallback: 'european+travel+adapter+type+c+f', affiliatePrice: '$12–20' },
  { id: 'ee-modest', name: 'Modest Clothing for Churches / Synagogues', category: 'destination', description: 'Prague, Krakow (Auschwitz), and Budapest\'s Great Synagogue require covered shoulders as a sign of respect. A lightweight scarf or cardigan handles every situation.', essential: false, amazonSearchFallback: 'lightweight+scarf+travel+cover+up' },
  {
    id: 'vpn-subscription',
    name: 'VPN Subscription',
    category: 'electronics',
    description: 'Secure your data on public WiFi — essential for hotel, airport, and cafe networks abroad.',
    essential: false,
    affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=XXXXX&url_id=902',
    affiliatePrice: '~$3/month',
    affiliatePartner: 'NordVPN',
  },
  {
    id: '360-camera',
    name: '360° Camera',
    category: 'gear',
    description: 'Capture immersive views of architecture, cityscapes, and landmarks.',
    essential: false,
    affiliateUrl: 'https://www.insta360.com/sal/x5?utm_source=AffiliateCenter&utm_medium=copylink&utm_term=INRSG7H5RTR',
    affiliatePrice: '~$499',
    affiliatePartner: 'Insta360',
  },
  {
    id: 'phone-gimbal',
    name: 'Phone Gimbal for Travel Vlogging',
    category: 'electronics',
    description: 'Stabilized video from your phone — no editing needed.',
    essential: false,
    affiliateUrl: 'https://www.insta360.com/sal/flow-2-pro?utm_source=AffiliateCenter&utm_medium=copylink&utm_term=INRSG7H5RTR',
    affiliatePrice: '~$149',
    affiliatePartner: 'Insta360',
  },
];

export const EASTERN_EUROPE_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-ee-shoes', name: 'Comfortable Walking Shoes', reason: 'Prague\'s Old Town, Krakow\'s market square, Budapest\'s castle district — all cobblestone, all day. Shoes that look good and feel good after 15,000 steps are not optional.', amazonSearchFallback: 'comfortable+walking+shoes+cobblestone+city', affiliatePrice: '~$85' },
  { id: 'gr-ee-jacket', name: 'Packable Down Jacket', reason: 'Eastern European weather is famously variable — 65°F afternoons and 35°F evenings happen in spring and fall. A packable down jacket handles everything without adding bulk.', amazonSearchFallback: 'packable+down+jacket+lightweight+travel', affiliatePrice: '~$75' },
  { id: 'gr-ee-adapter', name: 'European Travel Adapter', reason: 'All of Eastern Europe uses 230V Type C/F sockets. American plugs won\'t fit. One good universal adapter covers Poland, Czech Republic, Hungary, Romania, and beyond.', amazonSearchFallback: 'european+travel+adapter+type+c+f+universal', affiliatePrice: '~$18' },
  { id: 'gr-ee-bag', name: 'Anti-Theft Crossbody Bag', reason: 'Tourist pickpocketing in Prague and Budapest is professional-level. Slash-proof straps and lockable zips mean you watch the Astronomical Clock instead of your pockets.', amazonSearchFallback: 'anti+theft+crossbody+bag+travel', affiliatePrice: '~$50' },
  { id: 'gr-ee-charger', name: 'Portable Power Bank', reason: 'Long days exploring cities, using maps, and photographing architecture drain your phone. A power bank keeps you navigating when you\'re deep in the old town.', amazonSearchFallback: 'power+bank+10000mah+portable+charger', affiliatePrice: '~$28' },
];

export const EASTERN_EUROPE_CONFIG: PackingConfig = {
  sitePrefix: 'dee',
  destination: 'Eastern Europe',
  climate: ['temperate', 'cold'],
  currency: 'varies (EUR/PLN/CZK/HUF)',
  plugType: 'Type C/F',
  plugVoltage: '230V',
  affiliateTag: 'discoverphili-20',
  seasons: [
    { value: 'spring', label: 'Spring (Mar–May)' },
    { value: 'summer', label: 'Summer (Jun–Aug)' },
    { value: 'fall', label: 'Autumn (Sep–Nov)' },
    { value: 'winter', label: 'Winter (Dec–Feb)' },
  ],
  activities: [
    { value: 'hiking', label: 'Hiking', icon: '🥾' },
    { value: 'temples', label: 'Museums & Sites', icon: '🏛️' },
    { value: 'city-walk', label: 'City Exploring', icon: '🚶' },
    { value: 'skiing', label: 'Skiing', icon: '⛷️' },
    { value: 'photography', label: 'Photography', icon: '📸' },
    { value: 'nightlife', label: 'Nightlife', icon: '🍹' },
  ],
  destinationEssentials: EASTERN_EUROPE_ESSENTIALS,
  gearRecommendations: EASTERN_EUROPE_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = EASTERN_EUROPE_CONFIG;

export const EASTERN_EUROPE_PACKING_FAQS = [
  { question: 'What should I pack for Eastern Europe?', answer: 'The essentials are comfortable walking shoes (cobblestone cities destroy feet in wrong footwear), a layering system for wild temperature swings, a European Type C/F adapter, and local cash for each country. Our interactive checklist covers 60+ items customized for Eastern Europe\'s temperate climate.' },
  { question: 'Do Eastern European countries use the Euro?', answer: 'Only some. Slovenia, Slovakia, Estonia, Latvia, and Lithuania use EUR. Poland uses PLN (złoty), Czech Republic uses CZK (koruna), Hungary uses HUF (forint), Romania uses RON (leu), and Croatia recently joined the Eurozone. Get local cash at airport ATMs on arrival in each country.' },
  { question: 'What power adapter do I need for Eastern Europe?', answer: 'All Eastern European countries use Type C and Type F plugs at 230V/50Hz. American plugs need an adapter, but most modern devices (phones, laptops, cameras) handle 100–240V automatically. One universal European adapter covers every country in the region.' },
  { question: 'What\'s the weather like in Eastern Europe?', answer: 'Eastern Europe has four distinct seasons with significant swings. Spring and fall are the best times to visit but require layers — mornings can be 35°F and afternoons 65°F. Summer (June–August) is warm at 65–80°F. Winters are cold (often below freezing) and require proper cold-weather gear.' },
  { question: 'How many outfits should I pack for Eastern Europe?', answer: 'Pack for 5 days and use coin laundries or hotel laundry. Laundromats (€3–5/load) are available in every major Eastern European city. Pack dark colors that don\'t show cobblestone dust, comfortable walking shoes, and versatile layers rather than specialized outfits.' },
  { question: 'What should I NOT bring to Eastern Europe?', answer: 'Skip heels and thin-soled shoes (cobblestone destroys them within hours), bulky heavy coats (layers work better for variable weather), and visible expensive jewelry (pickpocketing targets in Prague and Budapest). Travel light — baggage storage is cheap and lockers are everywhere.' },
];
