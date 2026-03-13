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
