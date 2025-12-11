/* SUZUKI NJS - script.js
   Full script: produk, modal, simulasi, galeri, pagination, rupiah inputs.
*/

/* ================================================================
   1. DATA PRODUK SUZUKI (lengkap)
================================================================ */

const products = [
  // (sama data lengkap seperti sebelumnya: fronx, ertiga, xl7, baleno, grand-vitara, jimny, spresso, apv, apv-blindvan, new-carry)
  // Untuk ringkas, paste data lengkap produk di sini jika ingin ubah;
  // di bawah saya sertakan contoh beberapa produk utama. Tambah sesuai kebutuhan.
  {
    id: "xl7",
    name: "XL7 Hybrid",
    category: "passenger",
    image: "Suzuki_XL7_ALPHA_KURO_IVORY-KURO.png",
    badge: "kuro",
    variants: [
      { id: "alpha-at-hybrid", name: "Alpha AT Hybrid", otr: 313200000, colors: [{name:"Pearl Snow White",hex:"#f3f4f6"},{name:"Magma Grey",hex:"#4b5563"},{name:"Cool Black",hex:"#020617"}], specs:{engine:"1.5L Hybrid",transmission:"Automatic",passengers:7,safety:["ABS","ESP","Hill Hold Control"],features:["Two Tone Roof (opsi)","Cruise Control"]} },
      { id: "alpha-kuro-at", name: "Alpha Kuro AT", otr: 318200000, colors:[{name:"Prime Cool Black",hex:"#020617"},{name:"Pearl White",hex:"#f9fafb"}], specs:{engine:"1.5L Hybrid",transmission:"Automatic",passengers:7,safety:["ABS","ESP","Hill Hold Control"],features:["Bodykit Kuro","Spoiler Hitam","Cruise Control"]} }
    ]
  },
  {
    id: "ertiga",
    name: "All New Ertiga",
    category: "passenger",
    image: "SUZUKI_ERTIGA.png",
    variants: [
      { id: "mc-gl-mt", name: "MC GL MT", otr: 265350000, colors: [{name:"Pearl Snow White",hex:"#f3f4f6"},{name:"Cool Black",hex:"#111827"},{name:"Magma Grey",hex:"#4b5563"}], specs:{engine:"1.5L, 4 silinder", transmission:"Manual", passengers:7, safety:["ABS","Dual Airbag","ISOFIX"], features:["AC Double Blower","Head Unit","Power Steering"]} },
      { id: "cruise-at", name: "Cruise AT", otr: 305700000, colors:[{name:"Pearl Snow White",hex:"#f3f4f6"},{name:"Cool Black",hex:"#111827"},{name:"Silky Silver",hex:"#d1d5db"}], specs:{engine:"1.5L",transmission:"Automatic",passengers:7,safety:["ABS","Dual Airbag"],features:["Bodykit Cruise","Head Unit Touchscreen"]} }
    ]
  },
  {
    id: "new-carry",
    name: "New Carry Pickup",
    category: "commercial",
    image: "White-NEW_CARRY_PICK-UP.png",
    variants: [
      { id: "fd", name: "Pick Up FD", otr: 175500000, colors:[{name:"Superior White",hex:"#f9fafb"},{name:"Pearl Red",hex:"#b91c1c"}], specs:{engine:"1.5L",transmission:"Manual",passengers:2,safety:["Seatbelt","Immobilizer"],features:["Flat Deck","Bak Luas"]} }
    ]
  },
  {
    id: "jimny-3door",
    name: "Jimny 3 Door",
    category: "passenger",
    image: "SUZUKI_BANDUNG_white-JIMNY_3-DOORS.png",
    variants: [
      { id: "3door-mt", name: "3 Door MT", otr: 511550000, colors:[{name:"Jungle Green",hex:"#14532d"},{name:"Kinetic Yellow",hex:"#eab308"},{name:"Superior White",hex:"#f9fafb"}], specs:{engine:"1.5L",transmission:"Manual",passengers:4,safety:["ABS","Airbag"],features:["4WD","Ground Clearance Tinggi"]} }
    ]
  },
  {
    id: "spresso",
    name: "S-Presso",
    category: "passenger",
    image: "SUZUKI_S PRESSO.png",
    variants: [
      { id: "mt", name: "S-Presso MT", otr: 176600000, colors:[{name:"Fire Red",hex:"#b91c1c"},{name:"Silky Silver",hex:"#d4d4d8"},{name:"Sizzle Orange",hex:"#f97316"}], specs:{engine:"1.0L",transmission:"Manual",passengers:5,safety:["ABS","Airbag"],features:["Ground Clearance Tinggi","Head Unit"]} }
    ]
  }
  // Tambah produk lain sesuai data lengkap milikmu...
];

