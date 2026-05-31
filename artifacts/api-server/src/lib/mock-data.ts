// ---------------------------------------------------------------------------
// Mock data — used when DATABASE_URL is not configured (local dev without DB)
// ---------------------------------------------------------------------------

export const mockProjects = [
  {
    id: 1,
    title: "Skyline Tower Complex",
    category: "Commercial" as const,
    location: "New York, NY",
    year: 2023,
    description:
      "A 42-storey mixed-use skyscraper featuring premium office space and ground-floor retail, built with sustainable materials and LEED Platinum certification.",
    imageUrl: null,
    featured: true,
    createdAt: new Date("2023-01-01"),
  },
  {
    id: 2,
    title: "Riverside Residences",
    category: "Residential" as const,
    location: "Austin, TX",
    year: 2022,
    description:
      "A luxury waterfront community of 120 single-family homes with private docks, nature trails, and a resort-style clubhouse.",
    imageUrl: null,
    featured: true,
    createdAt: new Date("2022-06-01"),
  },
  {
    id: 3,
    title: "Pacific Logistics Hub",
    category: "Industrial" as const,
    location: "Los Angeles, CA",
    year: 2023,
    description:
      "State-of-the-art 500,000 sq ft warehouse and distribution center with automated loading bays and solar power generation.",
    imageUrl: null,
    featured: true,
    createdAt: new Date("2023-03-01"),
  },
  {
    id: 4,
    title: "The Grand Plaza Hotel",
    category: "Commercial" as const,
    location: "Chicago, IL",
    year: 2021,
    description:
      "Full-service renovation and expansion of a historic downtown hotel, adding 200 rooms while preserving original Art Deco features.",
    imageUrl: null,
    featured: false,
    createdAt: new Date("2021-09-01"),
  },
  {
    id: 5,
    title: "Lakewood Family Estates",
    category: "Residential" as const,
    location: "Denver, CO",
    year: 2022,
    description:
      "A 75-home planned community with mountain views, integrated green spaces, and energy-efficient construction throughout.",
    imageUrl: null,
    featured: false,
    createdAt: new Date("2022-02-01"),
  },
  {
    id: 6,
    title: "NorthPort Manufacturing Plant",
    category: "Industrial" as const,
    location: "Detroit, MI",
    year: 2020,
    description:
      "A 250,000 sq ft precision manufacturing facility with cleanroom zones, heavy-load flooring, and advanced HVAC systems.",
    imageUrl: null,
    featured: false,
    createdAt: new Date("2020-11-01"),
  },
];

export const mockServices = [
  {
    id: 1,
    title: "Residential Construction",
    description:
      "Custom homes, multi-family developments, and luxury residences built to exacting standards with premium materials.",
    icon: "Home",
    featured: true,
  },
  {
    id: 2,
    title: "Commercial Development",
    description:
      "Offices, retail centres, hotels, and mixed-use developments designed for long-term performance and value.",
    icon: "Building2",
    featured: true,
  },
  {
    id: 3,
    title: "Industrial Facilities",
    description:
      "Warehouses, manufacturing plants, and logistics hubs engineered for operational efficiency and durability.",
    icon: "Hammer",
    featured: true,
  },
  {
    id: 4,
    title: "Interior Fit-Out",
    description:
      "Full interior design and construction services delivering bespoke spaces that reflect your brand and culture.",
    icon: "Palette",
    featured: false,
  },
  {
    id: 5,
    title: "Project Management",
    description:
      "End-to-end project management ensuring on-time delivery, cost control, and quality assurance at every milestone.",
    icon: "ClipboardList",
    featured: false,
  },
  {
    id: 6,
    title: "Renovation & Retrofit",
    description:
      "Structural renovation, seismic upgrades, and modernisation of existing buildings with minimal disruption.",
    icon: "Wrench",
    featured: false,
  },
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Marcus Holt",
    role: "CEO",
    company: "Holt Enterprises",
    quote:
      "The team delivered our commercial complex six weeks ahead of schedule without cutting a single corner. Truly exceptional craftsmanship.",
    rating: 5,
    avatarUrl: null,
    createdAt: new Date("2023-06-01"),
  },
  {
    id: 2,
    name: "Sophia Reyes",
    role: "Director of Operations",
    company: "Pacific Logistics",
    quote:
      "From groundbreaking to handover, every milestone was hit on budget. Our new distribution hub exceeded every performance benchmark.",
    rating: 5,
    avatarUrl: null,
    createdAt: new Date("2023-04-01"),
  },
  {
    id: 3,
    name: "James Whitmore",
    role: "Property Developer",
    company: "Whitmore Group",
    quote:
      "We've partnered on four residential developments now. The consistency of quality and the professionalism of the crew is unmatched.",
    rating: 5,
    avatarUrl: null,
    createdAt: new Date("2022-11-01"),
  },
  {
    id: 4,
    name: "Elena Vasquez",
    role: "VP Real Estate",
    company: "Nexus Capital",
    quote:
      "Their project management transparency gave our board complete confidence. Weekly reports, zero surprises, outstanding results.",
    rating: 5,
    avatarUrl: null,
    createdAt: new Date("2022-08-01"),
  },
];

export const mockTeam = [
  {
    id: 1,
    name: "Robert Chambers",
    role: "CEO & Founder",
    bio: "25 years leading large-scale construction programmes across North America and Europe.",
    imageUrl: null,
  },
  {
    id: 2,
    name: "Diana Park",
    role: "Chief Engineer",
    bio: "Structural engineering specialist with a track record on high-rise and industrial mega-projects.",
    imageUrl: null,
  },
  {
    id: 3,
    name: "Carlos Mendez",
    role: "Project Director",
    bio: "PMP-certified with expertise managing multi-disciplinary teams across commercial developments.",
    imageUrl: null,
  },
  {
    id: 4,
    name: "Fiona Barrett",
    role: "Design Lead",
    bio: "Award-winning architect specialising in sustainable design and LEED-certified builds.",
    imageUrl: null,
  },
];

export const mockStats = {
  yearsExperience: 25,
  projectsCompleted: 847,
  teamSize: 120,
  countriesServed: 12,
};
