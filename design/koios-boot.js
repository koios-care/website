/* ============================================================
   KOIOS — pre-paint tweak boot
   Loaded synchronously in <head> (after koios.css) so tweak
   state applies before first paint — no flash. Owns the single
   source of truth for tweak constants; koios.js (panel) reuses
   window.KOIOS_TWEAKS so the two never drift.
   ============================================================ */
(function () {
  var KEY = "koios:tweaks";

  // Headline is always a SERIF — the tweak picks WHICH serif.
  var FONTS = {
    fraunces: '"Fraunces", Georgia, "Times New Roman", serif',
    spectral: '"Spectral", Georgia, "Times New Roman", serif',
    didot:    '"GFS Didot", Georgia, "Times New Roman", serif'
  };
  var ACCENTS = { deep: "#3A0B1E", brand: "#5B112F", bright: "#842048" };
  var DENS = { airy: 1.18, regular: 1, compact: 0.82 };

  // Secondary accent — the brand's warm companion to the maroon, also the
  // "positive / synced" data signal. All options are warm, muted earth tones so
  // they read as one family with the wine + cream. Clay is the default.
  var SECONDARY = {
    clay: { c: "#A85740", b: "#C2715A", f: "rgba(168,87,64,.13)" },
    rose: { c: "#AE6275", b: "#C98699", f: "rgba(174,98,117,.13)" },
    gold: { c: "#BE9038", b: "#D7AC54", f: "rgba(190,144,56,.14)" },
    sage: { c: "#6F8A5A", b: "#8BA574", f: "rgba(111,138,90,.13)" }
  };

  var DEFAULTS = {
    headlineFont: "fraunces",  // fraunces | spectral | didot
    accent:       "brand",     // deep | brand | bright
    secondary:    "clay",      // clay | rose | gold | sage
    radius:       12,          // px
    density:      "regular",   // airy | regular | compact
    dataviz:      true
  };

  function read() {
    var t = {};
    try { t = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
    var out = {};
    for (var k in DEFAULTS) out[k] = (k in t) ? t[k] : DEFAULTS[k];
    // sanitise enum values so stale/renamed options fall back cleanly
    function pick(v, map, def) { return (v in map) ? v : def; }
    out.headlineFont = pick(out.headlineFont, FONTS, DEFAULTS.headlineFont);
    out.accent       = pick(out.accent, ACCENTS, DEFAULTS.accent);
    out.secondary    = pick(out.secondary, SECONDARY, DEFAULTS.secondary);
    out.density      = pick(out.density, DENS, DEFAULTS.density);
    return out;
  }

  function apply(t) {
    var r = document.documentElement;
    r.style.setProperty("--font-display", FONTS[t.headlineFont] || FONTS.fraunces);
    r.setAttribute("data-headline-font", t.headlineFont);
    r.setAttribute("data-dataviz", t.dataviz ? "on" : "off");
    r.style.setProperty("--accent", ACCENTS[t.accent] || ACCENTS.brand);
    var s = SECONDARY[t.secondary] || SECONDARY.clay;
    r.style.setProperty("--secondary", s.c);
    r.style.setProperty("--secondary-bright", s.b);
    r.style.setProperty("--secondary-faint", s.f);
    /* legacy alias tokens so existing CSS keeps resolving */
    r.style.setProperty("--sage", s.c);
    r.style.setProperty("--sage-bright", s.b);
    r.style.setProperty("--sage-faint", s.f);
    r.style.setProperty("--radius", t.radius + "px");
    r.style.setProperty("--radius-sm", Math.max(0, t.radius - 4) + "px");
    r.style.setProperty("--radius-lg", (t.radius + 6) + "px");
    r.style.setProperty("--density", DENS[t.density] || 1);
  }

  window.KOIOS_TWEAKS = {
    KEY: KEY, FONTS: FONTS, ACCENTS: ACCENTS, SECONDARY: SECONDARY, DENS: DENS,
    DEFAULTS: DEFAULTS, read: read, apply: apply
  };

  apply(read());
})();