/* ================================================================
   2. DATA FOTO SERAH TERIMA / GALERI
================================================================ */

const deliveryImages = [
  { id: "d1", image: "bengkel-suzuki-soekarno-hatta.jpg", caption: "Bengkel Resmi Suzuki Soekarno Hatta Bandung" },
  { id: "d2", image: "dealer-suzuki-bandung.jpg", caption: "Dealer Suzuki Bandung" },
  { id: "d3", image: "dealer-suzuki-soekarno-hatta.jpg", caption: "Dealer Suzuki NJS Soekarno Hatta" },
  { id: "d12", image: "promo-xl7-bandung.jpg", caption: "Promo XL7 Bandung" }
  // Tambah sesuai folder gambar di server
];

/* ================================================================
   3. HELPERS
================================================================ */

function qs(id) { return document.getElementById(id); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

function formatRupiah(angka) {
  if (angka === null || angka === undefined) return "0";
  const s = Number(angka).toFixed(0);
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function parseRupiah(str) {
  if (!str) return 0;
  return Number(String(str).replace(/[^\d]/g, "")) || 0;
}

/* ================================================================
   4. NAVBAR TOGGLE
================================================================ */

function initNavbar() {
  const toggle = qs("nav-toggle");
  const nav = qs("nav-menu");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  qsa("#nav-menu a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
}

/* ================================================================
   5. RENDER PRODUK (KARTU)
================================================================ */

function renderProducts() {
  const listEl = qs("product-list");
  if (!listEl) return;
  listEl.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card product-card";
    card.dataset.category = product.category || "passenger";

    const badgeHTML = product.badge === "kuro" ? '<div class="product-badge badge-kuro">KURO</div>' : (product.badge === "new" ? '<div class="product-badge badge-new">NEW</div>' : '');
    const imgHTML = product.image ? `<img src="${product.image}" alt="${product.name}" loading="lazy" />` : `<div class="product-noimg">No Image</div>`;
    const variantCount = product.variants ? product.variants.length : 0;

    card.innerHTML = `
      ${badgeHTML}
      <div class="product-image">${imgHTML}</div>
      <div class="product-name">${product.name}</div>
      <div class="product-category">${product.category === "passenger" ? "Passenger" : "Commercial"}</div>
      <div class="product-meta">Tersedia ${variantCount} tipe</div>
    `;

    card.addEventListener("click", () => openProductModal(product.id));
    listEl.appendChild(card);
  });
}

/* ================================================================
   6. FILTER KATEGORI
================================================================ */

function initCategoryFilter() {
  const buttons = qsa(".category-buttons .btn-chip");
  const container = qs("product-list");
  if (!container || !buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      const cards = container.querySelectorAll(".product-card");
      cards.forEach(card => {
        const cat = card.dataset.category;
        card.style.display = (filter === "all" || filter === cat) ? "" : "none";
      });
    });
  });
}

/* ================================================================
   7. PRODUCT MODAL (perbaikan: ID sesuai index.html)
================================================================ */

let currentProduct = null;
let currentVariant = null;

function openProductModal(productId) {
  currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return;
  currentVariant = (currentProduct.variants && currentProduct.variants[0]) || null;

  const overlay = qs("product-modal");
  if (!overlay) return;
  overlay.classList.remove("hidden");
  overlay.setAttribute("aria-hidden", "false");

  renderProductModalHeader();
  renderVariantButtons();
  updateProductModalView();
}

function closeProductModal() {
  const overlay = qs("product-modal");
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.setAttribute("aria-hidden", "true");
}

