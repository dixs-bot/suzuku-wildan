/*******************************************************************
  SUZUKI NJS SOEKARNO HATTA – script.js

  • Data produk Suzuki (passenger + commercial) + VARIAN WARNA
  • XL7 Kuro + harga khusus
  • Badge FRONX (NEW LAUNCH) & XL7 (KURO EDITION)
  • Modal detail + simulasi kredit
  • Global simulasi kredit
  • Galeri serah terima (delivery)
  • Selector warna dengan tombol (per varian)
********************************************************************/

/* ================================================================
   1. DATA PRODUK SUZUKI (SEMUA VARIAN PUNYA WARNA)
================================================================ */

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

/* ================================================================
   2. DATA FOTO SERAH TERIMA / GALERI
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
  { id: "d33", image: "test-drive-suzuki-bandung.jpg", caption: "Test Drive Suzuki Bandung" }
];

/* ================================================================
   3. HELPER: FORMAT & INPUT RUPIAH
================================================================ */

function formatRupiah(angka) {
  if (!angka && angka !== 0) return "0";
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function parseRupiah(str) {
  if (!str) return 0;
  return Number(str.toString().replace(/\./g, ""));
}

function initRupiahInputs() {
  const inputs = document.querySelectorAll(".rupiah-input");
  inputs.forEach((input) => {
    input.addEventListener("keyup", function () {
      let angka = this.value.replace(/[^,\d]/g, "");
      angka = angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      this.value = angka;
    });
  });
}

/* ================================================================
   4. NAVBAR MOBILE TOGGLE
================================================================ */

function initNavbar() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-menu");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

/* ================================================================
   5. RENDER KARTU PRODUK + BADGE
================================================================ */

function renderProducts() {
  const listEl = document.getElementById("product-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card product-card";
    card.dataset.category = product.category;

    let badgeHTML = "";
    if (product.badge === "new") {
      badgeHTML = `<div class="product-badge badge-new">NEW LAUNCH</div>`;
    } else if (product.badge === "kuro") {
      badgeHTML = `<div class="product-badge badge-kuro">KURO EDITION</div>`;
    }

    const variantCount = product.variants.length;

    card.innerHTML = `
      ${badgeHTML}
      <div class="product-image">
        ${
          product.image
            ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />`
            : "Gambar Mobil"
        }
      </div>
      <div class="product-name">${product.name}</div>
      <div class="product-category">
        ${product.category === "passenger" ? "Passenger" : "Commercial"}
      </div>
      <div class="product-meta">Tersedia ${variantCount} tipe</div>
      <div class="product-meta">Klik untuk lihat tipe, spesifikasi, dan simulasi kredit</div>
    `;

    card.addEventListener("click", () => {
      openProductModal(product.id);
    });

    listEl.appendChild(card);
  });
}

/* ================================================================
   6. FILTER KATEGORI
================================================================ */

function initCategoryFilter() {
  const buttons = document.querySelectorAll(".category-buttons .btn-chip");
  const cardsContainer = document.getElementById("product-list");
  if (!cardsContainer) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const cards = cardsContainer.querySelectorAll(".product-card");
      cards.forEach((card) => {
        const cat = card.dataset.category;
        if (filter === "all" || filter === cat) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ================================================================
   7. MODAL PRODUK (DETAIL + SPECS + WARNA)
================================================================ */

let currentProduct = null;
let currentVariant = null;

function openProductModal(productId) {
  currentProduct = products.find((p) => p.id === productId);
  if (!currentProduct) return;

  currentVariant = currentProduct.variants[0];

  const overlay = document.getElementById("product-modal");
  overlay.classList.remove("hidden");

  renderProductModalHeader();
  renderVariantButtons();
  updateProductModalView();
}

function closeProductModal() {
  const overlay = document.getElementById("product-modal");
  overlay.classList.add("hidden");
}

function renderProductModalHeader() {
  const nameEl = document.getElementById("modal-product-name");
  const catEl = document.getElementById("modal-product-category");
  const imgEl = document.getElementById("modal-product-image");

  if (!currentProduct) return;

  nameEl.textContent = currentProduct.name;
  catEl.textContent =
    currentProduct.category === "passenger"
      ? "Kategori: Passenger"
      : "Kategori: Commercial";

  if (currentProduct.image) {
    imgEl.innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}" />`;
  } else {
    imgEl.innerHTML = `<div style="padding:24px;text-align:center;font-size:.9rem;">Gambar Mobil ${currentProduct.name}</div>`;
  }
}

