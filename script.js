/* ============================================================================
   NOMA ENTERPRISES INC. — INTERACTIVE PROOF LEDGER & REVENUE CALCULATOR
   ============================================================================ */

// 1. Hero Proof Console Data (Real verified screenshots from PORTFOLIO.zip)
const HERO_CONSOLE_DATA = {
  amazon: {
    title: "Amazon Seller Central — US Storefront Performance",
    period: "Jan 31, 2023 – Jan 30, 2025",
    metric1Label: "Ordered Product Sales",
    metric1Val: "$1,893,608.00",
    metric2Label: "Total Units Ordered",
    metric2Val: "4,159 Units",
    metric3Label: "Avg. Order Value",
    metric3Val: "$659.10",
    img: "assets/portfolio/amazon/amz-us-1893k-2yr.png",
    caption: "Amazon Seller Central — $1,893,608.00 Ordered Product Sales (2,873 Order Items / $659.10 AOV)",
    traceNote: "Verified Live Account Snapshot"
  },
  walmart: {
    title: "Walmart Seller Center — Account Sales Summary",
    period: "Nov 1, 2024 – Jan 31, 2025",
    metric1Label: "Quarterly GMV",
    metric1Val: "$98,727.19",
    metric2Label: "Units Sold",
    metric2Val: "3,659 Units",
    metric3Label: "Total Orders",
    metric3Val: "3,354 Orders",
    img: "assets/portfolio/walmart/wmt-gmv-98k-q4.jpg",
    caption: "Walmart Seller Center — $98,727.19 Q4 GMV across 3,354 Orders & 3,659 Units Sold",
    traceNote: "Walmart WFS + Marketplace"
  },
  newegg: {
    title: "Newegg Seller Portal — Annual Revenue Analytics",
    period: "Jan 01, 2023 – Dec 31, 2023",
    metric1Label: "Total Gross Revenue",
    metric1Val: "$89,293.62",
    metric2Label: "Units Sold",
    metric2Val: "277 Units",
    metric3Label: "Average Order Value",
    metric3Val: "$647.06",
    img: "assets/portfolio/newegg/newegg-us-89k-2023.png",
    caption: "Newegg Seller Portal — $89,293.62 Gross Revenue (100% Organic Non-Promotional Sales, $647.06 AOV)",
    traceNote: "High-Ticket Electronics • 100% Organic"
  },
  shopify: {
    title: "Shopify Plus DTC — 12-Month Storefront Growth",
    period: "Jan 1, 2024 – Dec 31, 2024",
    metric1Label: "Gross Sales",
    metric1Val: "$67,884.70",
    metric2Label: "YoY Growth Velocity",
    metric2Val: "+59.5K%",
    metric3Label: "Conversion Lift",
    metric3Val: "+136%",
    img: "assets/portfolio/shopify/shopify-67k-12mo.png",
    caption: "Shopify DTC Store — $67,884.70 Gross Sales (+59.5K% YoY Surge) & $2,984.79 Active Next Payout",
    traceNote: "Direct-to-Consumer Brand Scaling"
  },
  tiktok: {
    title: "TikTok Shop US — Seller Center Analytics",
    period: "180 Days: Aug 03, 2024 – Jan 29, 2025",
    metric1Label: "Gross Merchandise Value",
    metric1Val: "$20,498.18",
    metric2Label: "Items Sold",
    metric2Val: "195 Items",
    metric3Label: "Verified Paid Payouts",
    metric3Val: "$9,886.79",
    img: "assets/portfolio/tiktok/tiktok-gmv-20k.png",
    caption: "TikTok Shop US Seller Center — $20,498.18 GMV & Affiliate Social Commerce Scaling",
    traceNote: "US Seller Center • Fulfilled by TikTok"
  }
};

