/* ============================================================
   KOIOS — shared site behavior
   - injects header + footer (consistent across pages)
   - sticky nav, mobile menu, scroll reveals
   - Tweaks controller (host protocol + localStorage persistence)
   ============================================================ */
(function () {
  "use strict";

  var KOIOS_LOGO = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1001 222\" fill=\"currentColor\" class=\"brand-mark\" role=\"img\" aria-label=\"KOIOS\"><path fill-rule=\"evenodd\" d=\"M898.0 1.5L865.0 8.5L849.0 16.5L835.5 28.0L826.5 42.0L822.5 57.0L822.5 68.0L826.5 84.0L837.0 99.5L857.0 110.5L878.0 115.5L927.0 119.5L954.0 126.5L966.5 137.0L969.5 143.0L969.5 166.0L964.5 174.0L954.0 182.5L939.0 188.5L922.0 191.5L890.0 190.5L875.0 186.5L860.0 178.5L854.5 173.0L850.0 163.5L822.5 167.0L825.5 177.0L833.5 191.0L852.0 206.5L874.0 215.5L905.0 219.5L932.0 218.5L946.0 215.5L958.0 211.5L978.0 199.5L993.5 180.0L997.5 169.0L998.5 149.0L996.5 137.0L990.5 123.0L979.0 109.5L970.0 103.5L940.0 93.5L874.0 86.5L858.0 80.5L853.5 76.0L850.5 59.0L856.5 46.0L866.0 38.5L877.0 33.5L896.0 29.5L920.0 29.5L943.0 34.5L958.0 43.5L966.0 56.5L993.5 53.0L990.5 42.0L982.5 29.0L962.0 12.5L939.0 4.5L899.0 1.5ZM328.0 3.5L303.0 8.5L282.0 18.5L268.0 28.5L255.5 41.0L244.5 56.0L233.5 81.0L229.5 103.0L229.5 120.0L233.5 141.0L241.5 161.0L252.5 178.0L266.0 192.5L296.0 211.5L320.0 218.5L333.0 219.5L355.0 218.5L379.0 211.5L402.0 198.5L420.5 181.0L432.5 164.0L440.5 146.0L445.5 122.0L445.5 100.0L440.5 77.0L432.5 59.0L422.5 44.0L405.0 26.5L390.0 16.5L372.0 8.5L357.0 4.5L329.0 3.5ZM665.0 3.5L640.0 8.5L624.0 15.5L605.0 28.5L591.5 42.0L580.5 58.0L572.5 75.0L567.5 96.0L566.5 119.0L569.5 138.0L576.5 157.0L583.5 170.0L603.0 192.5L633.0 211.5L657.0 218.5L669.0 219.5L692.0 218.5L716.0 211.5L735.0 201.5L757.5 181.0L770.5 162.0L776.5 149.0L782.5 123.0L782.5 99.0L779.5 83.0L768.5 57.0L753.5 37.0L742.0 26.5L727.0 16.5L709.0 8.5L694.0 4.5L666.0 3.5ZM2.0 8.5L1.5 73.0L5.5 82.0L18.0 90.5L32.0 90.5L38.0 87.5L108.5 9.0L75.0 8.5L37.5 53.0L34.0 56.5L27.0 56.5L26.5 10.0L25.0 8.5L3.0 8.5ZM174.0 9.5L166.5 15.0L109.5 77.0L84.5 105.0L82.5 110.0L83.5 118.0L87.5 123.0L170.0 214.5L205.5 214.0L121.5 120.0L118.5 115.0L118.5 109.0L207.5 10.0L175.0 9.5ZM494.0 9.5L494.0 215.5L520.5 215.0L520.5 10.0L495.0 9.5ZM327.0 31.5L299.0 40.5L283.0 52.5L272.5 64.0L262.5 82.0L259.5 92.0L257.5 118.0L261.5 138.0L269.5 154.0L278.5 166.0L289.0 175.5L306.0 185.5L330.0 191.5L358.0 189.5L374.0 183.5L390.0 172.5L403.5 158.0L411.5 144.0L417.5 123.0L418.5 107.0L415.5 89.0L407.5 71.0L388.0 48.5L378.0 41.5L359.0 33.5L328.0 31.5ZM664.0 31.5L653.0 33.5L636.0 40.5L612.5 60.0L605.5 70.0L597.5 88.0L594.5 101.0L594.5 121.0L597.5 135.0L604.5 151.0L620.0 170.5L643.0 185.5L667.0 191.5L691.0 190.5L704.0 186.5L722.0 176.5L736.5 163.0L751.5 136.0L754.5 124.0L754.5 99.0L744.5 71.0L724.0 47.5L696.0 33.5L665.0 31.5ZM22.0 132.5L11.0 136.5L4.5 143.0L1.5 150.0L2.0 214.5L25.0 214.5L26.5 213.0L27.0 167.5L34.0 167.5L74.0 214.5L108.5 214.0L40.0 137.5L33.0 133.5L23.0 132.5Z\"/></svg>";

  /* ---------------- nav model ---------------- */
  var NAV = [
    { href: "patients.html",  label: "For patients",  page: "patients"  },
    { href: "clinicians.html",label: "For clinicians",page: "clinicians"},
    { href: "pharma.html",    label: "For pharma",    page: "pharma"    },
    { href: "science.html",   label: "Science",       page: "science"   },
    { href: "about.html",     label: "About",         page: "about"     }
  ];

  var ACTIVE = document.body.getAttribute("data-page") || "";

  /* ---------------- header ---------------- */
  function buildHeader() {
    var links = NAV.map(function (n) {
      var cls = n.page === ACTIVE ? ' class="active"' : "";
      return '<a href="' + n.href + '"' + cls + ">" + n.label + "</a>";
    }).join("");
    var mlinks = [{ href: "index.html", label: "Home", page: "home" }]
      .concat(NAV).map(function (n) {
        return '<a href="' + n.href + '">' + n.label + "</a>";
      }).join("");

    return (
      '<header class="site-nav" id="siteNav">' +
        '<div class="wrap nav-inner">' +
          '<a class="brand" href="index.html" aria-label="KOIOS home">' +
            KOIOS_LOGO +
          "</a>" +
          '<nav class="nav-links">' + links + "</nav>" +
          '<div class="nav-cta">' +
            '<a href="patients.html" class="btn btn--primary">Get Parkiwatch <span class="arr">&rarr;</span></a>' +
          "</div>" +
          '<button class="nav-toggle" id="navToggle" aria-label="Menu" aria-expanded="false">' +
            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>' +
          "</button>" +
        "</div>" +
        '<div class="mobile-menu" id="mobileMenu">' + mlinks +
          '<a href="patients.html" style="color:var(--accent);font-weight:600">Get Parkiwatch &rarr;</a>' +
        "</div>" +
      "</header>"
    );
  }

  /* ---------------- footer ---------------- */
  function buildFooter() {
    return (
      '<footer class="site-foot">' +
        '<div class="wrap">' +
          '<div class="foot-grid">' +
            "<div>" +
              '<a class="brand" href="index.html">' + KOIOS_LOGO + '</a>' +
              '<p class="foot-tag">Clinically meaningful insight from the devices people already use, captured quietly in the background. Starting with Parkinson\u2019s.</p>' +
            "</div>" +
            "<div><h4>Solutions</h4><ul>" +
              '<li><a href="patients.html">For patients</a></li>' +
              '<li><a href="clinicians.html">For clinicians</a></li>' +
              '<li><a href="pharma.html">For pharma</a></li>' +
            "</ul></div>" +
            "<div><h4>Company</h4><ul>" +
              '<li><a href="about.html">About</a></li>' +
              '<li><a href="science.html">Science</a></li>' +
              '<li><a href="science.html#publications">Publications</a></li>' +
            "</ul></div>" +
            "<div><h4>Contact</h4><ul>" +
              '<li><a href="mailto:info@koios.care">info@koios.care</a></li>' +
              "<li>Filip Williotstraat 9</li>" +
              "<li>2600 Antwerpen, BE</li>" +
            "</ul></div>" +
          "</div>" +
          '<div class="foot-bottom">' +
            "<span>\u00A9 2026 Koios Care \u00B7 powered by noera</span>" +
            "<span>Privacy \u00B7 Terms \u00B7 VAT BE0786.830.148</span>" +
          "</div>" +
        "</div>" +
      "</footer>"
    );
  }

  /* ---------------- mount ---------------- */
  function mount() {
    var h = document.getElementById("site-header");
    if (h) h.outerHTML = buildHeader();
    var f = document.getElementById("site-footer");
    if (f) f.outerHTML = buildFooter();

    var nav = document.getElementById("siteNav");
    if (nav) {
      var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 12); };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var open = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    // scroll reveals — base state is visible; we ARM (hide) only elements that
    // start below the fold, then unarm them as they scroll in. Above-the-fold
    // content (the hero) is never armed, so it can never be stuck invisible.
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      document.querySelectorAll(".reveal").forEach(function (el) {
        if (el.getBoundingClientRect().top > vh * 0.9) {
          el.classList.add("armed");   // below the fold → hide + observe
          io.observe(el);
        }
        // above the fold → leave visible, no observation needed
      });
    }
  }

  /* ============================================================
     TWEAKS — constants live in koios-boot.js (window.KOIOS_TWEAKS)
     so the pre-paint boot and this panel never drift.
     ============================================================ */
  var KT = window.KOIOS_TWEAKS || {
    KEY: "koios:tweaks",
    DEFAULTS: { headlineFont: "fraunces", accent: "brand", radius: 12, density: "regular", dataviz: true },
    read: function () { return this.DEFAULTS; },
    apply: function () {}
  };
  var KEY = KT.KEY;
  function readTweaks() { return KT.read(); }
  function applyTweaks(t) { KT.apply(t); }

  var FONT_LABELS = { fraunces: "Fraunces", spectral: "Spectral", didot: "Didot" };

  /* ---- panel UI ---- */
  var PANEL_CSS =
    '.ktwk{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:268px;' +
      'background:rgba(251,248,243,.82);color:#251319;backdrop-filter:blur(22px) saturate(150%);' +
      '-webkit-backdrop-filter:blur(22px) saturate(150%);border:.5px solid rgba(255,255,255,.6);' +
      'border-radius:14px;box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 14px 44px rgba(58,11,30,.22);' +
      'font:12px/1.4 "DM Sans",system-ui,sans-serif;overflow:hidden}' +
    '.ktwk-hd{display:flex;align-items:center;justify-content:space-between;padding:11px 10px 11px 15px;cursor:move;user-select:none}' +
    '.ktwk-hd b{font-size:12.5px;font-weight:600;letter-spacing:.01em}' +
    '.ktwk-hd .k{font-family:"IBM Plex Mono",monospace;font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:rgba(91,17,47,.55)}' +
    '.ktwk-x{border:0;background:transparent;color:rgba(37,19,25,.5);width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:13px}' +
    '.ktwk-x:hover{background:rgba(0,0,0,.06);color:#251319}' +
    '.ktwk-body{padding:4px 15px 16px;display:flex;flex-direction:column;gap:13px}' +
    '.ktwk-row{display:flex;flex-direction:column;gap:7px}' +
    '.ktwk-lbl{display:flex;justify-content:space-between;align-items:baseline;font-weight:500;color:rgba(37,19,25,.78)}' +
    '.ktwk-lbl .v{font-family:"IBM Plex Mono",monospace;font-size:11px;color:rgba(37,19,25,.5)}' +
    '.ktwk-seg{display:flex;padding:2px;border-radius:8px;background:rgba(91,17,47,.07);gap:2px}' +
    '.ktwk-seg button{flex:1;border:0;background:transparent;color:rgba(37,19,25,.62);font:inherit;font-weight:500;' +
      'padding:5px 4px;border-radius:6px;cursor:pointer;transition:all .15s}' +
    '.ktwk-seg button[data-on="1"]{background:#fff;color:#5B112F;box-shadow:0 1px 2px rgba(0,0,0,.1)}' +
    '.ktwk-slider{-webkit-appearance:none;appearance:none;width:100%;height:4px;border-radius:999px;background:rgba(91,17,47,.16);outline:none}' +
    '.ktwk-slider::-webkit-slider-thumb{-webkit-appearance:none;width:15px;height:15px;border-radius:50%;background:#5B112F;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,.25)}' +
    '.ktwk-slider::-moz-range-thumb{width:15px;height:15px;border:0;border-radius:50%;background:#5B112F;cursor:pointer}' +
    '.ktwk-toggle{position:relative;width:34px;height:19px;border:0;border-radius:999px;background:rgba(91,17,47,.2);cursor:pointer;transition:background .15s;flex:none}' +
    '.ktwk-toggle[data-on="1"]{background:#5B112F}' +
    '.ktwk-toggle i{position:absolute;top:2px;left:2px;width:15px;height:15px;border-radius:50%;background:#fff;transition:transform .15s}' +
    '.ktwk-toggle[data-on="1"] i{transform:translateX(15px)}' +
    '.ktwk-row-h{flex-direction:row;align-items:center;justify-content:space-between}' +
    '.ktwk-chips{display:flex;gap:7px}' +
    '.ktwk-chip{flex:1;height:30px;border:0;border-radius:7px;cursor:pointer;padding:0;position:relative;' +
      'box-shadow:0 0 0 .5px rgba(0,0,0,.14),0 1px 2px rgba(0,0,0,.08);transition:transform .12s,box-shadow .12s}' +
    '.ktwk-chip:hover{transform:translateY(-1px)}' +
    '.ktwk-chip[data-on="1"]{box-shadow:0 0 0 2px #FBF8F3,0 0 0 3.5px rgba(37,19,25,.85)}' +
    '.ktwk-reset{margin-top:2px;border:0;background:rgba(91,17,47,.07);color:#5B112F;font:inherit;font-weight:600;' +
      'padding:8px;border-radius:8px;cursor:pointer}' +
    '.ktwk-reset:hover{background:rgba(91,17,47,.13)}';

  function seg(label, value, opts, onChange) {
    var row = document.createElement("div"); row.className = "ktwk-row";
    var lbl = document.createElement("div"); lbl.className = "ktwk-lbl";
    lbl.innerHTML = "<span>" + label + "</span>";
    var s = document.createElement("div"); s.className = "ktwk-seg";
    opts.forEach(function (o) {
      var b = document.createElement("button");
      b.textContent = o.label; b.setAttribute("data-on", o.value === value ? "1" : "0");
      b.onclick = function () { onChange(o.value); };
      s.appendChild(b);
    });
    row.appendChild(lbl); row.appendChild(s); return row;
  }
  function slider(label, value, min, max, unit, onChange) {
    var row = document.createElement("div"); row.className = "ktwk-row";
    var lbl = document.createElement("div"); lbl.className = "ktwk-lbl";
    lbl.innerHTML = "<span>" + label + "</span><span class='v'>" + value + unit + "</span>";
    var inp = document.createElement("input");
    inp.type = "range"; inp.className = "ktwk-slider";
    inp.min = min; inp.max = max; inp.value = value;
    inp.oninput = function () {
      lbl.querySelector(".v").textContent = inp.value + unit;
      onChange(Number(inp.value));
    };
    row.appendChild(lbl); row.appendChild(inp); return row;
  }
  function toggle(label, value, onChange) {
    var row = document.createElement("div"); row.className = "ktwk-row ktwk-row-h";
    var lbl = document.createElement("div"); lbl.className = "ktwk-lbl";
    lbl.style.flex = "1"; lbl.innerHTML = "<span>" + label + "</span>";
    var btn = document.createElement("button");
    btn.className = "ktwk-toggle"; btn.setAttribute("data-on", value ? "1" : "0");
    btn.innerHTML = "<i></i>";
    btn.onclick = function () {
      var on = btn.getAttribute("data-on") !== "1";
      btn.setAttribute("data-on", on ? "1" : "0"); onChange(on);
    };
    row.appendChild(lbl); row.appendChild(btn); return row;
  }
  function swatch(label, value, opts, onChange) {
    var row = document.createElement("div"); row.className = "ktwk-row";
    var lbl = document.createElement("div"); lbl.className = "ktwk-lbl";
    lbl.innerHTML = "<span>" + label + "</span><span class='v'>" +
      (opts.filter(function (o) { return o.value === value; })[0] || {}).label + "</span>";
    var chips = document.createElement("div"); chips.className = "ktwk-chips";
    opts.forEach(function (o) {
      var b = document.createElement("button");
      b.className = "ktwk-chip"; b.title = o.label;
      b.style.background = o.color;
      b.setAttribute("data-on", o.value === value ? "1" : "0");
      b.onclick = function () { onChange(o.value); };
      chips.appendChild(b);
    });
    row.appendChild(lbl); row.appendChild(chips); return row;
  }

  function buildPanel() {
    var t = readTweaks();
    var style = document.createElement("style"); style.textContent = PANEL_CSS;
    document.head.appendChild(style);

    var panel = document.createElement("div");
    panel.className = "ktwk"; panel.setAttribute("data-omelette-chrome", "");
    panel.style.display = "none";
    panel.innerHTML =
      '<div class="ktwk-hd"><b>Tweaks <span class="k">koios</span></b>' +
      '<button class="ktwk-x" aria-label="Close">\u2715</button></div>' +
      '<div class="ktwk-body"></div>';
    var body = panel.querySelector(".ktwk-body");

    function set(key, val) {
      t[key] = val;
      try { localStorage.setItem(KEY, JSON.stringify(t)); } catch (e) {}
      applyTweaks(t);
      try { window.parent.postMessage({ type: "__edit_mode_set_keys", edits: (function(){var o={};o[key]=val;return o;})() }, "*"); } catch (e) {}
      window.dispatchEvent(new CustomEvent("koios:tweak", { detail: { key: key, value: val, all: t } }));
      // refresh segmented button states
      body.querySelectorAll(".ktwk-seg").forEach(function () {});
    }

    function render() {
      body.innerHTML = "";
      body.appendChild(seg("Headline font", t.headlineFont,
        [{ label: "Fraunces", value: "fraunces" }, { label: "Spectral", value: "spectral" }, { label: "Didot", value: "didot" }],
        function (v) { set("headlineFont", v); render(); }));
      body.appendChild(seg("Accent", t.accent,
        [{ label: "Deep", value: "deep" }, { label: "Brand", value: "brand" }, { label: "Bright", value: "bright" }],
        function (v) { set("accent", v); render(); }));
      body.appendChild(swatch("Secondary", t.secondary,
        [{ label: "Clay", value: "clay", color: "#A85740" },
         { label: "Rose", value: "rose", color: "#AE6275" },
         { label: "Gold", value: "gold", color: "#BE9038" },
         { label: "Sage", value: "sage", color: "#6F8A5A" }],
        function (v) { set("secondary", v); render(); }));
      body.appendChild(slider("Corner radius", t.radius, 0, 22, "px",
        function (v) { set("radius", v); }));
      body.appendChild(seg("Density", t.density,
        [{ label: "Airy", value: "airy" }, { label: "Regular", value: "regular" }, { label: "Compact", value: "compact" }],
        function (v) { set("density", v); render(); }));
      body.appendChild(toggle("Show data\u2011viz", t.dataviz,
        function (v) { set("dataviz", v); }));
      var reset = document.createElement("button");
      reset.className = "ktwk-reset"; reset.textContent = "Reset to defaults";
      reset.onclick = function () {
        t = JSON.parse(JSON.stringify(KT.DEFAULTS));
        try { localStorage.setItem(KEY, JSON.stringify(t)); } catch (e) {}
        applyTweaks(t); render();
      };
      body.appendChild(reset);
    }
    render();

    document.body.appendChild(panel);

    // host protocol
    panel.querySelector(".ktwk-x").onclick = function () {
      panel.style.display = "none";
      try { window.parent.postMessage({ type: "__edit_mode_dismissed" }, "*"); } catch (e) {}
    };
    window.addEventListener("message", function (e) {
      var ty = e && e.data && e.data.type;
      if (ty === "__activate_edit_mode") panel.style.display = "";
      else if (ty === "__deactivate_edit_mode") panel.style.display = "none";
    });
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch (e) {}

    // drag
    var hd = panel.querySelector(".ktwk-hd");
    hd.addEventListener("mousedown", function (e) {
      if (e.target.classList.contains("ktwk-x")) return;
      var r = panel.getBoundingClientRect();
      var sr = window.innerWidth - r.right, sb = window.innerHeight - r.bottom;
      var sx = e.clientX, sy = e.clientY;
      function move(ev) {
        panel.style.right = Math.max(8, sr - (ev.clientX - sx)) + "px";
        panel.style.bottom = Math.max(8, sb - (ev.clientY - sy)) + "px";
      }
      function up() { window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); }
      window.addEventListener("mousemove", move); window.addEventListener("mouseup", up);
    });
  }

  /* ---------------- init ---------------- */
  function init() {
    applyTweaks(readTweaks());
    mount();
    buildPanel();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