function renderVariantButtons() {
  const container = document.getElementById("variant-buttons");
  container.innerHTML = "";

  currentProduct.variants.forEach((variant) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "variant-button";
    btn.textContent = variant.name;
    if (variant.id === currentVariant.id) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => {
      setActiveVariant(currentProduct.id, variant.id);
    });
    container.appendChild(btn);
  });
}

function setActiveVariant(productId, variantId) {
  if (!currentProduct || currentProduct.id !== productId) {
    currentProduct = products.find((p) => p.id === productId);
  }
  currentVariant = currentProduct.variants.find((v) => v.id === variantId);
  renderVariantButtons();
  updateProductModalView();
}

/* === RENDER TOMBOL PILIH WARNA (SELECTOR) === */
function renderColorButtons(variant) {
  const container = document.getElementById("color-buttons");
  if (!container) return;
  container.innerHTML = "";

  const colors = variant.colors || [];
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
    btn.title = color.name;

    if (color === variant._selectedColor) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      variant._selectedColor = color;
      container.querySelectorAll(".color-button").forEach((b) =>
        b.classList.remove("active")
      );
      btn.classList.add("active");
    });

    container.appendChild(btn);
  });
}

function updateProductModalView() {
  if (!currentVariant) return;

  const priceEl = document.getElementById("modal-price");
  priceEl.textContent = "Rp " + formatRupiah(currentVariant.otr);

  const briefList = document.getElementById("modal-brief-specs");
  briefList.innerHTML = "";
  const s = currentVariant.specs;
  const briefItems = [
    `Mesin: ${s.engine || "-"}`,
    `Transmisi: ${s.transmission || "-"}`,
    `Kapasitas Penumpang: ${s.passengers || "-"}`
  ];

  briefItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    briefList.appendChild(li);
  });

  const detailEl = document.getElementById("modal-specs-detail");
  const safety = (s.safety || []).join(", ") || "-";
  const features = (s.features || []).join(", ") || "-";
  const colors = (currentVariant.colors || []).map((c) => c.name);

  detailEl.innerHTML = `
    <h4>Mesin & Performa</h4>
    <p>${s.engine || "-"}</p>

    <h4>Transmisi</h4>
    <p>${s.transmission || "-"}</p>

    <h4>Kapasitas Penumpang</h4>
    <p>${s.passengers || "-"}</p>

    <h4>Fitur Keselamatan</h4>
    <p>${safety}</p>

    <h4>Fitur Hiburan & Kenyamanan</h4>
    <p>${features}</p>

    <h4>Pilihan Warna</h4>
    <p>${colors.length ? colors.join(", ") : "Warna mengikuti ketersediaan stok dealer."}</p>
  `;

  renderColorButtons(currentVariant);

  const priceInput = document.getElementById("modal-price-input");
  if (priceInput) {
    priceInput.value = formatRupiah(currentVariant.otr);
  }
}

/* ================================================================
   8. TAB MODAL (SPECS / SIMULASI)
================================================================ */

function initModalTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabSpecs = document.getElementById("tab-specs");
  const tabSimulation = document.getElementById("tab-simulation");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const tab = btn.dataset.tab;
      if (tab === "specs") {
        tabSpecs.classList.remove("hidden");
        tabSimulation.classList.add("hidden");
      } else {
        tabSpecs.classList.add("hidden");
        tabSimulation.classList.remove("hidden");
      }
    });
  });
}

/* ================================================================
   9. RUMUS SIMULASI KREDIT (FLAT CONTOH)
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

  const monthlyInterestRate = (interestRateYearly / 100) / 12;
  const interestPerMonth = principal * monthlyInterestRate;
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
   10. FORM SIMULASI DI MODAL
================================================================ */

function initModalSimulationForm() {
  const form = document.getElementById("modal-simulation-form");
  const resultEl = document.getElementById("modal-simulation-result");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const price = parseRupiah(document.getElementById("modal-price-input").value);
    const dp = parseRupiah(document.getElementById("modal-dp-input").value);
    const tenor = Number(document.getElementById("modal-tenor-input").value || 0);
    const interest = Number(document.getElementById("modal-interest-input").value || 0);

    const { monthlyInstallment, totalPayment, totalDP } = calculateInstallment(
      price,
      dp,
      tenor,
      interest
    );

    resultEl.innerHTML = `
      <p><strong>Total DP:</strong> Rp ${formatRupiah(Math.round(totalDP))}</p>
      <p><strong>Cicilan per bulan:</strong> Rp ${formatRupiah(Math.round(monthlyInstallment))}</p>
      <p><strong>Total pembayaran (termasuk DP):</strong> Rp ${formatRupiah(Math.round(totalPayment))}</p>
      <p style="margin-top:8px;font-size:.8rem;color:#6b7280;">*Simulasi ini hanya ilustrasi. Paket resmi dan perhitungan aktual akan disesuaikan dengan SOP perusahaan dan leasing.</p>
    `;
  });
}

