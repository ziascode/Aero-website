export const LABELS = [
  "Boardrooms",
  "Factory floors",
  "Warehouses",
  "Window cleaning",
  "Carpet steaming",
  "Waste disposal",
];

export const HERO_IMAGES = [
  "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
  "http://demo.fableux.com/wp-content/uploads/2026/08/nano2.png",
  "http://demo.fableux.com/wp-content/uploads/2026/08/nano1.png",
  "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.png",
  "http://demo.fableux.com/wp-content/uploads/2026/08/unspah4.jpg",
  "http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg",
  "http://demo.fableux.com/wp-content/uploads/2026/08/waste-scaled.avif",
];

export const SERVICE_PAGES = {
  "office-cleaning": {
    slug: "office-cleaning",
    title: "Office cleaning in Guelph",
    kicker: "After-hours crews and day porters",
    lede: "Cleaning for corporate floors across Guelph, Kitchener, Waterloo and Cambridge. Nightly, weekly or somewhere in between. You set the frequency and the scope, and every visit is logged room by room.",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg",
    imageAlt: "Clean, modern office interior ready for overnight commercial cleaning",
    featureImage: "/professional-offic-cleaning.jpg",
    featureImageAlt: "Open-plan office floor with clean desks and cubicles",
    ctaLabel: "Book a walkthrough",
    ctaHref: "#contact",
    ratingValue: "5.0",
    ratingLabel: "240+ Google reviews",
    includesHeading: "What every office visit covers",
    includesIntro: "The scope below is the starting point. It gets adjusted room by room during the walkthrough, and the version you sign is the version we clean.",
    includeGroups: [
      {
        title: "Schedule and scope",
        items: [
          "Nightly, weekly or custom frequency",
          "Different frequencies by zone where it makes sense",
          "Scope signed off room by room before the first visit",
        ],
      },
      {
        title: "On every visit",
        items: [
          "Desks, boardrooms and common areas",
          "Washrooms and lunchrooms",
          "Entrance and interior glass",
          "Floors vacuumed, hard surfaces mopped",
          "Trash and recycling out, liners replaced",
          "Dispensers refilled with paper, soap and towels",
        ],
      },
    ],
    processHeading: "How Aero works",
    steps: [
      {
        title: "Walk the floor",
        desc: "A supervisor notes traffic patterns, priority areas and access rules, then confirms a schedule that fits the building.",
      },
      {
        title: "Lock the quote",
        desc: "We measure the floors and return a fixed monthly figure within two working days. No surprise add-ons after kickoff.",
      },
      {
        title: "Start cleaning",
        desc: "Crews begin on the agreed nights or days. No lock-in for the first quarter while you see the standard hold.",
      },
    ],
    painHeading: "What you get",
    painIntro: "Desks ready. Washrooms stocked. One checklist.",
    painKicker: "Office coverage",
    pains: [
      {
        title: "Desks ready each morning",
        desc: "After-hours crews reset workstations, empty bins and wipe surfaces before your team arrives.",
      },
      {
        title: "Boardrooms kept presentable",
        desc: "Meeting rooms clean on the same rotation, so nobody scrambles before a client walks in.",
      },
      {
        title: "Washrooms stocked ahead",
        desc: "Paper, soap and liners refilled every visit, not when someone reports they have run out.",
      },
      {
        title: "One checklist, one invoice",
        desc: "Scope agreed room by room and priced whole. Nothing off the list turns up on the bill.",
      },
    ],
    galleryImages: [
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg",
        alt: "Clean modern office interior",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
        alt: "Maintained commercial lobby",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/nano1.png",
        alt: "Office floor after cleaning",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unspah4.jpg",
        alt: "Finished commercial workspace",
      },
    ],
    faqItems: [
      {
        q: "What is included in an office cleaning contract?",
        a: "Desks and horizontal surfaces, boardrooms, washrooms, lunchrooms, entrance glass, floors, and trash and recycling removal. Dispensers are refilled on every visit and dusting runs high and low on a set rotation.",
      },
      {
        q: "How often should an office be cleaned?",
        a: "Most offices run nightly or three times a week. Lower-traffic suites manage on weekly, and washrooms often need more frequency than the rest of the floor. We can set different frequencies by zone in the same building.",
      },
      {
        q: "Can you work around our security and alarm windows?",
        a: "Yes. Access, alarm codes and key handling are agreed with your facilities lead before the first visit, and crews work to whatever the building's rules are.",
      },
      {
        q: "Do you clean multiple floors or suites?",
        a: "Yes. Single floors, whole buildings and multi-suite portfolios all run under one account and one point of contact.",
      },
    ],
    formHeading: "Book a site walkthrough",
    formIntro:
      "Tell us where the office is. A supervisor will confirm the scope and come back with a written quote.",
    formSubmitLabel: "Request my walkthrough",
  },
  "janitorial-services": {
    slug: "janitorial-services",
    title: "Janitorial services",
    kicker: "Day porter and recurring care",
    lede: "Whole-building contracts that keep entrances, common areas, stairwells, washrooms and lunchrooms presentable between deep cleans.",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
    imageAlt: "Commercial lobby and common areas maintained by recurring janitorial service",
    ctaLabel: "Book a walkthrough",
    ctaHref: "#contact",
    ratingValue: "5.0",
    ratingLabel: "240+ Google reviews",
    includesHeading: "What your janitorial contract covers",
    includesIntro:
      "A building-wide scope rather than a room-by-room one. Coverage is split between what happens during the day and what happens after everyone leaves.",
    includeGroups: [
      {
        title: "Coverage model",
        items: [
          "Day porter service through business hours",
          "After-hours crews for full-building cleaning",
          "Nightly, weekly or custom recurring schedules",
        ],
      },
      {
        title: "On every visit",
        items: [
          "Entrances, lobbies and common areas",
          "Stairwells and elevator interiors",
          "Washrooms and lunchrooms",
          "Trash and recycling removed, liners replaced",
          "Consumables restocked",
          "Irregularities logged and reported",
        ],
      },
    ],
    processHeading: "How Aero works",
    steps: [
      {
        title: "Map the building",
        desc: "A supervisor walks entrances, washrooms, stairwells and common areas, and notes when each can be worked on without getting in anyone's way.",
      },
      {
        title: "Split day from night",
        desc: "We work out what needs a day porter and what belongs after hours, then price the two together.",
      },
      {
        title: "Start with no lock-in",
        desc: "Crews begin on the agreed schedule. No lock-in for the first quarter while you confirm the standard holds across the building.",
      },
    ],
    painHeading: "What you get",
    painIntro: "Clean washrooms all day. A lobby that looks open.",
    painKicker: "Janitorial coverage",
    pains: [
      {
        title: "Washrooms clean all day",
        desc: "Day porters check and reset them through the day, not once at ten at night.",
      },
      {
        title: "A lobby that looks open",
        desc: "Entrances and common areas stay presentable while the building is being used.",
      },
      {
        title: "Supplies never run out",
        desc: "Paper, soap and liners tracked and restocked before anyone has to ask.",
      },
      {
        title: "One contract, one contact",
        desc: "Day porters and after-hours crews on a single agreement, with one person to call.",
      },
    ],
    galleryImages: [
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
        alt: "Maintained commercial lobby and common area",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg",
        alt: "Clean modern office interior",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/nano2.png",
        alt: "Commercial cleaning in progress",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unspah4.jpg",
        alt: "Finished commercial space after janitorial service",
      },
    ],
    faqItems: [
      {
        q: "What is the difference between janitorial and office cleaning?",
        a: "Office cleaning is the floor your staff work on. Janitorial covers the whole building around it: entrances, lobbies, stairwells, elevators, shared washrooms and common areas. Most buildings need both.",
      },
      {
        q: "What does a day porter do?",
        a: "A day porter works through business hours rather than after them. They reset washrooms, keep entrances and common areas presentable, handle spills as they happen and restock consumables before anyone notices.",
      },
      {
        q: "Are supplies and consumables included?",
        a: "They can be. Crews arrive with their own equipment and products, and paper, soap and liners can be built into the contract and restocked on every visit.",
      },
      {
        q: "Can you work around after-hours access?",
        a: "Yes. Keys, fobs, alarm codes and access windows are agreed with your facilities lead before the first visit.",
      },
      {
        q: "Do you cover multiple sites?",
        a: "Yes. Several buildings can run under one agreement with one contact, and the scope and frequency are set separately for each.",
      },
      {
        q: "Will we get a record of what was done?",
        a: "Yes. A logbook is kept on every contract. Crews record the work and note anything they find, and you can read it whenever you want.",
      },
    ],
    formHeading: "Book a site walkthrough",
    formIntro:
      "Tell us where the building is and roughly how many washrooms. A supervisor will take it from there.",
    formSubmitLabel: "Request my walkthrough",
  },
  "post-construction": {
    slug: "post-construction",
    title: "Post-construction cleaning",
    kicker: "Builders' clean and handover",
    lede: "Builders' cleans that hand the space over ready to occupy. Rough, intermediate and final phases, or just the final one if the trades have already finished.",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/nano2.png",
    imageAlt: "Commercial space after post-construction cleaning, ready for handover",
    ctaLabel: "Book a site walkthrough",
    ctaHref: "#contact",
    ratingValue: "5.0",
    ratingLabel: "240+ Google reviews",
    includesHeading: "What a builders' clean covers",
    includesIntro:
      "Three phases, priced separately. Most projects need the final clean; larger builds take all three.",
    includeGroups: [
      {
        title: "Clean phases",
        items: [
          "Rough clean after framing and drywall",
          "Intermediate clean between trades",
          "Final clean ahead of the occupancy walkthrough",
        ],
      },
      {
        title: "On every final clean",
        items: [
          "Dust off ledges, ducts and light fittings",
          "Glass scrape, polish and label removal",
          "Adhesive, tape residue and protective film stripped",
          "Floors, washrooms and high-touch surfaces finished",
          "Fixtures and fittings wiped down",
          "Debris and packaging removed",
        ],
      },
    ],
    processHeading: "How Aero works",
    steps: [
      {
        title: "Walk the site",
        desc: "A supervisor checks which trades are still working, how much dust is in the space and what the handover date is.",
      },
      {
        title: "Price the phases",
        desc: "We quote each phase separately so you only pay for the ones the build needs.",
      },
      {
        title: "Clean to handover",
        desc: "Crews work around the trades still on site and finish ahead of your walkthrough, not on it.",
      },
    ],
    painHeading: "What you get",
    painIntro: "Dust gone. Glass clear. Ready for the walkthrough.",
    painKicker: "Builders' clean",
    pains: [
      {
        title: "Construction dust removed",
        desc: "Ledges, ducts, light fittings and the corners nobody reaches on a normal clean.",
      },
      {
        title: "Glass scraped and polished",
        desc: "Paint spatter, labels and protective film come off the glazing and the frames.",
      },
      {
        title: "Adhesive and debris cleared",
        desc: "Stickers, tape residue and leftover material off surfaces, floors and fixtures.",
      },
      {
        title: "Handover on your date",
        desc: "Priced per project against a written checklist, and scheduled to your handover.",
      },
    ],
    galleryImages: [
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/nano2.png",
        alt: "Commercial interior after post-construction cleaning",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/nano1.png",
        alt: "Floor and surfaces cleared of construction dust",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
        alt: "Lobby ready for occupancy handover",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unspah4.jpg",
        alt: "Finished commercial workspace after builders’ clean",
      },
    ],
    faqItems: [
      {
        q: "What is a post-construction clean?",
        a: "The clean that turns a finished build into an occupiable space. Construction dust comes off every surface including ledges, ducts and light fittings, glass is scraped and polished, adhesive and protective film are stripped, and floors and washrooms are finished.",
      },
      {
        q: "Do you offer rough, intermediate and final cleans?",
        a: "Yes, and each is quoted separately. A rough clean follows framing and drywall, an intermediate clean happens between trades, and the final clean goes in ahead of occupancy.",
      },
      {
        q: "Can you work around active trades?",
        a: "Yes. Crews coordinate with your site supervisor and work in the areas that are finished while the rest is still going.",
      },
      {
        q: "Is label and adhesive removal included?",
        a: "On final cleans, yes. Glass scrape, label removal and protective film stripping are part of the scope rather than an extra.",
      },
      {
        q: "How is a builders' clean priced?",
        a: "By floor area, how much dust is in the space and which phases you need. Per project rather than per month, against a written checklist.",
      },
    ],
    formHeading: "Book a site walkthrough",
    formIntro:
      "Tell us the address and your handover date. A supervisor will scope the phases you need.",
    formSubmitLabel: "Request my walkthrough",
  },
  "window-cleaning": {
    slug: "window-cleaning",
    title: "Window cleaning",
    kicker: "Interior and exterior glass",
    lede: "Storefront glass, office partitions and atrium panes, on whatever cycle the building needs. Frames, sills and tracks are done on the same visit, and high panes are reached properly rather than off a ladder.",
    image: "/window-cleaning.svg",
    imageAlt: "Commercial window cleaning illustration",
    featureImage: "/window-clean-office.png",
    featureImageAlt: "Office interior with clean commercial windows",
    ctaLabel: "Book a walkthrough",
    ctaHref: "#contact",
    ratingValue: "5.0",
    ratingLabel: "240+ Google reviews",
    includesHeading: "What every glass visit covers",
    includesIntro:
      "A clear scope for storefronts, offices and industrial glazing. Frequency is set by how exposed the building is.",
    includeGroups: [
      {
        title: "Coverage options",
        items: [
          "Interior only, exterior only, or both",
          "Monthly, quarterly or seasonal cycles",
          "One-off cleans between scheduled visits",
          "Post-construction glass restoration",
        ],
      },
      {
        title: "On every visit",
        items: [
          "Storefront and entrance glass, both sides",
          "Interior partitions and internal doors",
          "Frames, sills and tracks wiped down",
          "Ledges and surrounds left dry",
        ],
      },
    ],
    processHeading: "How Aero works",
    steps: [
      {
        title: "Walk the glass",
        desc: "A supervisor counts the panes, checks what is reachable from the ground and what needs access equipment.",
      },
      {
        title: "Set the cycle",
        desc: "Exposed storefronts need more frequency than sheltered glazing. We price the cycle the building actually needs.",
      },
      {
        title: "Clean on schedule",
        desc: "Crews work around opening hours so nobody is squeezing past a bucket on the way in.",
      },
    ],
    painHeading: "What you get",
    painIntro: "Clear glass. Clean frames. A sharper front door.",
    painKicker: "Glass coverage",
    pains: [
      {
        title: "Storefronts that look open",
        desc: "Entrance glass and door panels cleaned on a cycle, not when someone complains.",
      },
      {
        title: "Interior glass without streaks",
        desc: "Partitions, internal doors and meeting room glazing, cleaned both sides.",
      },
      {
        title: "High-level work handled",
        desc: "Atrium and upper-storey panes reached with proper access equipment.",
      },
      {
        title: "Frames and tracks included",
        desc: "Sills, frames and tracks wiped on the same visit rather than quoted separately.",
      },
    ],
    galleryImages: [
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unspah4.jpg",
        alt: "Commercial glass after professional window cleaning",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
        alt: "Lobby entrance glass and storefront",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg",
        alt: "Interior office partitions with clear glass",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/nano1.png",
        alt: "Finished commercial interior with clean windows",
      },
    ],
    faqItems: [
      {
        q: "Do you clean interior and exterior windows?",
        a: "Both. Most contracts cover exterior glass more often than interior, and the two can run on separate cycles if that suits the building.",
      },
      {
        q: "How often should commercial windows be cleaned?",
        a: "Storefronts and entrances usually run monthly, general office glazing quarterly, and exposed or high-traffic frontage more often. Spring and autumn are the heaviest periods.",
      },
      {
        q: "Are frames, sills and tracks included?",
        a: "Yes, on the same visit. They are part of the scope, not a separate line.",
      },
      {
        q: "Can you work around opening hours?",
        a: "Yes. Retail and customer-facing frontage is usually done before opening or after closing.",
      },
      {
        q: "Do you do one-off cleans?",
        a: "Yes. One-off cleans and post-construction glass restoration are priced per visit.",
      },
    ],
    formHeading: "Book a site walkthrough",
    formIntro:
      "Tell us where the building is and roughly how much glass. A supervisor will price the cycle.",
    formSubmitLabel: "Request my walkthrough",
  },
  "biohazard-emergency": {
    slug: "biohazard-emergency",
    title: "Restoration & emergency",
    kicker: "Water, sewage and biohazard response",
    lede: "When a pipe lets go or a drain backs up, the building needs people on site the same day. Crews arrive in PPE to extract, contain and disinfect, then work through drying with the documentation your insurer needs.",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/waste-scaled.avif",
    imageAlt: "Emergency commercial cleanup and biohazard response",
    ctaLabel: "Book a walkthrough",
    ctaHref: "#contact",
    ratingValue: "5.0",
    ratingLabel: "240+ Google reviews",
    includesHeading: "What emergency response covers",
    includesIntro:
      "Priced per incident. Call first and describe what has happened, and we will tell you what the response looks like.",
    includeGroups: [
      {
        title: "Incident types",
        items: [
          "Water damage and flooding",
          "Sewer and drain backup",
          "Biohazard and contamination cleanup",
          "Post-fire cleanup",
        ],
      },
      {
        title: "On every response",
        items: [
          "Area contained and isolated",
          "Water and contamination extracted",
          "Affected surfaces disinfected",
          "Drying and dehumidification",
          "Photographic record for the insurer",
          "Crews in full PPE throughout",
        ],
      },
    ],
    processHeading: "How Aero works",
    steps: [
      {
        title: "Call it in",
        desc: "Tell us the address, incident type, and access rules. We confirm PPE needs and how fast a crew can be on site.",
      },
      {
        title: "Contain and extract",
        desc: "Crews isolate the affected area, pull out the water or contamination and disinfect what is left.",
      },
      {
        title: "Dry and document",
        desc: "Drying runs until the readings are right, and the record goes to you for the claim.",
      },
    ],
    painHeading: "What you get",
    painIntro: "On site fast. Contained properly. Documented for the claim.",
    painKicker: "Emergency coverage",
    pains: [
      {
        title: "Crews in full PPE",
        desc: "Biohazard and sewage jobs are handled with the protective gear and protocols the site needs.",
      },
      {
        title: "Contained before it spreads",
        desc: "The affected area is isolated first so the damage stops where it is.",
      },
      {
        title: "Extracted and disinfected",
        desc: "Water and contamination removed, then the area disinfected rather than just dried.",
      },
      {
        title: "Insurance-ready documentation",
        desc: "Photos and reports written so your claim can move without chasing missing detail.",
      },
    ],
    galleryImages: [
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/waste-scaled.avif",
        alt: "Emergency cleanup and waste handling",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
        alt: "Commercial lobby after restoration cleaning",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/nano2.png",
        alt: "Interior space prepared after emergency response",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg",
        alt: "Office floor restored after incident cleanup",
      },
    ],
    faqItems: [
      {
        q: "Do you handle sewer backups?",
        a: "Yes. Sewer and drain backups are contained, extracted and disinfected, and crews work in full PPE because of what is in the water.",
      },
      {
        q: "What counts as biohazard cleaning?",
        a: "Anything involving bodily fluids, sewage, contaminated material or a health risk that ordinary cleaning cannot safely handle. It needs containment, disposal and disinfection rather than a normal clean.",
      },
      {
        q: "How is emergency work priced?",
        a: "Per incident rather than per month, based on the size of the affected area and what is involved in making it safe.",
      },
    ],
    formHeading: "Book a site walkthrough",
    formIntro:
      "Emergencies do not wait for a walkthrough. Call and describe what has happened.",
    formSubmitLabel: "Request my walkthrough",
  },
  "carpet-cleaning": {
    slug: "carpet-cleaning",
    title: "Carpet cleaning",
    kicker: "Hot-water extraction and traffic lanes",
    lede: "Hot-water extraction for offices, corridors and meeting rooms. Traffic-lane soil lifts out, spots are treated individually, and the carpet is dry enough to walk on by the next business day.",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/nano1.png",
    imageAlt: "Commercial carpet after professional hot-water extraction cleaning",
    heroVideo: "/carpet.mp4",
    ctaLabel: "Book a walkthrough",
    ctaHref: "#contact",
    ratingValue: "5.0",
    ratingLabel: "240+ Google reviews",
    includesHeading: "What every carpet visit covers",
    includesIntro:
      "Priced by area and how soiled the carpet is. Most offices run a deep clean once or twice a year with spot work between.",
    includeGroups: [
      {
        title: "Coverage options",
        items: [
          "Scheduled deep cleans on a set cycle",
          "One-off refreshes between visits",
          "Traffic-lane-only cleaning",
          "Post-event and post-renovation cleaning",
        ],
      },
      {
        title: "On every visit",
        items: [
          "Vacuum and pre-treatment",
          "Hot-water extraction across the area",
          "Individual spot and stain treatment",
          "Edges, corners and under-desk areas",
          "Furniture moved and replaced where needed",
        ],
      },
    ],
    processHeading: "How Aero works",
    steps: [
      {
        title: "Check the carpet",
        desc: "A supervisor looks at fibre type, how soiled it is and where the traffic lanes have formed.",
      },
      {
        title: "Price the area",
        desc: "Quoted by square footage and condition, with the cycle set to how hard the space gets used.",
      },
      {
        title: "Clean overnight",
        desc: "Work runs after hours so the carpet has the night to dry before anyone walks on it.",
      },
    ],
    painHeading: "What you get",
    painIntro: "Traffic lanes gone. Dry by the next morning.",
    painKicker: "Carpet coverage",
    pains: [
      {
        title: "Traffic lanes lifted",
        desc: "The darker paths through corridors and between desks come back up.",
      },
      {
        title: "Spots treated individually",
        desc: "Coffee, ink and grease get their own treatment rather than a general pass.",
      },
      {
        title: "Dry for the next day",
        desc: "Extraction pulls most of the moisture out, so floors are usable next morning.",
      },
      {
        title: "Scheduled or one-off",
        desc: "A deep clean on a set cycle, or a single refresh between regular visits.",
      },
    ],
    galleryImages: [
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/nano1.png",
        alt: "Commercial carpet after hot-water extraction",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg",
        alt: "Open office floor with cleaned carpet",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
        alt: "Corridor and common-area carpet cleaning",
      },
      {
        src: "http://demo.fableux.com/wp-content/uploads/2026/08/unspah4.jpg",
        alt: "Finished commercial interior after carpet care",
      },
    ],
    faqItems: [
      {
        q: "How often should office carpet be cleaned?",
        a: "Most offices deep clean once or twice a year, with entrances and main corridors done more often because that is where the soil arrives. Heavy-traffic sites go quarterly.",
      },
      {
        q: "How long does commercial carpet take to dry?",
        a: "Hot-water extraction pulls most of the moisture back out, so carpet cleaned overnight is normally ready for the next business day.",
      },
      {
        q: "Will traffic lanes come out?",
        a: "Usually. Traffic-lane soil responds well to extraction. Fibre that has been physically worn rather than soiled will look better but will not come back entirely.",
      },
      {
        q: "Do you move furniture?",
        a: "Light furniture is moved and replaced as part of the visit. Heavy items and workstations are cleaned around unless you arrange otherwise.",
      },
      {
        q: "Is carpet cleaning part of a janitorial contract?",
        a: "It can be built into a recurring contract or booked as a one-off. Most clients run it as a scheduled deep clean alongside regular janitorial work.",
      },
    ],
    formHeading: "Book a site walkthrough",
    formIntro:
      "Tell us the rough square footage and when the space is free. A supervisor will quote the area.",
    formSubmitLabel: "Request my walkthrough",
  },
};

