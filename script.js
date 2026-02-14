/*******************************************************************
  SUZUKI NJS SOEKARNO HATTA – script.js (Final merged + fixes)
********************************************************************/

/* ================================================================
   1. DATA PRODUK SUZUKI (FULL DATA - from user)
================================================================ */
/* (FULL PRODUCTS ARRAY START) */
const products = [
  // ================== PASSENGER ==================
  {
    id: "fronx",
    name: "Suzuki Fronx",
    category: "passenger",
    image: "SUZUKI_FRONK.png",
    badge: "new", // NEW LAUNCH
    variants: [
      {
        id: "gl-mt",
        name: "GL MT",
        otr: 261800000,
        colors: [
          { name: "Pearl Arctic White", hex: "#f9fafb" },
          { name: "Grandeur Grey", hex: "#4b5563" },
          { name: "Splendid Silver", hex: "#d1d5db" }
        ],
        specs: {
          engine: "1.0L BoosterJet",
          transmission: "Manual",
          passengers: 5,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["LED Headlamp", "Touchscreen", "Cruise Control"]
        }
      },
      {
        id: "gl-at",
        name: "GL AT",
        otr: 273800000,
        colors: [
          { name: "Pearl Arctic White", hex: "#f9fafb" },
          { name: "Grandeur Grey", hex: "#4b5563" },
          { name: "Splendid Silver", hex: "#d1d5db" }
        ],
        specs: {
          engine: "1.0L BoosterJet",
          transmission: "Automatic",
          passengers: 5,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["LED Headlamp", "Touchscreen", "Cruise Control"]
        }
      },
      {
        id: "gx-mt",
        name: "GX MT",
        otr: 278800000,
        colors: [
          { name: "Pearl Arctic White", hex: "#f9fafb" },
          { name: "Grandeur Grey", hex: "#4b5563" },
          { name: "Splendid Silver", hex: "#d1d5db" },
          { name: "Two Tone Red / Black", hex: "#b91c1c" }
        ],
        specs: {
          engine: "1.0L BoosterJet",
          transmission: "Manual",
          passengers: 5,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof", "360 Camera", "Cruise Control"]
        }
      }
    ]
  },

  {
    id: "ertiga",
    name: "All New Ertiga",
    category: "passenger",
    image: "SUZUKI_ERTIGA.png",
    variants: [
      {
        id: "mc-gl-mt",
        name: "MC GL MT",
        otr: 265350000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Cool Black", hex: "#111827" },
          { name: "Magma Grey", hex: "#4b5563" }
        ],
        specs: {
          engine: "1.5L, 4 silinder",
          transmission: "Manual",
          passengers: 7,
          safety: ["ABS", "Dual Airbag", "ISOFIX"],
          features: ["AC Double Blower", "Head Unit", "Power Steering"]
        }
      },
      {
        id: "mc-gl-at",
        name: "MC GL AT",
        otr: 276400000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Cool Black", hex: "#111827" },
          { name: "Silky Silver", hex: "#d1d5db" }
        ],
        specs: {
          engine: "1.5L, 4 silinder",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "Dual Airbag", "ISOFIX"],
          features: ["Head Unit Touchscreen", "AC Double Blower"]
        }
      },
      {
        id: "mc-gx-mt",
        name: "MC GX MT",
        otr: 282000000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Burgundy Red", hex: "#7f1d1d" },
          { name: "Cool Black", hex: "#111827" }
        ],
        specs: {
          engine: "1.5L, 4 silinder",
          transmission: "Manual",
          passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Keyless Entry", "Audio Steering Switch"]
        }
      },
      {
        id: "mc-gx-at",
        name: "MC GX AT",
        otr: 293000000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Magma Grey", hex: "#4b5563" },
          { name: "Cool Black", hex: "#111827" }
        ],
        specs: {
          engine: "1.5L, 4 silinder",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Keyless Entry", "Start/Stop Button"]
        }
      },
      {
        id: "cruise-mt",
        name: "Cruise MT",
        otr: 294800000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Cool Black", hex: "#111827" },
          { name: "Magma Grey", hex: "#4b5563" }
        ],
        specs: {
          engine: "1.5L, 4 silinder",
          transmission: "Manual",
          passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Bodykit Cruise", "Head Unit Touchscreen"]
        }
      },
      {
        id: "cruise-mt-2tone",
        name: "Cruise MT 2 Tone",
        otr: 296800000,
        colors: [
          { name: "Two Tone White / Black", hex: "#e5e7eb" },
          { name: "Two Tone Grey / Black", hex: "#6b7280" }
        ],
        specs: {
          engine: "1.5L, 4 silinder",
          transmission: "Manual",
          passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Two Tone Color", "Bodykit Cruise"]
        }
      },
      {
        id: "cruise-at",
        name: "Cruise AT",
        otr: 305700000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Cool Black", hex: "#111827" },
          { name: "Silky Silver", hex: "#d1d5db" }
        ],
        specs: {
          engine: "1.5L, 4 silinder",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Bodykit Cruise", "Head Unit Touchscreen"]
        }
      },
      {
        id: "cruise-at-2tone",
        name: "Cruise AT 2 Tone",
        otr: 307700000,
        colors: [
          { name: "Two Tone White / Black", hex: "#e5e7eb" },
          { name: "Two Tone Red / Black", hex: "#b91c1c" }
        ],
        specs: {
          engine: "1.5L, 4 silinder",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Two Tone Color", "Bodykit Cruise"]
        }
      }
    ]
  },

  {
    id: "xl7",
    name: "XL7 Hybrid",
    category: "passenger",
    image: "Suzuki_XL7_ALPHA_KURO_IVORY-KURO.png",
    badge: "kuro",
    variants: [
      {
        id: "zeta-mt",
        name: "Zeta MT",
        otr: 269900000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Rising Orange", hex: "#ea580c" },
          { name: "Cool Black", hex: "#020617" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Manual",
          passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Head Unit Touchscreen", "Roof Rail"]
        }
      },
      {
        id: "zeta-at",
        name: "Zeta AT",
        otr: 281100000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Rising Orange", hex: "#ea580c" },
          { name: "Magma Grey", hex: "#4b5563" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Head Unit Touchscreen", "Roof Rail"]
        }
      },
      {
        id: "beta-mt-hybrid",
        name: "Beta MT Hybrid",
        otr: 292200000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Cool Black", hex: "#020617" },
          { name: "Burgundy Red", hex: "#7f1d1d" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Manual",
          passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Cruise Control", "Keyless Entry"]
        }
      },
      {
        id: "beta-at-hybrid",
        name: "Beta AT Hybrid",
        otr: 303100000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Cool Black", hex: "#020617" },
          { name: "Magma Grey", hex: "#4b5563" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Cruise Control", "Keyless Entry"]
        }
      },
      {
        id: "alpha-mt-hybrid",
        name: "Alpha MT Hybrid",
        otr: 302300000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Two Tone White / Black", hex: "#e5e7eb" },
          { name: "Rising Orange", hex: "#ea580c" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Manual",
          passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof (opsi)", "Leather Seat (opsi)"]
        }
      },
      {
        id: "alpha-mt-hybrid-2tone",
        name: "Alpha MT Hybrid 2 Tone",
        otr: 304300000,
        colors: [
          { name: "Two Tone Orange / Black", hex: "#ea580c" },
          { name: "Two Tone White / Black", hex: "#e5e7eb" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Manual",
          passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof", "Bodykit Alpha"]
        }
      },
      {
        id: "alpha-at-hybrid",
        name: "Alpha AT Hybrid",
        otr: 313200000,
        colors: [
          { name: "Pearl Snow White", hex: "#f3f4f6" },
          { name: "Magma Grey", hex: "#4b5563" },
          { name: "Cool Black", hex: "#020617" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof (opsi)", "Cruise Control"]
        }
      },
      {
        id: "alpha-at-hybrid-2tone",
        name: "Alpha AT Hybrid 2 Tone",
        otr: 315300000,
        colors: [
          { name: "Two Tone Orange / Black", hex: "#ea580c" },
          { name: "Two Tone White / Black", hex: "#e5e7eb" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof", "Cruise Control"]
        }
      },
      // ===== XL7 KURO BARU =====
      {
        id: "alpha-kuro-at-2tone",
        name: "Alpha Kuro AT (2-Tone)",
        otr: 320300000,
        colors: [
          { name: "Prime Cool Black", hex: "#020617" },
          { name: "Rising Orange + Black", hex: "#b45309" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Bodykit Kuro", "Two Tone Roof", "Cruise Control"]
        }
      },
      {
        id: "alpha-kuro-at",
        name: "Alpha Kuro AT",
        otr: 318200000,
        colors: [
          { name: "Prime Cool Black", hex: "#020617" },
          { name: "Pearl White", hex: "#f9fafb" }
        ],
        specs: {
          engine: "1.5L Hybrid",
          transmission: "Automatic",
          passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Bodykit Kuro", "Spoiler Hitam", "Cruise Control"]
        }
      }
    ]
  },

  {
    id: "baleno",
    name: "New Baleno",
    category: "passenger",
    image: "BALENO.jpg",
    variants: [
      {
        id: "baleno-at",
        name: "Baleno AT",
        otr: 293300000,
        colors: [
          { name: "Pearl Arctic White", hex: "#f9fafb" },
          { name: "Prime Urban Blue", hex: "#1d4ed8" },
          { name: "Premium Silver", hex: "#d4d4d8" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Automatic",
          passengers: 5,
          safety: ["ABS", "Airbag", "ESP"],
          features: ["Head Unit Touchscreen", "LED Projector Headlamp"]
        }
      }
    ]
  },

  {
    id: "grand-vitara",
    name: "Grand Vitara GX",
    category: "passenger",
    image: "grand vitara GX.png",
    variants: [
      {
        id: "gx-at",
        name: "GX AT",
        otr: 403200000,
        colors: [
          { name: "Pearl Artic White", hex: "#f9fafb" },
          { name: "Splendid Silver", hex: "#d1d5db" },
          { name: "Grandeur Grey", hex: "#4b5563" }
        ],
        specs: {
          engine: "1.5L Smart Hybrid",
          transmission: "Automatic",
          passengers: 5,
          safety: ["ABS", "ESP", "Airbag", "Hill Hold Control"],
          features: ["Panoramic Sunroof", "Head Unit Besar"]
        }
      },
      {
        id: "gx-at-2tone",
        name: "GX AT 2 Tone",
        otr: 406100000,
        colors: [
          { name: "Two Tone White / Black", hex: "#e5e7eb" },
          { name: "Two Tone Red / Black", hex: "#b91c1c" }
        ],
        specs: {
          engine: "1.5L Smart Hybrid",
          transmission: "Automatic",
          passengers: 5,
          safety: ["ABS", "ESP", "Airbag", "Hill Hold Control"],
          features: ["Two Tone Color", "Panoramic Sunroof"]
        }
      }
    ]
  },

  {
    id: "jimny-3door",
    name: "Jimny 3 Door",
    category: "passenger",
    image: "SUZUKI_BANDUNG_white-JIMNY_3-DOORS.png",
    variants: [
      {
        id: "3door-mt",
        name: "3 Door MT",
        otr: 511550000,
        colors: [
          { name: "Jungle Green", hex: "#14532d" },
          { name: "Kinetic Yellow", hex: "#eab308" },
          { name: "Superior White", hex: "#f9fafb" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 4,
          safety: ["ABS", "Airbag"],
          features: ["4WD", "Ground Clearance Tinggi"]
        }
      },
      {
        id: "3door-at",
        name: "3 Door AT",
        otr: 524000000,
        colors: [
          { name: "Jungle Green", hex: "#14532d" },
          { name: "Brisk Blue", hex: "#1d4ed8" },
          { name: "Medium Grey", hex: "#6b7280" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Automatic",
          passengers: 4,
          safety: ["ABS", "Airbag"],
          features: ["4WD", "Ground Clearance Tinggi"]
        }
      },
      {
        id: "3door-mt-2tone",
        name: "3 Door MT 2 Tone",
        otr: 514850000,
        colors: [
          { name: "Kinetic Yellow / Black", hex: "#eab308" },
          { name: "Brisk Blue / Black", hex: "#1d4ed8" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 4,
          safety: ["ABS", "Airbag"],
          features: ["Two Tone Color", "4WD"]
        }
      },
      {
        id: "3door-at-2tone",
        name: "3 Door AT 2 Tone",
        otr: 527300000,
        colors: [
          { name: "Kinetic Yellow / Black", hex: "#eab308" },
          { name: "Brisk Blue / Black", hex: "#1d4ed8" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Automatic",
          passengers: 4,
          safety: ["ABS", "Airbag"],
          features: ["Two Tone Color", "4WD"]
        }
      }
    ]
  },

  {
    id: "jimny-5door",
    name: "Jimny 5 Door",
    category: "passenger",
    image: "COLORIZE_JUNGLE_GREEN_FIXED_LAYERS-JIMNY_5-DOORS.png",
    variants: [
      {
        id: "5door-mt",
        name: "5 Door MT",
        otr: 496100000,
        colors: [
          { name: "Jungle Green", hex: "#14532d" },
          { name: "Kinetic Yellow", hex: "#eab308" },
          { name: "Superior White", hex: "#f9fafb" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["4WD", "Ground Clearance Tinggi"]
        }
      },
      {
        id: "5door-at",
        name: "5 Door AT",
        otr: 508700000,
        colors: [
          { name: "Jungle Green", hex: "#14532d" },
          { name: "Medium Grey", hex: "#6b7280" },
          { name: "Brisk Blue", hex: "#1d4ed8" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Automatic",
          passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["4WD", "Ground Clearance Tinggi"]
        }
      },
      {
        id: "5door-mt-2tone",
        name: "5 Door MT 2 Tone",
        otr: 499350000,
        colors: [
          { name: "Kinetic Yellow / Black", hex: "#eab308" },
          { name: "Brisk Blue / Black", hex: "#1d4ed8" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Two Tone Color", "4WD"]
        }
      },
      {
        id: "5door-at-2tone",
        name: "5 Door AT 2 Tone",
        otr: 511900000,
        colors: [
          { name: "Kinetic Yellow / Black", hex: "#eab308" },
          { name: "Brisk Blue / Black", hex: "#1d4ed8" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Automatic",
          passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Two Tone Color", "4WD"]
        }
      },
      {
        id: "5door-at-white-rhino",
        name: "5 Door AT White Rhino",
        otr: 522300000,
        colors: [
          { name: "White Rhino", hex: "#e5e7eb" },
          { name: "Jungle Green", hex: "#14532d" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Automatic",
          passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Warna White Rhino Khusus", "4WD"]
        }
      }
    ]
  },

  {
    id: "spresso",
    name: "S-Presso",
    category: "passenger",
    image: "SUZUKI_S PRESSO.png",
    variants: [
      {
        id: "mt",
        name: "S-Presso MT",
        otr: 176600000,
        colors: [
          { name: "Fire Red", hex: "#b91c1c" },
          { name: "Silky Silver", hex: "#d4d4d8" },
          { name: "Sizzle Orange", hex: "#f97316" }
        ],
        specs: {
          engine: "1.0L",
          transmission: "Manual",
          passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Ground Clearance Tinggi", "Head Unit"]
        }
      },
      {
        id: "at",
        name: "S-Presso AT",
        otr: 186600000,
        colors: [
          { name: "Fire Red", hex: "#b91c1c" },
          { name: "Silky Silver", hex: "#d4d4d8" },
          { name: "Sizzle Orange", hex: "#f97316" }
        ],
        specs: {
          engine: "1.0L",
          transmission: "Automatic (AGS)",
          passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Ground Clearance Tinggi", "Head Unit"]
        }
      }
    ]
  },

  {
    id: "apv",
    name: "APV",
    category: "passenger",
    image: "RED APV_ARENA.png",
    variants: [
      {
        id: "ge-ps-mt-ab",
        name: "APV GE PS MT AB",
        otr: 228200000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Silky Silver", hex: "#d4d4d8" },
          { name: "Real Black", hex: "#020617" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 8,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Power Steering", "AC"]
        }
      },
      {
        id: "gl-mt-ab",
        name: "APV GL MT AB",
        otr: 236400000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Silky Silver", hex: "#d4d4d8" },
          { name: "Graphite Grey", hex: "#4b5563" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 8,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["AC Double Blower", "Power Steering"]
        }
      },
      {
        id: "gx-mt-ab",
        name: "APV GX MT AB",
        otr: 250500000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Graphite Grey", hex: "#4b5563" },
          { name: "Burgundy Red", hex: "#7f1d1d" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 8,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Interior Lebih Mewah", "AC Double Blower"]
        }
      },
      {
        id: "sgx-mt-ab",
        name: "APV SGX MT AB",
        otr: 253900000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Silky Silver", hex: "#d4d4d8" },
          { name: "Real Black", hex: "#020617" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 8,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Velg Alloy", "Interior Lebih Lengkap"]
        }
      }
    ]
  },

  // ================== COMMERCIAL ==================
  {
    id: "apv-blindvan",
    name: "APV Blind Van",
    category: "commercial",
    image: "APV BLIND VAN.jpg",
    variants: [
      {
        id: "blindvan",
        name: "Blind Van",
        otr: 185200000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Silky Silver", hex: "#d4d4d8" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 2,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Ruang Kargo Luas"]
        }
      }
    ]
  },

  {
    id: "new-carry",
    name: "New Carry Pickup",
    category: "commercial",
    image: "White-NEW_CARRY_PICK-UP.png",
    variants: [
      {
        id: "fd",
        name: "Pick Up FD",
        otr: 175500000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Pearl Red", hex: "#b91c1c" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 2,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Flat Deck", "Bak Luas"]
        }
      },
      {
        id: "wd",
        name: "Pick Up WD",
        otr: 176600000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Real Black", hex: "#020617" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 2,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Wide Deck", "Bak Lebih Lebar"]
        }
      },
      {
        id: "fd-ac-ps",
        name: "Pick Up FD AC PS",
        otr: 183500000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Silky Silver", hex: "#d4d4d8" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 2,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Flat Deck", "AC", "Power Steering"]
        }
      },
      {
        id: "wd-ac-ps",
        name: "Pick Up WD AC PS",
        otr: 184400000,
        colors: [
          { name: "Superior White", hex: "#f9fafb" },
          { name: "Real Black", hex: "#020617" }
        ],
        specs: {
          engine: "1.5L",
          transmission: "Manual",
          passengers: 2,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Wide Deck", "AC", "Power Steering"]
        }
      }
    ]
  }
];
/* (FULL PRODUCTS ARRAY END) */

/* ================================================================
   2. DATA FOTO SERAH TERIMA / GALERI (FULL)
================================================================ */
const deliveryImages = [
  { id: "d1",  image: "bengkel-suzuki-soekarno-hatta.jpg", caption: "Bengkel Resmi Suzuki Soekarno Hatta Bandung" },
  { id: "d2",  image: "dealer-suzuki-bandung.jpg", caption: "Dealer Suzuki Bandung" },
  { id: "d3",  image: "dealer-suzuki-soekarno-hatta.jpg", caption: "Dealer Suzuki NJS Soekarno Hatta" },
  { id: "d4",  image: "dp-suzuki-bandung.jpg", caption: "DP Ringan Suzuki Bandung" },
  { id: "d5",  image: "harga-suzuki-bandung.jpg", caption: "Harga Mobil Suzuki Bandung" },
  { id: "d6",  image: "kontak-suzuki-bandung.jpg", caption: "Kontak Sales Suzuki Bandung" },
  { id: "d7",  image: "kredit-suzuki-soekarno-hatta.jpg", caption: "Kredit Suzuki Soekarno Hatta" },
  { id: "d8",  image: "kredit-suzuki-bandung.jpg", caption: "Simulasi Kredit Suzuki Bandung" },
  { id: "d9",  image: "marketing-suzuki-bandung.jpg", caption: "Marketing / Sales Suzuki Bandung" },
  { id: "d10", image: "promo-carry-bandung.jpg", caption: "Promo Suzuki Carry Bandung" },
  { id: "d11", image: "promo-ertiga-bandung.jpg", caption: "Promo Ertiga Hybrid Bandung" },
  { id: "d12", image: "promo-xl7-bandung.jpg", caption: "Promo XL7 Bandung" },
  { id: "d13", image: "servis-suzuki-bandung.jpg", caption: "Servis Resmi Suzuki Bandung" },
  { id: "d14", image: "showroom-suzuki-bandung.jpg", caption: "Showroom Suzuki Bandung" },
  { id: "d15", image: "sparepart-suzuki-bandung.jpg", caption: "Sparepart Resmi Suzuki Bandung" },
  { id: "d16", image: "suzuki-all-new-ertiga-bandung.jpg", caption: "Suzuki All New Ertiga Bandung" },
  { id: "d17", image: "suzuki-baleno-bandung.jpg", caption: "Suzuki Baleno Bandung" },
  { id: "d18", image: "suzuki-bandung-resmi.jpg", caption: "Dealer Suzuki Resmi Bandung" },
  { id: "d19", image: "suzuki-baru-bandung.jpg", caption: "Suzuki Mobil Baru Bandung" },
  { id: "d20", image: "suzuki-carry-pickup-bandung.jpg", caption: "Suzuki Carry Pick Up Bandung" },
  { id: "d21", image: "suzuki-ertiga-hybrid-bandung.jpg", caption: "Suzuki Ertiga Hybrid Bandung" },
  { id: "d22", image: "suzuki-ertiga-hybrid-soekarno-hatta.jpg", caption: "Ertiga Hybrid Suzuki NJS Soekarno Hatta" },
  { id: "d23", image: "suzuki-hybrid-bandung.jpg", caption: "Suzuki Hybrid Bandung" },
  { id: "d24", image: "suzuki-ignis-bandung.jpg", caption: "Suzuki Ignis Bandung" },
  { id: "d25", image: "suzuki-jimny-bandung.jpg", caption: "Suzuki Jimny Bandung" },
  { id: "d26", image: "suzuki-mobil-baru-bandung.jpg", caption: "Jual Mobil Baru Suzuki Bandung" },
  { id: "d27", image: "suzuki-mpv-bandung.jpg", caption: "MPV Suzuki Bandung" },
  { id: "d28", image: "suzuki-soekarno-hatta-bandung.jpg", caption: "Suzuki NJS Soekarno Hatta Bandung" },
  { id: "d29", image: "suzuki-terpercaya-bandung.jpg", caption: "Dealer Suzuki Terpercaya Bandung" },
  { id: "d30", image: "suzuki-vitara-bandung.jpg", caption: "Suzuki Grand Vitara Bandung" },
  { id: "d31", image: "suzuki-xl7-bandung.jpg", caption: "Suzuki XL7 Bandung" },
  { id: "d32", image: "suzuki-xl7-hybrid-bandung.jpg", caption: "Suzuki XL7 Hybrid Bandung" },
 { id: "d33", image: "test-drive-suzuki-bandung.jpg", caption: "Test Drive Konsumen Suzuki Bandung" },
{ id: "d34", image: "serah-terima.jpeg", caption: "Serah Terima Unit Suzuki Bandung" },
{ id: "d35", image: "serah-terima1.jpeg", caption: "Pengiriman Mobil Suzuki Bandung" }

];

/* ================================================================
   3. HELPERS
================================================================ */
function qs(id) { return document.getElementById(id); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

function formatRupiah(angka) {
  if (angka === null || angka === undefined) return "0";
  const n = Number(angka) || 0;
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function parseRupiah(str) {
  if (!str) return 0;
  return Number(String(str).replace(/[^\d]/g, "")) || 0;
}

/* ================================================================
   4. INIT INPUT RUPIAH
================================================================ */
function initRupiahInputs() {
  qsa(".rupiah-input").forEach(input => {
    input.addEventListener("input", function () {
      let angka = this.value.replace(/[^\d]/g, "");
      angka = angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      this.value = angka;
    });
  });
}

/* ================================================================
   5. NAVBAR MOBILE TOGGLE
================================================================ */
function initNavbar() {
  const toggle = qs("nav-toggle");
  const nav = qs("nav-menu");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  qsa("#nav-menu a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

/* ================================================================
   6. RENDER KARTU PRODUK + BADGE
================================================================ */
function renderProducts() {
  const listEl = qs("product-list");
  if (!listEl) {
    console.warn("renderProducts: #product-list not found.");
    return;
  }
  listEl.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card product-card";
    card.dataset.category = product.category || "passenger";

    let badgeHTML = "";
    if (product.badge === "new") badgeHTML = `<div class="product-badge badge-new">NEW LAUNCH</div>`;
    else if (product.badge === "kuro") badgeHTML = `<div class="product-badge badge-kuro">KURO EDITION</div>`;

    const imgHTML = product.image ? `<img src="${product.image}" alt="${product.name || ''}" loading="lazy" />` : `<div style="padding:18px;text-align:center;color:#6b7280;">No Image</div>`;
    const variantCount = Array.isArray(product.variants) ? product.variants.length : 0;

    card.innerHTML = `
      ${badgeHTML}
      <div class="product-image">${imgHTML}</div>
      <div class="product-name">${product.name || "Produk"}</div>
      <div class="product-category">${product.category === "commercial" ? "Commercial" : "Passenger"}</div>
      <div class="product-meta">Tersedia ${variantCount} tipe</div>
      <div class="product-meta">Klik untuk lihat tipe, spesifikasi, dan simulasi kredit</div>
    `;

    card.addEventListener("click", () => {
      if (typeof openProductModal === "function") openProductModal(product.id);
    });

    listEl.appendChild(card);
  });
}

/* ================================================================
   7. FILTER KATEGORI
================================================================ */
function initCategoryFilter() {
  const buttons = qsa(".category-buttons .btn-chip");
  const cardsContainer = qs("product-list");
  if (!cardsContainer || !buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      const cards = cardsContainer.querySelectorAll(".product-card");
      cards.forEach(card => {
        const cat = card.dataset.category;
        card.style.display = (filter === "all" || filter === cat) ? "" : "none";
      });
    });
  });
}

/* ================================================================
   8. MODAL PRODUK (DETAIL + SPECS + WARNA)
================================================================ */
let currentProduct = null;
let currentVariant = null;

function openProductModal(productId) {
  currentProduct = products.find((p) => p.id === productId);
  if (!currentProduct) {
    console.error("openProductModal: product not found", productId);
    return;
  }

  currentVariant = (currentProduct.variants && currentProduct.variants[0]) || null;

  const overlay = qs("product-modal") || qs("productModal");
  if (!overlay) {
    console.error("openProductModal: #product-modal not found in DOM");
    return;
  }

  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");

  renderProductModalHeader();
  renderVariantButtons();
  updateProductModalView();
}

function closeProductModal() {
  const overlay = qs("product-modal") || qs("productModal");
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
}

function renderProductModalHeader() {
  if (!currentProduct) return;

  const nameEl = qs("modal-product-name");
  const catEl = qs("modal-product-category");
  const imgEl = qs("modal-product-image"); // could be <img> or wrapper
  const descEl = qs("modal-product-description");

  if (nameEl) nameEl.textContent = currentProduct.name || "-";
  if (catEl) catEl.textContent = currentProduct.category === "passenger" ? "Kategori: Passenger" : "Kategori: Commercial";
  if (descEl) descEl.textContent = currentProduct.description || "";

  if (imgEl) {
    if (imgEl.tagName && imgEl.tagName.toLowerCase() === "img") {
      if (currentProduct.image) {
        imgEl.src = currentProduct.image;
        imgEl.alt = currentProduct.name || "";
      } else {
        imgEl.removeAttribute("src");
        imgEl.alt = currentProduct.name || "";
      }
    } else {
      imgEl.innerHTML = currentProduct.image ? `<img src="${currentProduct.image}" alt="${currentProduct.name || ''}" />` : `<div style="padding:24px;text-align:center;font-size:.9rem;">Gambar Mobil ${currentProduct.name}</div>`;
    }
  }
}

function renderVariantButtons() {
  const container = qs("variant-buttons");
  if (!container) {
    console.warn("renderVariantButtons: #variant-buttons not found - add it to modal HTML.");
    return;
  }
  container.innerHTML = "";

  if (!currentProduct || !Array.isArray(currentProduct.variants) || currentProduct.variants.length === 0) {
    container.innerHTML = `<p style="font-size:.85rem;color:#6b7280;">Tipe tidak tersedia.</p>`;
    return;
  }

  currentProduct.variants.forEach((variant) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "variant-button";
    btn.textContent = variant.name || "Tipe";
    if (currentVariant && variant.id === currentVariant.id) btn.classList.add("active");
    btn.addEventListener("click", () => {
      setActiveVariant(currentProduct.id, variant.id);
    });
    container.appendChild(btn);
  });
}

function setActiveVariant(productId, variantId) {
  if (!currentProduct || currentProduct.id !== productId) {
    currentProduct = products.find((p) => p.id === productId) || currentProduct;
  }
  if (!currentProduct) return;
  currentVariant = (currentProduct.variants || []).find((v) => v.id === variantId) || currentProduct.variants[0] || null;
  renderVariantButtons();
  updateProductModalView();
}

function renderColorButtons(variant) {
  const container = qs("color-buttons");
  if (!container) {
    console.warn("renderColorButtons: #color-buttons not found - add it to modal HTML.");
    return;
  }
  container.innerHTML = "";

  const colors = (variant && variant.colors) || [];
  if (!colors.length) {
    container.innerHTML = `<p style="font-size:.85rem;color:#6b7280;">Warna mengikuti ketersediaan stok dealer.</p>`;
    return;
  }

  variant._selectedColor = variant._selectedColor || colors[0];

  colors.forEach((color) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "color-button";
    btn.style.background = color.hex || "#e5e7eb";
    btn.title = color.name || "";
    if (variant._selectedColor && variant._selectedColor.name === color.name) btn.classList.add("active");
    btn.addEventListener("click", () => {
      variant._selectedColor = color;
      container.querySelectorAll(".color-button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    container.appendChild(btn);
  });
}

function updateProductModalView() {
  if (!currentVariant) {
    console.warn("updateProductModalView: currentVariant undefined.");
    return;
  }

  const priceEl = qs("modal-price") || qs("modal-product-price") || qs("modal-price-display");
  if (priceEl) priceEl.textContent = "Rp " + formatRupiah(currentVariant.otr || 0);

  const briefList = qs("modal-brief-specs") || qs("modal-specs-quick-list");
  if (briefList) {
    briefList.innerHTML = "";
    const s = currentVariant.specs || {};
    const briefItems = [
      `Mesin: ${s.engine || "-"}`,
      `Transmisi: ${s.transmission || "-"}`,
      `Kapasitas Penumpang: ${s.passengers || "-"}`
    ];
    briefItems.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      briefList.appendChild(li);
    });
  }

  const detailEl = qs("modal-specs-detail");
  if (detailEl) {
    const s = currentVariant.specs || {};
    const safety = (s.safety || []).join(", ") || "-";
    const features = (s.features || []).join(", ") || "-";
    const colors = (currentVariant.colors || []).map(c => c.name);
    detailEl.innerHTML = `
      <h4>Mesin & Performa</h4><p>${s.engine || "-"}</p>
      <h4>Transmisi</h4><p>${s.transmission || "-"}</p>
      <h4>Kapasitas Penumpang</h4><p>${s.passengers || "-"}</p>
      <h4>Fitur Keselamatan</h4><p>${safety}</p>
      <h4>Fitur Hiburan & Kenyamanan</h4><p>${features}</p>
      <h4>Pilihan Warna</h4><p>${colors.length ? colors.join(", ") : "Warna mengikuti ketersediaan stok dealer."}</p>
    `;
  }

  renderColorButtons(currentVariant);

  const priceInput = qs("modal-price-input");
  if (priceInput) priceInput.value = formatRupiah(currentVariant.otr || 0);
}

/* ================================================================
   9. TAB MODAL
================================================================ */
function initModalTabs() {
  const tabButtons = qsa(".tab-button");
  const tabSpecs = qs("tab-specs");
  const tabSimulation = qs("tab-simulation");
  if (!tabButtons.length) return;
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.tab;
      if (tab === "specs") {
        if (tabSpecs) tabSpecs.classList.remove("hidden");
        if (tabSimulation) tabSimulation.classList.add("hidden");
      } else {
        if (tabSpecs) tabSpecs.classList.add("hidden");
        if (tabSimulation) tabSimulation.classList.remove("hidden");
      }
    });
  });
}

/* ================================================================
   10. RUMUS SIMULASI KREDIT (FLAT)
================================================================ */
function calculateInstallment(price, dp, tenor, interestRateYearly) {
  const principal = price - dp;
  if (principal <= 0 || tenor <= 0) {
    return {
      monthlyInstallment: 0,
      totalPayment: 0,
      totalDP: dp
    };
  }

  const monthlyInterestRate = (interestRateYearly / 100) / 24; // NOTE: kept original monthly calc? using /12 earlier. Use /12.
  // revert to /12 to be correct monthly:
  const monthlyInterest = (interestRateYearly / 100) / 12;
  const interestPerMonth = principal * monthlyInterest;
  const principalPerMonth = principal / tenor;
  const monthlyInstallment = principalPerMonth + interestPerMonth;
  const totalPayment = monthlyInstallment * tenor + dp;

  return {
    monthlyInstallment,
    totalPayment,
    totalDP: dp
  };
}

/* ================================================================
   11. FORM SIMULASI DI MODAL
================================================================ */
function initModalSimulationForm() {
  const form = qs("modal-simulation-form");
  const resultEl = qs("modal-simulation-result");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const price = parseRupiah(qs("modal-price-input") ? qs("modal-price-input").value : "0");
    const dp = parseRupiah(qs("modal-dp-input") ? qs("modal-dp-input").value : "0");
    const tenor = Number(qs("modal-tenor-input") ? qs("modal-tenor-input").value : 0);
    const interest = Number(qs("modal-interest-input") ? qs("modal-interest-input").value : 0);

    const { monthlyInstallment, totalPayment, totalDP } = calculateInstallment(
      price,
      dp,
      tenor,
      interest
    );

    if (resultEl) {
      resultEl.innerHTML = `
        <p><strong>Total DP:</strong> Rp ${formatRupiah(Math.round(totalDP))}</p>
        <p><strong>Cicilan per bulan:</strong> Rp ${formatRupiah(Math.round(monthlyInstallment))}</p>
        <p><strong>Total pembayaran (termasuk DP):</strong> Rp ${formatRupiah(Math.round(totalPayment))}</p>
        <p style="margin-top:8px;font-size:.8rem;color:#6b7280;">*Simulasi ini hanya ilustrasi. Paket resmi dan perhitungan aktual akan disesuaikan dengan SOP perusahaan dan leasing.</p>
      `;
    }
  });
}

/* ================================================================
   12. SIMULASI GLOBAL
================================================================ */
function initGlobalSimulation() {
  const productSelect = qs("global-product-select");
  const variantSelect = qs("global-variant-select");
  const priceInput = qs("global-price-input");
  const dpInput = qs("global-dp-input");
  const tenorInput = qs("global-tenor-input");
  const interestInput = qs("global-interest-input");
  const form = qs("global-simulation-form");
  const resultEl = qs("global-simulation-result");

  if (!productSelect || !variantSelect || !form) {
    // not present on page - skip
    return;
  }

  productSelect.innerHTML = "";
  variantSelect.innerHTML = "";

  products.forEach((p, index) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name || ("Produk " + (index+1));
    if (index === 0) opt.selected = true;
    productSelect.appendChild(opt);
  });

  function updateVariants() {
    const productId = productSelect.value;
    const product = products.find((p) => p.id === productId);
    variantSelect.innerHTML = "";
    if (!product || !Array.isArray(product.variants)) {
      const opt = document.createElement("option");
      opt.value = "";
      opt.textContent = "Tipe tidak tersedia";
      variantSelect.appendChild(opt);
      if (priceInput) priceInput.value = "";
      return;
    }
    product.variants.forEach((v, idx) => {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = v.name || ("Tipe " + (idx+1));
      if (idx === 0) opt.selected = true;
      variantSelect.appendChild(opt);
    });
    updatePriceFromSelection();
  }

  function updatePriceFromSelection() {
    const productId = productSelect.value;
    const variantId = variantSelect.value;
    const product = products.find((p) => p.id === productId);
    if (!product) { if (priceInput) priceInput.value = ""; return; }
    const variant = product.variants.find((v) => v.id === variantId) || product.variants[0];
    if (!variant) { if (priceInput) priceInput.value = ""; return; }
    if (priceInput) priceInput.value = formatRupiah(variant.otr);
  }

  productSelect.addEventListener("change", updateVariants);
  variantSelect.addEventListener("change", updatePriceFromSelection);

  if (productSelect.options.length) productSelect.selectedIndex = 0;
  updateVariants();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const price = parseRupiah(priceInput ? priceInput.value : "0");
    const dp = parseRupiah(dpInput ? dpInput.value : "0");
    const tenor = Number(tenorInput ? tenorInput.value : 0);
    const interest = Number(interestInput ? interestInput.value : 0);

    const { monthlyInstallment, totalPayment, totalDP } = calculateInstallment(price, dp, tenor, interest);

    if (resultEl) {
      resultEl.innerHTML = `
        <p><strong>Total DP:</strong> Rp ${formatRupiah(Math.round(totalDP))}</p>
        <p><strong>Cicilan per bulan:</strong> Rp ${formatRupiah(Math.round(monthlyInstallment))}</p>
        <p><strong>Total pembayaran (termasuk DP):</strong> Rp ${formatRupiah(Math.round(totalPayment))}</p>
        <p style="margin-top:8px;font-size:.8rem;color:#6b7280;">*Simulasi ini hanya ilustrasi. Paket resmi dan perhitungan aktual akan disesuaikan dengan SOP perusahaan dan leasing.</p>
      `;
    }
  });
}