/* ================================================================
   11. SIMULASI KREDIT GLOBAL
================================================================ */

function initGlobalSimulation() {
  const productSelect = document.getElementById("global-product-select");
  const variantSelect = document.getElementById("global-variant-select");
  const priceInput = document.getElementById("global-price-input");
  const dpInput = document.getElementById("global-dp-input");
  const tenorInput = document.getElementById("global-tenor-input");
  const interestInput = document.getElementById("global-interest-input");
  const form = document.getElementById("global-simulation-form");
  const resultEl = document.getElementById("global-simulation-result");

  if (!productSelect || !variantSelect || !form) return;

  products.forEach((p, index) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    if (index === 0) opt.selected = true;
    productSelect.appendChild(opt);
  });

  function updateVariants() {
    const productId = productSelect.value;
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    variantSelect.innerHTML = "";
    product.variants.forEach((v, index) => {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = v.name;
      if (index === 0) opt.selected = true;
      variantSelect.appendChild(opt);
    });
    updatePriceFromSelection();
  }

  function updatePriceFromSelection() {
    const productId = productSelect.value;
    const variantId = variantSelect.value;
    const product = products.find((p) => p.id === productId);
    if (!product) return;
    const variant = product.variants.find((v) => v.id === variantId);
    if (!variant) return;
    priceInput.value = formatRupiah(variant.otr);
  }

  productSelect.addEventListener("change", updateVariants);
  variantSelect.addEventListener("change", updatePriceFromSelection);

  updateVariants();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const price = parseRupiah(priceInput.value);
    const dp = parseRupiah(dpInput.value);
    const tenor = Number(tenorInput.value || 0);
    const interest = Number(interestInput.value || 0);

    const { monthlyInstallment, totalPayment, totalDP } = calculateInstallment(
      price,
      dp,
      tenor,
      interest
    );

    resultEl.innerHTML = `
      <p><strong>Total DP:</strong> Rp ${formatRupiah(Math.round(totalDP))}</p>
      <p><strong>Cicilan per bulan:</strong> Rp ${formatRupiah(Math.round(monthlyInstallment))}</p>
      <p><strong>Total pembayaran (termasuk DP):</strong> Rp ${formatRupiah(Math.round(totalPayment))}</p>
      <p style="margin-top:8px;font-size:.8rem;color:#6b7280;">*Simulasi ini hanya ilustrasi. Paket resmi dan perhitungan aktual akan disesuaikan dengan SOP perusahaan dan leasing.</p>
    `;
  });
}

/* ================================================================
   12. FORM KONTAK (DUMMY)
================================================================ */

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Terima kasih, pesan Anda sudah tercatat.\nIntegrasi ke WhatsApp / email dapat ditambahkan di bagian ini."
    );
    form.reset();
  });
}

/* ================================================================
   13. GALERI SERAH TERIMA
================================================================ */

function renderDeliveryGallery() {
  const el = document.getElementById("delivery-gallery");
  if (!el) return;
  el.innerHTML = "";

  deliveryImages.forEach((item) => {
    const div = document.createElement("div");
    div.className = "delivery-item";
    div.innerHTML = `
      <img src="${item.image}" 
           alt="${item.caption || "Serah terima mobil Suzuki"}" 
           loading="lazy">
    `;
    div.addEventListener("click", () => openDeliveryModal(item.image, item.caption));
    el.appendChild(div);
  });
}

function openDeliveryModal(image, caption) {
  const imgEl = document.getElementById("delivery-modal-img");
  const overlay = document.getElementById("delivery-modal");
  if (!imgEl || !overlay) return;
  imgEl.src = image;
  imgEl.alt = caption || "Serah terima mobil Suzuki";
  overlay.classList.remove("hidden");
}

function closeDeliveryModal() {
  const overlay = document.getElementById("delivery-modal");
  if (!overlay) return;
  overlay.classList.add("hidden");
}

/* ================================================================
   14. INIT – JALANKAN SAAT PAGE SIAP
================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
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

  const modalClose = document.getElementById("modal-close");
  const modalOverlay = document.getElementById("product-modal");
  if (modalClose && modalOverlay) {
    modalClose.addEventListener("click", closeProductModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  const dClose = document.getElementById("delivery-modal-close");
  const dOverlay = document.getElementById("delivery-modal");
  if (dClose && dOverlay) {
    dClose.addEventListener("click", closeDeliveryModal);
    dOverlay.addEventListener("click", (e) => {
      if (e.target === dOverlay) closeDeliveryModal();
    });
  }
});