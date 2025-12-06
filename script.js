/*******************************************************************
   SUZUKI DEALER WEBSITE – REFACTORED
   - Data produk & serah terima
   - Kartu produk + modal
   - Simulasi kredit global & per modal
   - Kontak & gallery serah terima
********************************************************************/

/* ==============================
   1. DATA PRODUK SUZUKI
   ============================== */

const products = [
  // -------- Passenger --------
  {
    id: "fronx",
    name: "Fronx",
    category: "passenger",
    image: "SUZUKI_FRONK.png",
    variants: [
      {
        id: "gl-mt",
        name: "GL MT",
        otr: 261800000,
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
      { id: "mc-gl-mt", name: "MC GL MT", otr: 265350000,
        specs: { engine: "1.5L, 4 silinder", transmission: "Manual", passengers: 7,
          safety: ["ABS", "Dual Airbag", "ISOFIX"],
          features: ["AC Double Blower", "Head Unit", "Power Steering"] } },
      { id: "mc-gl-at", name: "MC GL AT", otr: 276400000,
        specs: { engine: "1.5L, 4 silinder", transmission: "Automatic", passengers: 7,
          safety: ["ABS", "Dual Airbag", "ISOFIX"],
          features: ["Head Unit Touchscreen", "AC Double Blower"] } },
      { id: "mc-gx-mt", name: "MC GX MT", otr: 282000000,
        specs: { engine: "1.5L, 4 silinder", transmission: "Manual", passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Keyless Entry", "Audio Steering Switch"] } },
      { id: "mc-gx-at", name: "MC GX AT", otr: 293000000,
        specs: { engine: "1.5L, 4 silinder", transmission: "Automatic", passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Keyless Entry", "Start/Stop Button"] } },
      { id: "cruise-mt", name: "Cruise MT", otr: 294800000,
        specs: { engine: "1.5L, 4 silinder", transmission: "Manual", passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Bodykit Cruise", "Head Unit Touchscreen"] } },
      { id: "cruise-mt-2tone", name: "Cruise MT 2 Tone", otr: 296800000,
        specs: { engine: "1.5L, 4 silinder", transmission: "Manual", passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Two Tone Color", "Bodykit Cruise"] } },
      { id: "cruise-at", name: "Cruise AT", otr: 305700000,
        specs: { engine: "1.5L, 4 silinder", transmission: "Automatic", passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Bodykit Cruise", "Head Unit Touchscreen"] } },
      { id: "cruise-at-2tone", name: "Cruise AT 2 Tone", otr: 307700000,
        specs: { engine: "1.5L, 4 silinder", transmission: "Automatic", passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Two Tone Color", "Bodykit Cruise"] } }
    ]
  },

  {
    id: "xl7",
    name: "XL7 Hybrid",
    category: "passenger",
    image: "Suzuki_XL7_ALPHA_KURO_IVORY-KURO.png",
    variants: [
      { id: "zeta-mt", name: "Zeta MT", otr: 269900000,
        specs: { engine: "1.5L Hybrid", transmission: "Manual", passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Head Unit Touchscreen", "Roof Rail"] } },
      { id: "zeta-at", name: "Zeta AT", otr: 281100000,
        specs: { engine: "1.5L Hybrid", transmission: "Automatic", passengers: 7,
          safety: ["ABS", "Dual Airbag"],
          features: ["Head Unit Touchscreen", "Roof Rail"] } },
      { id: "beta-mt-hybrid", name: "Beta MT Hybrid", otr: 292200000,
        specs: { engine: "1.5L Hybrid", transmission: "Manual", passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Cruise Control", "Keyless Entry"] } },
      { id: "beta-at-hybrid", name: "Beta AT Hybrid", otr: 303100000,
        specs: { engine: "1.5L Hybrid", transmission: "Automatic", passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Cruise Control", "Keyless Entry"] } },
      { id: "alpha-mt-hybrid", name: "Alpha MT Hybrid", otr: 302300000,
        specs: { engine: "1.5L Hybrid", transmission: "Manual", passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof (opsi)", "Leather Seat (opsi)"] } },
      { id: "alpha-mt-hybrid-2tone", name: "Alpha MT Hybrid 2 Tone", otr: 304300000,
        specs: { engine: "1.5L Hybrid", transmission: "Manual", passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof", "Bodykit Alpha"] } },
      { id: "alpha-at-hybrid", name: "Alpha AT Hybrid", otr: 313200000,
        specs: { engine: "1.5L Hybrid", transmission: "Automatic", passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof (opsi)", "Cruise Control"] } },
      { id: "alpha-at-hybrid-2tone", name: "Alpha AT Hybrid 2 Tone", otr: 315300000,
        specs: { engine: "1.5L Hybrid", transmission: "Automatic", passengers: 7,
          safety: ["ABS", "ESP", "Hill Hold Control"],
          features: ["Two Tone Roof", "Cruise Control"] } }
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
      { id: "3door-mt", name: "3 Door MT", otr: 511550000,
        specs: { engine: "1.5L", transmission: "Manual", passengers: 4,
          safety: ["ABS", "Airbag"],
          features: ["4WD", "Ground Clearance Tinggi"] } },
      { id: "3door-at", name: "3 Door AT", otr: 524000000,
        specs: { engine: "1.5L", transmission: "Automatic", passengers: 4,
          safety: ["ABS", "Airbag"],
          features: ["4WD", "Ground Clearance Tinggi"] } },
      { id: "3door-mt-2tone", name: "3 Door MT 2 Tone", otr: 514850000,
        specs: { engine: "1.5L", transmission: "Manual", passengers: 4,
          safety: ["ABS", "Airbag"],
          features: ["Two Tone Color", "4WD"] } },
      { id: "3door-at-2tone", name: "3 Door AT 2 Tone", otr: 527300000,
        specs: { engine: "1.5L", transmission: "Automatic", passengers: 4,
          safety: ["ABS", "Airbag"],
          features: ["Two Tone Color", "4WD"] } }
    ]
  },

  {
    id: "jimny-5door",
    name: "Jimny 5 Door",
    category: "passenger",
    image: "COLORIZE_JUNGLE_GREEN_FIXED_LAYERS-JIMNY_5-DOORS.png",
    variants: [
      { id: "5door-mt", name: "5 Door MT", otr: 496100000,
        specs: { engine: "1.5L", transmission: "Manual", passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["4WD", "Ground Clearance Tinggi"] } },
      { id: "5door-at", name: "5 Door AT", otr: 508700000,
        specs: { engine: "1.5L", transmission: "Automatic", passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["4WD", "Ground Clearance Tinggi"] } },
      { id: "5door-mt-2tone", name: "5 Door MT 2 Tone", otr: 499350000,
        specs: { engine: "1.5L", transmission: "Manual", passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Two Tone Color", "4WD"] } },
      { id: "5door-at-2tone", name: "5 Door AT 2 Tone", otr: 511900000,
        specs: { engine: "1.5L", transmission: "Automatic", passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Two Tone Color", "4WD"] } },
      { id: "5door-at-white-rhino", name: "5 Door AT White Rhino", otr: 522300000,
        specs: { engine: "1.5L", transmission: "Automatic", passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Warna White Rhino Khusus", "4WD"] } }
    ]
  },

  {
    id: "spresso",
    name: "S-Presso",
    category: "passenger",
    image: "SUZUKI_S PRESSO.png",
    variants: [
      { id: "mt", name: "S-Presso MT", otr: 176600000,
        specs: { engine: "1.0L", transmission: "Manual", passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Ground Clearance Tinggi", "Head Unit"] } },
      { id: "at", name: "S-Presso AT", otr: 186600000,
        specs: { engine: "1.0L", transmission: "Automatic (AGS)", passengers: 5,
          safety: ["ABS", "Airbag"],
          features: ["Ground Clearance Tinggi", "Head Unit"] } }
    ]
  },

  {
    id: "apv",
    name: "APV",
    category: "passenger",
    image: "RED APV_ARENA.png",
    variants: [
      { id: "ge-ps-mt-ab", name: "APV GE PS MT AB", otr: 228200000,
        specs: { engine: "1.5L", transmission: "Manual", passengers: 8,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Power Steering", "AC"] } },
      { id: "gl-mt-ab", name: "APV GL MT AB", otr: 236400000,
        specs: { engine: "1.5L", transmission: "Manual", passengers: 8,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["AC Double Blower", "Power Steering"] } },
      { id: "gx-mt-ab", name: "APV GX MT AB", otr: 250500000,
        specs: { engine: "1.5L", transmission: "Manual", passengers: 8,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Interior Lebih Mewah", "AC Double Blower"] } },
      { id: "sgx-mt-ab", name: "APV SGX MT AB", otr: 253900000,
        specs: { engine: "1.5L", transmission: "Manual", passengers: 8,
          safety: ["Seatbelt", "Immobilizer"],
          features: ["Velg Alloy", "Interior Lebih Lengkap"] } }
    ]
  },

  // -------- Commercial --------
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

/* ==============================
   2. DATA FOTO SERAH TERIMA
   ============================== */

const deliveryImages = [
  { id: "d1", image: "serah1.jpg", caption: "Serah terima Suzuki Bandung" },
  { id: "d2", image: "serah2.jpg", caption: "Serah terima Customer Suzuki" },
  { id: "d3", image: "serah3.jpg", caption: "Unit XL7 Hybrid diserahkan" }
];

/* ==============================
   3. HELPER RUPIAH
   ============================== */

function formatRupiah(angka) {
  if (angka === null || angka === undefined) return "0";
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

/* ==============================
   4. NAVBAR MOBILE
   ============================== */

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

/* ==============================
   5. RENDER PRODUK
   ============================== */

function renderProducts() {
  const listEl = document.getElementById("product-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card product-card";
    card.dataset.category = product.category;

    const variantCount = product.variants.length;

    card.innerHTML = `
      <div class="product-image">
        ${product.image ? `<img src="${product.image}" alt="${product.name}">` : "Gambar Mobil"}
      </div>
      <div class="product-name">${product.name}</div>
      <div class="product-category">
        ${product.category === "passenger" ? "Passenger" : "Commercial"}
      </div>
      <div class="product-meta">Tersedia ${variantCount} tipe</div>
      <div class="product-meta">Klik untuk lihat spesifikasi & simulasi kredit</div>
    `;

    card.addEventListener("click", () => openProductModal(product.id));
    listEl.appendChild(card);
  });
}

/* ==============================
   6. FILTER KATEGORI
   ============================== */

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
        card.style.display = (filter === "all" || filter === cat) ? "" : "none";
      });
    });
  });
}

/* ==============================
   7. MODAL PRODUK
   ============================== */

let currentProduct = null;
let currentVariant = null;

function openProductModal(productId) {
  currentProduct = products.find((p) => p.id === productId);
  if (!currentProduct) return;

  currentVariant = currentProduct.variants[0];

  const overlay = document.getElementById("product-modal");
  if (!overlay) return;
  overlay.classList.remove("hidden");

  renderProductModalHeader();
  renderVariantButtons();
  updateProductModalView();
}

function closeProductModal() {
  const overlay = document.getElementById("product-modal");
  if (!overlay) return;
  overlay.classList.add("hidden");
}

function renderProductModalHeader() {
  const nameEl = document.getElementById("modal-product-name");
  const catEl = document.getElementById("modal-product-category");
  const imgEl = document.getElementById("modal-product-image");
  if (!nameEl || !catEl || !imgEl || !currentProduct) return;

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
  if (!container || !currentProduct) return;
  container.innerHTML = "";

  currentProduct.variants.forEach((variant) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "variant-button";
    btn.textContent = variant.name;
    if (variant.id === currentVariant.id) {
      btn.classList.add("active");
    }
    btn.addEventListener("click", () => setActiveVariant(currentProduct.id, variant.id));
    container.appendChild(btn);
  });
}

function setActiveVariant(productId, variantId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;
  currentProduct = product;

  const variant = product.variants.find((v) => v.id === variantId);
  if (!variant) return;
  currentVariant = variant;

  renderVariantButtons();
  updateProductModalView();
}

function updateProductModalView() {
  if (!currentVariant) return;

  const priceEl = document.getElementById("modal-price");
  const briefList = document.getElementById("modal-brief-specs");
  const detailEl = document.getElementById("modal-specs-detail");
  const priceInput = document.getElementById("modal-price-input");

  if (priceEl) {
    priceEl.textContent = "Rp " + formatRupiah(currentVariant.otr);
  }

  const s = currentVariant.specs || {};

  if (briefList) {
    briefList.innerHTML = "";
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
  }

  if (detailEl) {
    const safety = (s.safety || []).join(", ") || "-";
    const features = (s.features || []).join(", ") || "-";
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
    `;
  }

  if (priceInput) {
    priceInput.value = formatRupiah(currentVariant.otr);
  }
}

/* ==============================
   8. TABS MODAL
   ============================== */

function initModalTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabSpecs = document.getElementById("tab-specs");
  const tabSimulation = document.getElementById("tab-simulation");

  if (!tabButtons.length || !tabSpecs || !tabSimulation) return;

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

/* ==============================
   9. RUMUS SIMULASI KREDIT
   ============================== */

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

/* ==============================
   10. FORM SIMULASI DI MODAL
   ============================== */

function initModalSimulationForm() {
  const form = document.getElementById("modal-simulation-form");
  const resultEl = document.getElementById("modal-simulation-result");
  if (!form || !resultEl) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const price = parseRupiah(document.getElementById("modal-price-input").value);
    const dp = parseRupiah(document.getElementById("modal-dp-input").value);
    const tenor = Number(document.getElementById("modal-tenor-input").value || 0);
    const interest = Number(document.getElementById("modal-interest-input").value || 0);

    const { monthlyInstallment, totalPayment, totalDP } =
      calculateInstallment(price, dp, tenor, interest);

    resultEl.innerHTML = `
      <p><strong>Total DP:</strong> Rp ${formatRupiah(Math.round(totalDP))}</p>
      <p><strong>Cicilan per bulan:</strong> Rp ${formatRupiah(Math.round(monthlyInstallment))}</p>
      <p><strong>Total pembayaran (termasuk DP):</strong> Rp ${formatRupiah(Math.round(totalPayment))}</p>
      <p style="margin-top:8px;font-size:.8rem;color:#6b7280;">
        *Simulasi ini hanya ilustrasi. Paket resmi dan perhitungan aktual akan disesuaikan dengan SOP perusahaan dan leasing.
      </p>
    `;
  });
}

/* ==============================
   11. SIMULASI KREDIT GLOBAL
   ============================== */

function initGlobalSimulation() {
  const productSelect = document.getElementById("global-product-select");
  const variantSelect = document.getElementById("global-variant-select");
  const priceInput = document.getElementById("global-price-input");
  const dpInput = document.getElementById("global-dp-input");
  const tenorInput = document.getElementById("global-tenor-input");
  const interestInput = document.getElementById("global-interest-input");
  const form = document.getElementById("global-simulation-form");
  const resultEl = document.getElementById("global-simulation-result");

  if (!productSelect || !variantSelect || !form || !resultEl) return;

  // isi pilihan mobil
  products.forEach((p, index) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    if (index === 0) opt.selected = true;
    productSelect.appendChild(opt);
  });

  function updateVariants() {
    const product = products.find((p) => p.id === productSelect.value);
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
    const product = products.find((p) => p.id === productSelect.value);
    if (!product) return;
    const variant = product.variants.find((v) => v.id === variantSelect.value);
    if (!variant) return;
    priceInput.value = formatRupiah(variant.otr);
  }

  productSelect.addEventListener("change", updateVariants);
  variantSelect.addEventListener("change", updatePriceFromSelection);

  updateVariants(); // initial

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const price = parseRupiah(priceInput.value);
    const dp = parseRupiah(dpInput.value);
    const tenor = Number(tenorInput.value || 0);
    const interest = Number(interestInput.value || 0);

    const { monthlyInstallment, totalPayment, totalDP } =
      calculateInstallment(price, dp, tenor, interest);

    resultEl.innerHTML = `
      <p><strong>Total DP:</strong> Rp ${formatRupiah(Math.round(totalDP))}</p>
      <p><strong>Cicilan per bulan:</strong> Rp ${formatRupiah(Math.round(monthlyInstallment))}</p>
      <p><strong>Total pembayaran (termasuk DP):</strong> Rp ${formatRupiah(Math.round(totalPayment))}</p>
      <p style="margin-top:8px;font-size:.8rem;color:#6b7280;">
        *Simulasi ini hanya ilustrasi. Paket resmi dan perhitungan aktual akan disesuaikan dengan SOP perusahaan dan leasing.
      </p>
    `;
  });
}

/* ==============================
   12. FORM KONTAK (DUMMY)
   ============================== */

function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      "Terima kasih, data Anda sudah kami terima.\nIntegrasi ke WhatsApp / email bisa ditambahkan di bagian ini."
    );
    form.reset();
  });
}

/* ==============================
   13. DELIVERY GALLERY
   ============================== */

function renderDeliveryGallery() {
  const el = document.getElementById("delivery-gallery");
  if (!el) return;
  el.innerHTML = "";

  deliveryImages.forEach((item) => {
    const div = document.createElement("div");
    div.className = "delivery-item";
    div.innerHTML = `<img src="${item.image}" alt="${item.caption}">`;
    div.addEventListener("click", () => openDeliveryModal(item.image));
    el.appendChild(div);
  });
}

function openDeliveryModal(image) {
  const overlay = document.getElementById("delivery-modal");
  const img = document.getElementById("delivery-modal-img");
  if (!overlay || !img) return;
  img.src = image;
  overlay.classList.remove("hidden");
}

function closeDeliveryModal() {
  const overlay = document.getElementById("delivery-modal");
  if (!overlay) return;
  overlay.classList.add("hidden");
}

/* ==============================
   14. INIT
   ============================== */

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

  // modal produk
  const modalOverlay = document.getElementById("product-modal");
  const modalClose = document.getElementById("modal-close");
  if (modalClose) modalClose.addEventListener("click", closeProductModal);
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  // modal delivery
  const dOverlay = document.getElementById("delivery-modal");
  const dClose = document.getElementById("delivery-modal-close");
  if (dClose) dClose.addEventListener("click", closeDeliveryModal);
  if (dOverlay) {
    dOverlay.addEventListener("click", (e) => {
      if (e.target === dOverlay) closeDeliveryModal();
    });
  }
});