function renderProductModalHeader() {
  if (!currentProduct) return;
  const nameEl = qs("modal-product-name");
  const taglineEl = qs("modal-product-tagline");
  const imgEl = qs("modal-product-image");
  const priceEl = qs("modal-product-price");
  const descEl = qs("modal-product-description");

  if (nameEl) nameEl.textContent = currentProduct.name;
  if (taglineEl) taglineEl.textContent = currentProduct.category === "passenger" ? "Kategori: Passenger" : "Kategori: Commercial";
  if (imgEl) imgEl.src = currentProduct.image || "";
  if (priceEl) priceEl.textContent = currentVariant ? "Rp " + formatRupiah(currentVariant.otr) : "-";
  if (descEl) descEl.textContent = currentProduct.description || `${currentProduct.name} - info lengkap tersedia di tab spesifikasi.`;
}

function renderVariantButtons() {
  const container = qs("variant-buttons");
  if (!container || !currentProduct || !currentProduct.variants) return;
  container.innerHTML = "";
  currentProduct.variants.forEach(variant => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "variant-button";
    btn.textContent = variant.name;
    if (currentVariant && variant.id === currentVariant.id) btn.classList.add("active");
    btn.addEventListener("click", () => {
      setActiveVariant(currentProduct.id, variant.id);
    });
    container.appendChild(btn);
  });
}

function setActiveVariant(productId, variantId) {
  if (!productId || !variantId) return;
  if (!currentProduct || currentProduct.id !== productId) currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return;
  currentVariant = currentProduct.variants.find(v => v.id === variantId) || currentProduct.variants[0];
  renderVariantButtons();
  updateProductModalView();
}

function renderColorButtons(variant) {
  const container = qs("color-buttons");
  if (!container) return;
  container.innerHTML = "";
  const colors = (variant && variant.colors) || [];
  if (!colors.length) {
    container.innerHTML = `<p style="font-size:.85rem;color:#6b7280;">Warna mengikuti ketersediaan stok dealer.</p>`;
    return;
  }
  variant._selectedColor = variant._selectedColor || colors[0];
  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "color-button";
    btn.title = color.name || "";
    btn.style.background = color.hex || "#e5e7eb";
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
  if (!currentVariant || !currentProduct) return;

  const priceEl = qs("modal-product-price");
  if (priceEl) priceEl.textContent = "Rp " + formatRupiah(currentVariant.otr);

  // quick specs list
  const quickList = qs("modal-specs-quick-list");
  if (quickList) {
    quickList.innerHTML = "";
    const s = currentVariant.specs || {};
    const items = [
      `Mesin: ${s.engine || "-"}`,
      `Transmisi: ${s.transmission || "-"}`,
      `Penumpang: ${s.passengers || "-"}`,
      `Keselamatan: ${(s.safety || []).slice(0,3).join(", ") || "-" }`
    ];
    items.forEach(it => { const li = document.createElement("li"); li.textContent = it; quickList.appendChild(li); });
  }

  // detail specs
  const detailEl = qs("modal-specs-detail");
  if (detailEl) {
    const s = currentVariant.specs || {};
    const safety = (s.safety || []).join(", ") || "-";
    const features = (s.features || []).join(", ") || "-";
    const colors = (currentVariant.colors || []).map(c => c.name).join(", ");
    detailEl.innerHTML = `
      <h4>Mesin & Performa</h4><p>${s.engine || "-"}</p>
      <h4>Transmisi</h4><p>${s.transmission || "-"}</p>
      <h4>Kapasitas Penumpang</h4><p>${s.passengers || "-"}</p>
      <h4>Fitur Keselamatan</h4><p>${safety}</p>
      <h4>Fitur</h4><p>${features}</p>
      <h4>Pilihan Warna</h4><p>${colors || "Warna mengikuti stok dealer."}</p>
    `;
  }

  renderColorButtons(currentVariant);

  const modalPriceInput = qs("modal-price-input");
  if (modalPriceInput) modalPriceInput.value = formatRupiah(currentVariant.otr);
}

/* ================================================================
   8. MODAL TABS
================================================================ */