export const QUICKSELECT_ITEMS = [
  {
    label: "Office cleaning",
    href: "/services/office-cleaning",
    icon: "office",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/unsplash1-scaled.jpg",
  },
  {
    label: "Janitorial Services",
    href: "/services/janitorial-services",
    icon: "janitorial",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/aero2.jpg",
  },
  {
    label: "Post construction",
    href: "/services/post-construction",
    icon: "construction",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/nano2.png",
  },
  {
    label: "Window cleaning",
    href: "/services/window-cleaning",
    icon: "window",
    image: "/window-cleaning.svg",
  },
  {
    label: "Biohazard Cleaning",
    href: "/services/biohazard-emergency",
    icon: "biohazard",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/waste-scaled.avif",
  },
  {
    label: "Carpet cleaning",
    href: "/services/carpet-cleaning",
    icon: "carpet",
    image: "http://demo.fableux.com/wp-content/uploads/2026/08/nano1.png",
  },
];



export const SERVICE_ROWS = [
  {
    title: "Office cleaning",
    desc: "After-hours crews reset desks, boardrooms, washrooms and common areas so the floor is ready before your team arrives. You set the frequency. We build the checklist room by room and log every visit.",
    tags: ["Nightly, weekly or custom", "Scope signed off room by room", "Entrance and interior glass", "Day porter option"],
    video: "http://demo.fableux.com/wp-content/uploads/2026/07/video.mp4",
  },
  {
    title: "Janitorial services",
    desc: "Recurring contracts keep the whole building presentable between deep cleans. Day porters work through business hours, after-hours crews cover the rest, and consumables get topped up before anyone notices they are low.",
    tags: ["Day porter service", "Washrooms and lunchrooms", "Common areas and stairwells", "Supplies restocked"],
    video: "https://www.pexels.com/download/video/5983927/",
  },
  {
    title: "Window cleaning",
    desc: "Storefront glass, office partitions and atrium panes, on whatever cycle the building needs. Frames, sills and tracks are wiped on the same visit. High panes are reached with proper access equipment rather than a ladder.",
    tags: ["Interior and exterior", "Storefronts and entrances", "High-level access", "Frames, sills and tracks"],
    video: "https://www.pexels.com/download/video/6196257/",
  },
  {
    title: "Post-construction cleaning",
    desc: "Builders' cleans in three phases, or just the final one. We pull dust off ledges, ducts and light fittings, scrape and polish the glass, strip labels and protective film, then finish floors and washrooms before your walkthrough.",
    tags: ["Rough, intermediate and final", "Construction dust removal", "Label and adhesive removal", "Handover ready"],
    video: "https://www.pexels.com/download/video/7641637/",
  },
  {
    title: "Restoration & emergency",
    desc: "When a pipe lets go or a drain backs up, crews arrive in PPE to extract, contain and disinfect. Drying and restoration follow, documented as the work goes so your insurer has what it needs to settle.",
    tags: ["Emergency call-out", "Water and flood cleanup", "Sewer backup", "Biohazard cleaning", "Insurance documentation"],
    video: "https://www.pexels.com/download/video/6197566/",
  },
  {
    title: "Carpet cleaning",
    desc: "Hot-water extraction for offices, corridors and meeting rooms. Traffic-lane soil lifts out, spots get treated individually, and the carpet is dry enough to walk on by the next business day.",
    tags: ["Hot-water extraction", "Traffic lanes", "Spot and stain treatment", "Low dry time"],
    video: "https://www.pexels.com/download/video/6191891/",
  },
  {
    title: "Warehouse & factory floors",
    desc: "Ride-on scrubbing, degreasing and sealing for production and logistics space. We work around shift patterns and racking, with spill response inside two hours on contract sites.",
    tags: ["Factory floors", "Warehouses", "Degrease & seal", "Loading docks", "Racking dedust", "Spill response"],
    video: "https://www.pexels.com/download/video/6195524/",
  },
];