// 2. Full Portfolio Proof Items (for Homepage & Portfolio Vault)
const PORTFOLIO_ITEMS = [
  {
    id: "amz-1",
    platform: "amazon",
    platformLabel: "Amazon US",
    dotClass: "dot-amazon",
    period: "Jan 2023 – Jan 2025",
    stat: "$1,893,608.00",
    caption: "Multi-Year Storefront Scaling (US Marketplace)",
    sub1Label: "Units Ordered",
    sub1Val: "4,159 Units",
    sub2Label: "Avg. Order Value",
    sub2Val: "$659.10",
    img: "assets/portfolio/amazon/amz-us-1893k-2yr.png"
  },
  {
    id: "amz-2",
    platform: "amazon",
    platformLabel: "Amazon US",
    dotClass: "dot-amazon",
    period: "Jan 2024 – Dec 2024",
    stat: "$1,489,923.50",
    caption: "12-Month Calendar Year Sales Snapshot",
    sub1Label: "Order Items",
    sub1Val: "2,552 Orders",
    sub2Label: "Avg. Sale / Item",
    sub2Val: "$583.83",
    img: "assets/portfolio/amazon/amz-us-1489k-2024.png"
  },
  {
    id: "amz-3",
    platform: "amazon",
    platformLabel: "Amazon Mexico",
    dotClass: "dot-amazon",
    period: "Jan 2024 – Dec 2024",
    stat: "MX$6,247,949.50",
    caption: "North America Unified Account Expansion (MX)",
    sub1Label: "YoY Growth vs '23",
    sub1Val: "+76.2% Surge",
    sub2Label: "Avg. Order Value",
    sub2Val: "MX$26,251.89",
    img: "assets/portfolio/amazon/amz-mx-6247k-2024.png"
  },
  {
    id: "wmt-1",
    platform: "walmart",
    platformLabel: "Walmart US",
    dotClass: "dot-walmart",
    period: "Nov 2024 – Jan 2025",
    stat: "$98,727.19",
    caption: "Q4 Holiday Peak GMV & WFS Velocity",
    sub1Label: "Units Sold",
    sub1Val: "3,659 Units",
    sub2Label: "Total Orders",
    sub2Val: "3,354 Orders",
    img: "assets/portfolio/walmart/wmt-gmv-98k-q4.jpg"
  },
  {
    id: "wmt-2",
    platform: "walmart",
    platformLabel: "Walmart US",
    dotClass: "dot-walmart",
    period: "Oct 26 – Nov 30, 2024",
    stat: "$75,190.25",
    caption: "Single Cycle Product Sales & $40,587.62 Net Payout",
    sub1Label: "Net Paid to Bank",
    sub1Val: "$40,587.62",
    sub2Label: "WFS Fulfillment",
    sub2Val: "Active Tier",
    img: "assets/portfolio/walmart/wmt-statement-75k-nov.jpg"
  },
  {
    id: "new-1",
    platform: "newegg",
    platformLabel: "Newegg US",
    dotClass: "dot-newegg",
    period: "Full Year 2023",
    stat: "$89,293.62",
    caption: "High-Ticket Hardware & Tech Category Store",
    sub1Label: "Average Order Value",
    sub1Val: "$647.06",
    sub2Label: "Promo Reliance",
    sub2Val: "0.00% (100% Organic)",
    img: "assets/portfolio/newegg/newegg-us-89k-2023.png"
  },
  {
    id: "amz-4",
    platform: "amazon",
    platformLabel: "Amazon Canada",
    dotClass: "dot-amazon",
    period: "Jan 2024 – Dec 2024",
    stat: "$236,823.20",
    caption: "Cross-Border Canadian Marketplace Growth",
    sub1Label: "Units Ordered",
    sub1Val: "424 Units",
    sub2Label: "Avg. Order Value",
    sub2Val: "$648.83",
    img: "assets/portfolio/amazon/amz-ca-236k-2024.png"
  },
  {
    id: "shp-1",
    platform: "shopify",
    platformLabel: "Shopify DTC",
    dotClass: "dot-shopify",
    period: "12-Month Snapshot",
    stat: "$67,884.70",
    caption: "Direct-to-Consumer Brand Storefront",
    sub1Label: "Net Sales Velocity",
    sub1Val: "+59.5K% YoY",
    sub2Label: "Conversion Lift",
    sub2Val: "+136% CR",
    img: "assets/portfolio/shopify/shopify-67k-12mo.png"
  },
  {
    id: "new-2",
    platform: "newegg",
    platformLabel: "Newegg Canada",
    dotClass: "dot-newegg",
    period: "Jan 2024 – Dec 2024",
    stat: "CA$61,668.42",
    caption: "Newegg.ca Cross-Border B2C Tech Expansion",
    sub1Label: "Average Order Value",
    sub1Val: "CA$948.74",
    sub2Label: "Units Sold",
    sub2Val: "121 Units",
    img: "assets/portfolio/newegg/newegg-ca-61k-2024.png"
  },
  {
    id: "amz-5",
    platform: "amazon",
    platformLabel: "Amazon US",
    dotClass: "dot-amazon",
    period: "Dec 2024 – Jan 2025",
    stat: "$73,523.83",
    caption: "Verified Bank Settlement Disbursement Ledger",
    sub1Label: "Peak Single Payout",
    sub1Val: "$30,498.84",
    sub2Label: "Trace Status",
    sub2Val: "Acknowledged / Done",
    img: "assets/portfolio/amazon/amz-payouts-73k-us.png"
  },
  {
    id: "tik-1",
    platform: "tiktok",
    platformLabel: "TikTok Shop US",
    dotClass: "dot-tiktok",
    period: "Aug 2024 – Jan 2025",
    stat: "$20,498.18",
    caption: "Social Commerce & Creator Affiliate Engine",
    sub1Label: "Orders Completed",
    sub1Val: "180 Orders",
    sub2Label: "Items Sold",
    sub2Val: "195 Units",
    img: "assets/portfolio/tiktok/tiktok-gmv-20k.png"
  },
  {
    id: "bby-1",
    platform: "bestbuy",
    platformLabel: "Best Buy",
    dotClass: "dot-bestbuy",
    period: "Jul 2024 – Oct 2024",
    stat: "$39,997.46",
    caption: "Gated Marketplace Bi-Weekly Seller Settlements",
    sub1Label: "Peak Weekly Payout",
    sub1Val: "$6,118.05",
    sub2Label: "Channel Tier",
    sub2Val: "Authorized Partner",
    img: "assets/portfolio/bestbuy/bestbuy-settlements-2024.png"
  },
  {
    id: "shn-1",
    platform: "shein",
    platformLabel: "SHEIN US",
    dotClass: "dot-shein",
    period: "Jan 01 – Jan 30, 2025",
    stat: "190 Orders",
    caption: "High-Velocity Apparel & Beauty Hub (LA UTC-8)",
    sub1Label: "Product Quantity",
    sub1Val: "217 Units",
    sub2Label: "30-Day Volume",
    sub2Val: "$3,083.88",
    img: "assets/portfolio/shein/shein-orders-190-jan2025.png"
  },
  {
    id: "wmt-3",
    platform: "walmart",
    platformLabel: "Walmart US",
    dotClass: "dot-walmart",
    period: "Aug 1 – Oct 31, 2024",
    stat: "$50,592.84",
    caption: "Q3 Account Sales Summary & Buy-Box Dominance",
    sub1Label: "Units Sold",
    sub1Val: "3,188 Units",
    sub2Label: "Total Orders",
    sub2Val: "2,674 Orders",
    img: "assets/portfolio/walmart/wmt-gmv-50k-q3.jpg"
  },
  {
    id: "amz-6",
    platform: "amazon",
    platformLabel: "Amazon MENA",
    dotClass: "dot-amazon",
    period: "Jun 2024 – Sep 2024",
    stat: "SAR 152,489.12",
    caption: "International MENA Marketplace Settlement Ledger",
    sub1Label: "Peak Bi-Weekly Transfer",
    sub1Val: "SAR 30,545.40",
    sub2Label: "Account Health",
    sub2Val: "100% Compliant",
    img: "assets/portfolio/amazon/amz-statements-sar-152k.png"
  },
  {
    id: "new-3",
    platform: "newegg",
    platformLabel: "Newegg Business",
    dotClass: "dot-newegg",
    period: "Jan 01 – Jan 29, 2025",
    stat: "$13,680.46",
    caption: "B2B Commercial Procurement Portal Velocity",
    sub1Label: "B2B Avg Order Value",
    sub1Val: "$977.18",
    sub2Label: "Units Sold",
    sub2Val: "46 Units",
    img: "assets/portfolio/newegg/newegg-biz-13k-jan2025.png"
  },
  {
    id: "shp-2",
    platform: "shopify",
    platformLabel: "Shopify DTC",
    dotClass: "dot-shopify",
    period: "Jan 1 – Jan 30, 2025",
    stat: "$34,747.70",
    caption: "Single-Month DTC Revenue & 1.61% Conversion Rate",
    sub1Label: "Net Sales",
    sub1Val: "$28,156.82",
    sub2Label: "Next Payout",
    sub2Val: "$2,984.79",
    img: "assets/portfolio/shopify/shopify-34k-mtd.png"
  },
  {
    id: "tik-2",
    platform: "tiktok",
    platformLabel: "TikTok Shop US",
    dotClass: "dot-tiktok",
    period: "Jan 2025 Settlements",
    stat: "$9,886.79",
    caption: "Completed Bank Transfers & Reserve Releases",
    sub1Label: "Disbursement Status",
    sub1Val: "100% Paid",
    sub2Label: "Fulfillment",
    sub2Val: "Fulfilled by TikTok",
    img: "assets/portfolio/tiktok/tiktok-payouts-9k.png"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  if (menuBtn && mainNav) {
    menuBtn.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Hero Proof Console Switcher
  const consoleTabs = document.querySelectorAll(".console-tab");
  if (consoleTabs.length > 0) {
    consoleTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        consoleTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const key = tab.getAttribute("data-console");
        const data = HERO_CONSOLE_DATA[key];
        if (!data) return;

        document.getElementById("consoleTitle").textContent = data.title;
        document.getElementById("consoleM1Label").textContent = data.metric1Label;
        document.getElementById("consoleM1Val").textContent = data.metric1Val;
        document.getElementById("consoleM2Label").textContent = data.metric2Label;
        document.getElementById("consoleM2Val").textContent = data.metric2Val;
        document.getElementById("consoleM3Label").textContent = data.metric3Label;
        document.getElementById("consoleM3Val").textContent = data.metric3Val;

        const imgEl = document.getElementById("consoleImg");
        imgEl.src = data.img;
        imgEl.alt = data.caption;

        const frameEl = document.getElementById("consoleFrame");
        frameEl.setAttribute("data-lightbox-src", data.img);
        frameEl.setAttribute("data-lightbox-caption", data.caption);

        document.getElementById("consolePeriod").textContent = data.period;
        document.getElementById("consoleTrace").textContent = data.traceNote;
      });
    });
  }

  // Render Portfolio Grid if container exists
  const proofGrid = document.getElementById("portfolioProofGrid");
  if (proofGrid) {
    const limitAttr = proofGrid.getAttribute("data-limit");
    const maxItems = limitAttr ? parseInt(limitAttr, 10) : PORTFOLIO_ITEMS.length;

    function renderProofCards(filterPlatform = "all") {
      const filtered =
        filterPlatform === "all"
          ? PORTFOLIO_ITEMS.slice(0, maxItems)
          : PORTFOLIO_ITEMS.filter((item) => item.platform === filterPlatform);

      proofGrid.innerHTML = filtered
        .map(
          (item) => `
        <article class="proof-card" data-platform="${item.platform}">
          <div class="proof-card-header">
            <span class="proof-platform-badge">
              <span class="platform-dot ${item.dotClass}"></span>
              ${item.platformLabel}
            </span>
            <span class="proof-period">${item.period}</span>
          </div>
          <div class="proof-img-wrap" data-lightbox-src="${item.img}" data-lightbox-caption="${item.platformLabel} (${item.period}) — ${item.stat}: ${item.caption}">
            <img src="${item.img}" alt="${item.caption}" loading="lazy" />
            <div class="proof-img-overlay">
              <span class="proof-expand-pill">View Full Report ↗</span>
            </div>
          </div>
          <div class="proof-card-body">
            <div>
              <div class="proof-main-stat">${item.stat}</div>
              <div class="proof-stat-caption">${item.caption}</div>
            </div>
            <div class="proof-submetrics">
              <div class="proof-submetric">
                <span>${item.sub1Label}</span>
                <strong>${item.sub1Val}</strong>
              </div>
              <div class="proof-submetric">
                <span>${item.sub2Label}</span>
                <strong>${item.sub2Val}</strong>
              </div>
            </div>
          </div>
        </article>
      `
        )
        .join("");

      bindLightboxTriggers();
    }

    renderProofCards("all");

    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        renderProofCards(filter);
      });
    });
  }

  // Lightbox Modal Logic
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  function bindLightboxTriggers() {
    const triggers = document.querySelectorAll("[data-lightbox-src]");
    triggers.forEach((el) => {
      el.onclick = () => {
        const src = el.getAttribute("data-lightbox-src");
        const cap = el.getAttribute("data-lightbox-caption") || "Verified Seller Central Ledger";
        if (lightboxModal && lightboxImg) {
          lightboxImg.src = src;
          if (lightboxCaption) lightboxCaption.textContent = cap;
          lightboxModal.classList.add("active");
        }
      };
    });
  }

  bindLightboxTriggers();

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener("click", () => {
      lightboxModal.classList.remove("active");
    });
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove("active");
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lightboxModal.classList.remove("active");
    });
  }

  // Interactive Multi-Channel Growth & Profit Estimator
  const capitalSlider = document.getElementById("calcCapital");
  const channelsSlider = document.getElementById("calcChannels");
  const modelSelect = document.getElementById("calcModel");

  if (capitalSlider && channelsSlider) {
    const updateCalculator = () => {
      const capital = parseInt(capitalSlider.value, 10);
      const channels = parseInt(channelsSlider.value, 10);
      const modelMultiplier = modelSelect ? parseFloat(modelSelect.value) : 1.28;

      document.getElementById("calcCapitalVal").textContent =
        "$" + capital.toLocaleString();
      document.getElementById("calcChannelsVal").textContent =
        channels + (channels === 1 ? " Marketplace" : " Marketplaces");

      // Realistic inventory velocity & compounding over 12 months
      const channelBoost = 1 + (channels - 1) * 0.24;
      const projectedAnnualGmv = Math.round(
        capital * 4.4 * channelBoost * modelMultiplier
      );
      const projectedNetMargin = Math.round(projectedAnnualGmv * 0.235);
      const projectedMonthlyRunRate = Math.round((projectedAnnualGmv / 12) * 1.35);

      document.getElementById("calcGmvOut").textContent =
        "$" + projectedAnnualGmv.toLocaleString();
      document.getElementById("calcNetOut").textContent =
        "$" + projectedNetMargin.toLocaleString();
      document.getElementById("calcMonthlyOut").textContent =
        "$" + projectedMonthlyRunRate.toLocaleString() + " / mo";
    };

    capitalSlider.addEventListener("input", updateCalculator);
    channelsSlider.addEventListener("input", updateCalculator);
    if (modelSelect) modelSelect.addEventListener("change", updateCalculator);
    updateCalculator();
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    if (trigger && content) {
      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        faqItems.forEach((other) => {
          other.classList.remove("open");
          const c = other.querySelector(".faq-content");
          if (c) c.style.maxHeight = null;
        });
        if (!isOpen) {
          item.classList.add("open");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });

  // Live Contact & Strategy Form Submission to ceo@nomaenterprisesinc.com via FormSubmit AJAX
  const auditForms = document.querySelectorAll(".noma-audit-form");
  auditForms.forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type='submit']");
      const statusBox = form.querySelector(".form-status-msg");
      const originalText = btn.innerHTML;

      btn.disabled = true;
      btn.innerHTML = "Sending Your Request...";

      const formData = new FormData(form);

      try {
        const response = await fetch("https://formsubmit.co/ajax/ceo@nomaenterprisesinc.com", {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: formData
        });

        const result = await response.json();

        if (response.ok) {
          btn.innerHTML = "✓ Inquiry Sent Successfully!";
          btn.style.background = "#059669";
          btn.style.borderColor = "#059669";
          if (statusBox) {
            statusBox.style.display = "block";
            statusBox.style.background = "rgba(5, 150, 105, 0.1)";
            statusBox.style.color = "#059669";
            statusBox.style.border = "1px solid rgba(5, 150, 105, 0.3)";
            statusBox.textContent =
              "✓ Thank you! Your strategy request has been sent directly to ceo@nomaenterprisesinc.com. Our team will reach out shortly.";
          }
          form.reset();
        } else {
          // Fallback to standard POST if first-time activation is required
          form.submit();
        }
      } catch (err) {
        // Fallback to standard form POST so submission never fails
        form.submit();
      } finally {
        setTimeout(() => {
          btn.disabled = false;
          btn.innerHTML = originalText;
          btn.style.background = "";
          btn.style.borderColor = "";
        }, 7000);
      }
    });
  });
});