function initModalTabs() {
  const tabButtons = qsa(".tab-button");
  if (!tabButtons.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.tab;
      const tabSpecs = qs("tab-specs");
      const tabSimulation = qs("tab-simulation");
      if (!tabSpecs || !tabSimulation) return;
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
   9. SIMULASI KREDIT (modal & global)
================================================================ */

function calculateInstallment(price, dp, tenor, interestRateYearly) {
  const principal = price - dp;
  if (principal <= 0 || tenor <= 0) return { monthlyInstallment: 0, totalPayment: dp, totalDP: dp };
  const monthlyInterestRate = (interestRateYearly / 100) / 12;
  const interestPerMonth = principal * monthlyInterestRate;
  const principalPerMonth = principal / tenor;
  const monthlyInstallment = principalPerMonth + interestPerMonth;
  const totalPayment = monthlyInstallment * tenor + dp;
  return { monthlyInstallment, totalPayment, totalDP: dp };
}

function initModalSimulationForm() {
  const form = qs("modal-simulation-form");
  const resultEl = qs("modal-simulation-result");
  if (!form || !resultEl) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const price = parseRupiah(qs("modal-price-input") ? qs("modal-price-input").value : 0);
    const dp = parseRupiah(qs("modal-dp-input") ? qs("modal-dp-input").value : 0);
    const tenor = Number(qs("modal-tenor-input") ? qs("modal-tenor-input").value : 0);
    const interest = Number(qs("modal-interest-input") ? qs("modal-interest-input").value : 0);
    const res = calculateInstallment(price, dp, tenor, interest);
    resultEl.innerHTML = `
      <p><strong>Total DP:</strong> Rp ${formatRupiah(Math.round(res.totalDP))}</p>
      <p><strong>Cicilan / bulan:</strong> Rp ${formatRupiah(Math.round(res.monthlyInstallment))}</p>
      <p><strong>Total bayar (inkl. DP):</strong> Rp ${formatRupiah(Math.round(res.totalPayment))}</p>
      <p style="margin-top:8px;font-size:.8rem;color:#6b7280;">*Ilustrasi saja. Perhitungan final mengikuti leasing & SOP dealer.</p>
    `;
  });
}

function initGlobalSimulation() {
  const productSelect = qs("global-product-select");
  const variantSelect = qs("global-variant-select");
  const priceInput = qs("global-price-input");
  const dpInput = qs("global-dp-input");
  const tenorInput = qs("global-tenor-input");
  const interestInput = qs("global-interest-input");
  const form = qs("global-simulation-form");
  const resultEl = qs("global-simulation-result");
  if (!productSelect || !variantSelect || !form || !priceInput || !resultEl) return;

  products.forEach((p, i) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.name;
    if (i === 0) opt.selected = true;
    productSelect.appendChild(opt);
  });

  function updateVariants() {
    const productId = productSelect.value;
    const product = products.find(p => p.id === productId);
    if (!product) return;
    variantSelect.innerHTML = "";
    product.variants.forEach((v, idx) => {
      const opt = document.createElement("option");
      opt.value = v.id;
      opt.textContent = v.name;
      if (idx === 0) opt.selected = true;
      variantSelect.appendChild(opt);
    });
    updatePriceFromSelection();
  }

  function updatePriceFromSelection() {
    const productId = productSelect.value;
    const variantId = variantSelect.value;
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const variant = product.variants.find(v => v.id === variantId);
    if (!variant) return;
    priceInput.value = formatRupiah(variant.otr);
  }

  productSelect.addEventListener("change", updateVariants);
  variantSelect.addEventListener("change", updatePriceFromSelection);
  updateVariants();

  form.addEventListener("submit", e => {
    e.preventDefault();
    const price = parseRupiah(priceInput.value);
    const dp = parseRupiah(dpInput.value);
    const tenor = Number(tenorInput.value || 0);
    const interest = Number(interestInput.value || 0);
    const res = calculateInstallment(price, dp, tenor, interest);
    resultEl.innerHTML = `
      <p><strong>Total DP:</strong> Rp ${formatRupiah(Math.round(res.totalDP))}</p>
      <p><strong>Cicilan / bulan:</strong> Rp ${formatRupiah(Math.round(res.monthlyInstallment))}</p>
      <p><strong>Total bayar (inkl. DP):</strong> Rp ${formatRupiah(Math.round(res.totalPayment))}</p>
      <p style="margin-top:8px;font-size:.8rem;color:#6b7280;">*Ilustrasi saja. Perhitungan final mengikuti leasing & SOP dealer.</p>
    `;
  });
}