export const REVIEWS = [
  { name: "James R.", date: "2 months ago", text: "Reliable nightly service. Our office floors have never looked better." },
  { name: "Priya K.", date: "4 months ago", text: "Professional team, thorough work, and always on schedule." },
  { name: "David M.", date: "1 month ago", text: "Switched from another provider and the difference in quality is obvious." },
  { name: "Sarah L.", date: "3 months ago", text: "Great communication and consistent results across every site." },
  { name: "Tom H.", date: "5 months ago", text: "Our facilities manager finally has one less thing to worry about." },
  { name: "Linda F.", date: "2 months ago", text: "Detailed, dependable, and easy to work with. Highly recommend." },
  { name: "Chris B.", date: "6 months ago", text: "Floor care team did an amazing job stripping and resealing our warehouse." },
  { name: "Amanda W.", date: "3 months ago", text: "The overnight crew is thorough and always leaves the office spotless." },
  { name: "Mark D.", date: "1 month ago", text: "Booked a walkthrough and had a fixed quote within two days, exactly as promised." },
  { name: "Nina S.", date: "4 months ago", text: "Five stars for consistency. Same great standard every single night." },
];

export const AVATAR_COLORS = ["#0E7EFF", "#22C55E", "#F59E0B", "#EC4899", "#8B5CF6", "#14B8A6"];