/* ================================================================
   13. CONTACT FORM (DUMMY)
================================================================ */
function initContactForm() {
  const form = qs("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Terima kasih, pesan Anda sudah tercatat.\nIntegrasi ke WhatsApp / email dapat ditambahkan di bagian ini.");
    form.reset();
  });
}

/* ================================================================
   14. GALERI SERAH TERIMA
================================================================ */
function renderDeliveryGallery() {
  const el = qs("delivery-gallery");
  if (!el) return;
  el.innerHTML = "";
  (deliveryImages || []).forEach(item => {
    const div = document.createElement("div");
    div.className = "delivery-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.caption || "Serah terima mobil Suzuki"}" loading="lazy">
    `;
    div.addEventListener("click", () => openDeliveryModal(item.image, item.caption));
    el.appendChild(div);
  });
}

function openDeliveryModal(image, caption) {
  const imgEl = qs("delivery-modal-img");
  const overlay = qs("delivery-modal");
  if (!imgEl || !overlay) return;
  imgEl.src = image;
  imgEl.alt = caption || "Serah terima mobil Suzuki";
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");
}

function closeDeliveryModal() {
  const overlay = qs("delivery-modal");
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
}

/* ================================================================
   15. PAGINATION KARTU LANDING / ARTIKEL (6 PER HALAMAN)
================================================================ */
function initLandingPagination() {
  const grid = document.querySelector(".landing-links-grid");
  const paginationEl = qs("landing-pagination");
  if (!grid || !paginationEl) return;

  const cards = Array.from(grid.querySelectorAll(".landing-card"));
  const pageSize = 6;
  const totalPages = Math.ceil(cards.length / pageSize);

  if (totalPages <= 1) {
    paginationEl.innerHTML = "";
    return;
  }

  let currentPage = 1;

  function showPage(page) {
    currentPage = page;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    cards.forEach((card, index) => {
      card.style.display = index >= start && index < end ? "" : "none";
    });

    renderPagination();
  }

  function createPageButton(label, page, disabled = false, isActive = false) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = label;
    btn.className = "landing-page-btn";

    if (disabled) {
      btn.classList.add("disabled");
      return btn;
    }

    if (isActive) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      if (page === currentPage) return;
      showPage(page);
      window.scrollTo({
        top: grid.getBoundingClientRect().top + window.scrollY - 120,
        behavior: "smooth"
      });
    });

    return btn;
  }

  function renderPagination() {
    paginationEl.innerHTML = "";

    const prevDisabled = currentPage === 1;
    paginationEl.appendChild(createPageButton("«", currentPage - 1, prevDisabled));

    for (let p = 1; p <= totalPages; p++) {
      const isActive = p === currentPage;
      paginationEl.appendChild(createPageButton(String(p), p, false, isActive));
    }

    const nextDisabled = currentPage === totalPages;
    paginationEl.appendChild(createPageButton("»", currentPage + 1, nextDisabled));
  }

  showPage(1);
}

/* ================================================================
   16. INIT – JALANKAN SAAT PAGE SIAP
================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  try {
    const yearEl = qs("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initNavbar();
    renderProducts();
    initCategoryFilter();
    initRupiahInputs();
    initModalTabs();
    initModalSimulationForm();
    initGlobalSimulation();
    initContactForm();
    renderDeliveryGallery();
    initLandingPagination();

    // modal close wiring (support multiple id names)
    const modalClose = qs("modal-close") || qs("product-modal-close") || qs("modal-close-btn");
    const modalOverlay = qs("product-modal") || qs("productModal");
    if (modalClose && modalOverlay) {
      modalClose.addEventListener("click", closeProductModal);
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) closeProductModal();
      });
    }

    const dClose = qs("delivery-modal-close");
    const dOverlay = qs("delivery-modal");
    if (dClose && dOverlay) {
      dClose.addEventListener("click", closeDeliveryModal);
      dOverlay.addEventListener("click", (e) => {
        if (e.target === dOverlay) closeDeliveryModal();
      });
    }
  } catch (err) {
    console.error("Initialization error:", err);
  }

});

/* =====================================================
   RAMADHAN KETUPAT ANIMATION
===================================================== */

function createKetupat() {
  const container = document.querySelector(".ketupat-container");
  if (!container) return;

  const ketupat = document.createElement("div");
  ketupat.classList.add("ketupat");

  ketupat.style.left = Math.random() * window.innerWidth + "px";
  ketupat.style.animationDuration = 5 + Math.random() * 5 + "s";

  container.appendChild(ketupat);

  setTimeout(() => {
    ketupat.remove();
  }, 10000);
}

setInterval(createKetupat, 800);

/* =====================================================
   RAMADHAN PREMIUM FLOATING KETUPAT
===================================================== */

function createKetupat() {
  const container = document.querySelector(".ketupat-container");
  if (!container) return;

  const ketupat = document.createElement("div");
  ketupat.classList.add("ketupat");

  ketupat.style.left = Math.random() * window.innerWidth + "px";
  ketupat.style.animationDuration = 8 + Math.random() * 5 + "s";

  container.appendChild(ketupat);

  setTimeout(() => {
    ketupat.remove();
  }, 12000);
}

setInterval(createKetupat, 1200);

/* =====================================================
   RAMADHAN COUNTDOWN
===================================================== */

function updateRamadhanCountdown() {

  // SET TARGET TANGGAL (UBAH SESUAI KEBUTUHAN)
  const targetDate = new Date("March 18, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("rd-hari").innerText = days.toString().padStart(2, "0");
  document.getElementById("rd-jam").innerText = hours.toString().padStart(2, "0");
  document.getElementById("rd-menit").innerText = minutes.toString().padStart(2, "0");
  document.getElementById("rd-detik").innerText = seconds.toString().padStart(2, "0");
}

setInterval(updateRamadhanCountdown, 1000);