/* ================================================================
   10. CONTACT FORM (dummy)
================================================================ */

function initContactForm() {
  const form = qs("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah tercatat. Kami akan menghubungi Anda segera.");
    form.reset();
  });
}

/* ================================================================
   11. DELIVERY / GALERI
================================================================ */

function renderDeliveryGallery() {
  const el = qs("delivery-gallery");
  if (!el) return;
  el.innerHTML = "";
  deliveryImages.forEach(item => {
    const div = document.createElement("div");
    div.className = "delivery-item";
    div.innerHTML = `<img src="${item.image}" alt="${item.caption || 'Serah terima Suzuki'}" loading="lazy">`;
    div.addEventListener("click", () => openDeliveryModal(item.image, item.caption));
    el.appendChild(div);
  });
}

function openDeliveryModal(image, caption) {
  const overlay = qs("delivery-modal");
  const imgEl = qs("delivery-modal-img");
  if (!overlay || !imgEl) return;
  imgEl.src = image;
  imgEl.alt = caption || "Foto serah terima";
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
   12. PAGINATION LANDING CARDS (6 per halaman)
================================================================ */

function initLandingPagination() {
  const grid = document.querySelector(".landing-links-grid");
  const paginationEl = qs("landing-pagination");
  if (!grid || !paginationEl) return;
  const cards = Array.from(grid.querySelectorAll(".landing-card"));
  const pageSize = 6;
  const totalPages = Math.ceil(cards.length / pageSize);
  if (totalPages <= 1) { paginationEl.innerHTML = ""; return; }

  let currentPage = 1;

  function showPage(page) {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    cards.forEach((card, idx) => {
      card.style.display = (idx >= start && idx < end) ? "" : "none";
    });
    renderPagination();
  }

  function createPageButton(label, page, disabled=false, isActive=false) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "landing-page-btn";
    btn.textContent = label;
    if (disabled) btn.classList.add("disabled");
    if (isActive) btn.classList.add("active");
    if (!disabled) {
      btn.addEventListener("click", () => {
        showPage(page);
        setTimeout(() => {
          const top = grid.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top, behavior: "smooth" });
        }, 80);
      });
    }
    return btn;
  }

  function renderPagination() {
    paginationEl.innerHTML = "";
    paginationEl.appendChild(createPageButton("«", currentPage - 1, currentPage === 1));
    for (let p = 1; p <= totalPages; p++) {
      paginationEl.appendChild(createPageButton(String(p), p, false, p === currentPage));
    }
    paginationEl.appendChild(createPageButton("»", currentPage + 1, currentPage === totalPages));
  }

  showPage(1);
}

/* ================================================================
   13. RUPIAH INPUT INIT
================================================================ */

function initRupiahInputs() {
  qsa(".rupiah-input").forEach(input => {
    input.addEventListener("input", function () {
      const plain = this.value.replace(/[^\d]/g, "");
      this.value = plain ? plain.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "";
    });
  });
}

/* ================================================================
   14. INIT
================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // set year if any (some templates use it)
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
  initLandingPagination();

  // product modal close
  const modalClose = qs("product-modal-close");
  const modalOverlay = qs("product-modal");
  if (modalClose && modalOverlay) {
    modalClose.addEventListener("click", closeProductModal);
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  // delivery modal close
  const dClose = qs("delivery-modal-close") || qs("delivery-modal") && qs("delivery-modal").querySelector(".modal-close");
  const dOverlay = qs("delivery-modal");
  if (dClose && dOverlay) {
    dClose.addEventListener("click", closeDeliveryModal);
    dOverlay.addEventListener("click", (e) => {
      if (e.target === dOverlay) closeDeliveryModal();
    });
  }
});