export const LOGOS = [
  ["Ceva", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/ceva-r117vj8vla7uoxnwq491apt9jkdi8dkygo8mrsj9q8.jpg"],
  ["FlowChem", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/FlowChem-r117vl4jyyafc5l6f52afpc6qc48nrsf4xjlqcghds.jpg"],
  ["Government of Canada", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/govofCanada-r117vny2jgeaazh2yoa656mkihqcav3m5bi266cav4.jpg"],
  ["Hammond Manufacturing", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/HammondManufacturing-r117vrpfasjflfbmcpwof5oew17t5nijhu403a6q68.jpg"],
  ["Kia", "https://commons.wikimedia.org/wiki/Special:FilePath/KIA_logo2.svg"],
  ["Linamar", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/linamar-r117vxcgfsr5j33ffscfu496gcg0fu4xim0wyxyd4w.jpg"],
  ["Nissan", "https://commons.wikimedia.org/wiki/Special:FilePath/Nissan_2020_logo.svg"],
  ["Ontario", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/Ontario-r117w13t74watixyttyy43b0tvxhamjuv4muw1ssg0.jpg"],
  ["Pinchin", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/Pinchin-r117w2zhksyvgqv8ius792ty0no7q0rbjdxtulq03k.jpg"],
  ["Van Harten", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/VanHarten-r117w5t05b2qfkr52e02yk4bstabd42ijrwaafltkw.jpg"],
  ["Guelph Chamber", "https://aerocleaning.ca/wp-content/uploads/elementor/thumbs/GuelphChamber-1-r118v6akq508wnw7m0usc81geipj382kd2qeuhovsw.jpg"],
];

export const STATS = [
  ["2.4M", "Sq ft serviced nightly"],
  ["5.0", "Average google rating"],
  ["100%", "On schedule, on scope"],
];

export const NAV_LINKS = [
  { href: "/#top", label: "Home" },
  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/services/office-cleaning", label: "Office cleaning" },
      { href: "/services/janitorial-services", label: "Janitorial services" },
      { href: "/services/post-construction", label: "Post-construction cleaning" },
      { href: "/services/window-cleaning", label: "Window cleaning" },
      { href: "/services/biohazard-emergency", label: "Biohazard cleaning" },
      { href: "/services/carpet-cleaning", label: "Carpet cleaning" },
      { href: "#", label: "Warehouse & factory floors" },
    ],
  },
  { href: "/#reviews", label: "Reviews" },
  { href: "/about", label: "About" },
];

export const FOOTER_LINK_GROUPS = [
  ["Company", [
    ["Home", "/#top"],
    ["Services", "/#services"],
    ["About Us", "/#about"],
    ["Reviews", "/#reviews"],
  ]],
  ["Services", [
    ["Office cleaning", "/services/office-cleaning"],
    ["Janitorial services", "/services/janitorial-services"],
    ["Warehouse & factory floors", "/#services"],
  ]],
];

export const ABOUT_CREDENTIALS = [
  {
    title: "WSIB",
    detail: "Covered & fully insured",
    logo: "/WSIB_idgW_0iT9Z_1.svg",
  },
  {
    title: "BBB",
    detail: "A+ accredited since 2019",
    logo: "/BBB_idtn_qVjBo_0.svg",
  },
  {
    title: "WBE Canada",
    detail: "Certified diverse supplier",
    logo: "/wbe-brand.png",
    rounded: true,
  },
  {
    title: "Environmental Choice",
    detail: "Eco-friendly products",
    logo: "/environmental-choice.png",
    rounded: true,
  },
];

export const FAQ_ITEMS = [
  {
    q: "What does commercial office cleaning include?",
    a: "Desks and horizontal surfaces, boardrooms, washrooms, lunchrooms, entrance glass, floors and trash removal, with dispensers refilled and high and low dusting on a set rotation. The exact list is signed off room by room before the first visit.",
  },
  {
    q: "How quickly can you start?",
    a: "A supervisor walks the site, measures the areas and returns a fixed monthly figure within two working days. Most contracts begin the week after sign-off, and there’s no lock-in for the first quarter.",
  },
  {
    q: "Do you offer one-time cleans, or only recurring contracts?",
    a: "Both. Recurring janitorial contracts are the core of what we do, but post-construction handovers and emergency response are all priced per visit.",
  },
  {
    q: "Can you clean outside our business hours?",
    a: "Yes. Office work usually runs after hours, warehouse and factory floors are scheduled around shift patterns, and day porters cover entrances and washrooms straight through the business day.",
  },
  {
    q: "Are your cleaners insured and covered by WSIB?",
    a: "Every crew member is covered by WSIB and Aero carries full liability insurance. We’re also BBB accredited and can send certificates of coverage to your procurement team before the first visit.",
  },
  {
    q: "Do you supply the products and equipment?",
    a: "We arrive with our own equipment and Environmental Choice certified products, and we keep consumables such as paper, soap and liners restocked before you run out.",
  },
  {
    q: "Which areas do you serve?",
    a: "Guelph and the surrounding area, where we’ve been cleaning offices, plants and warehouses since 2015. Tell us where the site is and we’ll confirm coverage on the call.",
  },
  {
    q: "Can you handle more than one building?",
    a: "Yes. Multiple sites run under one account and one point of contact, with the scope and frequency set separately for each.",
  },
];

export const ABOUT_GIVEBACK = [
  { name: "United Way", logo: "/brands/united-way.svg" },
  { name: "SickKids Foundation", logo: "/brands/sickkids.png" },
  { name: "Guelph Food Bank", logo: "/brands/guelph-food-bank.png" },
  { name: "Children’s Foundation of Guelph and Wellington", logo: "/brands/childrens-foundation.png" },
  { name: "Hope House", logo: "/brands/hope.jpeg" },
  { name: "Michael House", logo: "/brands/Michael-House-Logo.png" },
  { name: "Guelph-Wellington Women in Crisis", logo: "/brands/WIC.svg" },
  { name: "Red Door Family Shelter", logo: "/brands/rdlogo.png" },
];
