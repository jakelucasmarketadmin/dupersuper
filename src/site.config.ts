// Everything a client site needs to change lives here.
// To make a new client site: copy the repo, edit this file, swap /public images, push.

export const site = {
  name: "Super Duper Contractor Man Dude Company",
  shortName: "Super Duper",
  url: "https://super-duper-contractor.pages.dev", // change to the client's domain at launch
  tagline: "Kitchens, baths, decks and additions built right the first time.",
  description:
    "Licensed and insured general contractor serving Bergen County, NJ. Kitchen and bathroom remodels, decks, additions and basements with fixed-price estimates.",
  phone: "(201) 555-0142", // test number
  email: "estimates@sdcmd.example",
  license: "NJ HIC #13VH00000000 (test)",
  founded: 2011,
  address: {
    street: "100 Test Ave",
    city: "Emerson",
    region: "NJ",
    postal: "07630",
  },
  geo: { lat: 40.9762, lng: -74.0262 },
  hours: [
    { days: "Monday to Friday", time: "7:00am to 5:00pm", schema: "Mo-Fr 07:00-17:00" },
    { days: "Saturday", time: "8:00am to 12:00pm", schema: "Sa 08:00-12:00" },
  ],
  // Leave blank to show the call/email fallback instead of a form.
  jotformId: "",
  serviceArea: [
    "Emerson", "Westwood", "Oradell", "River Vale", "Paramus", "Hillsdale",
    "Park Ridge", "Woodcliff Lake", "Montvale", "Ridgewood", "Hackensack", "Closter",
  ],
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  timeline: string;
  includes: string[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen remodeling",
    summary:
      "Full gut renovations or a refresh of cabinets, counters and lighting. One crew handles demo through final trim, so you deal with one schedule and one phone number.",
    timeline: "4 to 8 weeks",
    includes: [
      "Layout changes and wall removal with engineered beams",
      "Cabinet and countertop install",
      "Plumbing, electrical and permits",
      "Tile backsplash and flooring",
    ],
    faq: [
      { q: "Can we still use the house during the remodel?", a: "Yes. We set up a temporary sink area and seal the work zone with dust walls each day." },
      { q: "Do you pull the permits?", a: "We pull every permit and schedule every inspection. You never have to visit the building department." },
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom remodeling",
    summary:
      "Walk-in showers, tub replacements and full primary-bath remodels with waterproofing done to spec, not guesswork.",
    timeline: "2 to 4 weeks",
    includes: [
      "Tub-to-shower conversions",
      "Waterproofed tile showers",
      "Vanities, fixtures and ventilation",
      "Heated floors",
    ],
    faq: [
      { q: "How long is a bathroom out of service?", a: "Most hall baths take about two weeks. We'll give you the exact day count in the written estimate." },
    ],
  },
  {
    slug: "decks-and-porches",
    name: "Decks and porches",
    summary:
      "Composite and pressure-treated decks, covered porches and stair rebuilds, designed around how you actually use the yard.",
    timeline: "1 to 3 weeks",
    includes: [
      "Composite and PVC decking",
      "Railings, stairs and lighting",
      "Covered porches and pergolas",
      "Deck repair and resurfacing",
    ],
    faq: [
      { q: "Composite or wood?", a: "Composite costs more upfront and skips the yearly staining. We'll price both so you can compare." },
    ],
  },
  {
    slug: "additions",
    name: "Home additions",
    summary:
      "Second-story additions, bump-outs and sunrooms, from architect drawings through the final certificate of occupancy.",
    timeline: "3 to 6 months",
    includes: [
      "Coordination with your architect and engineer",
      "Foundations, framing and roofing",
      "Matching siding and trim to the existing house",
      "Final inspections and CO",
    ],
    faq: [
      { q: "Do I need an architect first?", a: "For most additions, yes. If you don't have one, we'll introduce you to a few we work with." },
    ],
  },
  {
    slug: "basement-finishing",
    name: "Basement finishing",
    summary:
      "Turn an unfinished basement into a family room, office or guest suite, with moisture control handled before anything gets covered up.",
    timeline: "4 to 6 weeks",
    includes: [
      "Moisture testing and vapor barriers",
      "Framing, insulation and drywall",
      "Egress windows",
      "Basement bathrooms and wet bars",
    ],
    faq: [
      { q: "My basement gets damp. Can it still be finished?", a: "Usually. We test first and fix the water problem before framing. If it can't be fixed, we'll tell you." },
    ],
  },
];

export const process = [
  { title: "Walkthrough", text: "We visit, measure, and talk through what you want. Free, about an hour." },
  { title: "Fixed-price estimate", text: "You get a written, line-item price within a week. The number doesn't creep." },
  { title: "Build", text: "One project lead, a posted schedule, and a text update at the end of every workday." },
  { title: "Final walkthrough", text: "We fix anything on your punch list before the last payment." },
];
