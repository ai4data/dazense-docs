/**
 * Dark Mode Text Visibility Fix for Mintlify
 *
 * Problem: Mintlify's CSS loads from CDN AFTER custom CSS files,
 * overriding our color fixes even with !important.
 *
 * Solution: Inject a <style> element via JavaScript AFTER all
 * Mintlify styles have loaded. When two !important rules conflict,
 * the one appearing later in the cascade wins.
 *
 * This file is auto-included by Mintlify on every page because
 * any .js file in the content directory is loaded as a <script> tag.
 */
(function () {
  "use strict";

  var STYLE_ID = "dazense-dark-mode-fix";

  var CSS = [
    "/* ================================================= */",
    "/* dazense dark mode text visibility fix              */",
    "/* Injected via JS to ensure cascade priority         */",
    "/* ================================================= */",
    "",
    "/* --- Base text color --- */",
    "html.dark body { color: #E8E4F0 !important; }",
    "",
    "/* --- Headings: pure white --- */",
    "html.dark h1,",
    "html.dark h2,",
    "html.dark h3,",
    "html.dark h4,",
    "html.dark h5,",
    "html.dark h6 {",
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Body text elements --- */",
    "html.dark p,",
    "html.dark li,",
    "html.dark td,",
    "html.dark th,",
    "html.dark blockquote,",
    "html.dark figcaption,",
    "html.dark label,",
    "html.dark dt,",
    "html.dark dd {",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "/* --- Bold / strong text: pure white --- */",
    "/* Critical for step headers and key terms */",
    "html.dark strong,",
    "html.dark b {",
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Font weight classes used by Mintlify/Tailwind --- */",
    "html.dark .font-semibold,",
    "html.dark .font-bold,",
    'html.dark [class*="font-semibold"],',
    'html.dark [class*="font-bold"] {',
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Links --- */",
    "html.dark .prose a,",
    'html.dark main a:not([class*="btn"]):not([class*="button"]):not(#navbar a):not(#sidebar a):not(#pagination a) {',
    "  color: #D4C4FF !important;",
    "  text-decoration: underline !important;",
    "  text-underline-offset: 2px !important;",
    "}",
    "",
    "html.dark .prose a:hover,",
    "html.dark main a:hover {",
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Inline code (not inside pre blocks) --- */",
    "html.dark :not(pre) > code {",
    "  color: #FFFFFF !important;",
    "  background: rgba(255, 255, 255, 0.1) !important;",
    "  padding: 0.15em 0.4em !important;",
    "  border-radius: 4px !important;",
    "  border: 1px solid rgba(255, 255, 255, 0.12) !important;",
    "}",
    "",
    "/* --- Code blocks --- */",
    "html.dark pre {",
    "  background: rgba(255, 255, 255, 0.06) !important;",
    "  border: 1px solid rgba(255, 255, 255, 0.12) !important;",
    "}",
    "",
    "html.dark pre code {",
    "  background: transparent !important;",
    "  border: none !important;",
    "  padding: 0 !important;",
    "}",
    "",
    "/* --- List markers --- */",
    "html.dark li::marker {",
    "  color: #C8C4D8 !important;",
    "}",
    "",
    "/* --- Override Tailwind gray text utilities --- */",
    "html.dark .text-gray-400,",
    "html.dark .text-gray-500,",
    "html.dark .text-gray-600,",
    "html.dark .text-gray-700,",
    "html.dark .text-slate-400,",
    "html.dark .text-slate-500,",
    "html.dark .text-slate-600,",
    "html.dark .text-zinc-400,",
    "html.dark .text-zinc-500,",
    "html.dark .text-zinc-600,",
    "html.dark .text-neutral-400,",
    "html.dark .text-neutral-500,",
    "html.dark .text-neutral-600 {",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "/* --- Lighter Tailwind grays → white --- */",
    "html.dark .text-gray-100,",
    "html.dark .text-gray-200,",
    "html.dark .text-gray-300,",
    "html.dark .text-slate-100,",
    "html.dark .text-slate-200,",
    "html.dark .text-slate-300,",
    "html.dark .text-zinc-100,",
    "html.dark .text-zinc-200,",
    "html.dark .text-zinc-300 {",
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Tailwind dark: variant classes (escaped colon) --- */",
    "html.dark .dark\\:text-gray-300,",
    "html.dark .dark\\:text-gray-400,",
    "html.dark .dark\\:text-gray-500,",
    "html.dark .dark\\:text-gray-600,",
    "html.dark .dark\\:text-slate-300,",
    "html.dark .dark\\:text-slate-400,",
    "html.dark .dark\\:text-slate-500,",
    "html.dark .dark\\:text-zinc-300,",
    "html.dark .dark\\:text-zinc-400,",
    "html.dark .dark\\:text-zinc-500,",
    "html.dark .dark\\:text-neutral-300,",
    "html.dark .dark\\:text-neutral-400,",
    "html.dark .dark\\:text-neutral-500 {",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "/* --- Tailwind prose custom properties --- */",
    "html.dark .prose {",
    "  --tw-prose-body: #E8E4F0 !important;",
    "  --tw-prose-headings: #FFFFFF !important;",
    "  --tw-prose-bold: #FFFFFF !important;",
    "  --tw-prose-links: #D4C4FF !important;",
    "  --tw-prose-counters: #C8C4D8 !important;",
    "  --tw-prose-bullets: #C8C4D8 !important;",
    "  --tw-prose-code: #FFFFFF !important;",
    "  --tw-prose-pre-code: #FFFFFF !important;",
    "  --tw-prose-pre-bg: rgba(255, 255, 255, 0.06) !important;",
    "  --tw-prose-quotes: #E8E4F0 !important;",
    "  --tw-prose-captions: #C8C4D8 !important;",
    "  --tw-prose-hr: rgba(255, 255, 255, 0.12) !important;",
    "  --tw-prose-th-borders: rgba(255, 255, 255, 0.12) !important;",
    "  --tw-prose-td-borders: rgba(255, 255, 255, 0.12) !important;",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "/* --- Sidebar --- */",
    "html.dark #sidebar a,",
    "html.dark #sidebar span,",
    "html.dark #sidebar p,",
    "html.dark #sidebar div:not([class*='bg-']),",
    "html.dark #sidebar button,",
    "html.dark #sidebar li {",
    "  color: #D8D4E4 !important;",
    "}",
    "",
    "html.dark #sidebar a:hover,",
    "html.dark #sidebar button:hover {",
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Table of contents --- */",
    "html.dark #table-of-contents a,",
    "html.dark #table-of-contents span,",
    "html.dark #table-of-contents li {",
    "  color: #C8C4D8 !important;",
    "}",
    "",
    "html.dark #table-of-contents a:hover {",
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Navbar --- */",
    "html.dark #navbar a,",
    "html.dark #navbar span,",
    "html.dark #navbar button {",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "html.dark #navbar a:hover,",
    "html.dark #navbar button:hover {",
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Pagination --- */",
    "html.dark #pagination a,",
    "html.dark #pagination span {",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "html.dark #pagination a:hover {",
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Eyebrow label --- */",
    "html.dark .eyebrow {",
    "  color: #A78BFA !important;",
    "}",
    "",
    "/* --- Steps component --- */",
    "html.dark .step,",
    "html.dark [data-step],",
    "html.dark .step-number {",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "/* --- Callouts --- */",
    "html.dark .callout,",
    'html.dark [class*="callout"],',
    "html.dark [data-callout-type] {",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "/* --- Tabs --- */",
    'html.dark [role="tab"] {',
    "  color: #D8D4E4 !important;",
    "}",
    "",
    'html.dark [role="tab"][aria-selected="true"] {',
    "  color: #FFFFFF !important;",
    "}",
    "",
    "/* --- Search placeholder --- */",
    "html.dark ::placeholder {",
    "  color: #A8A4B8 !important;",
    "  opacity: 1 !important;",
    "}",
    "",
    "/* --- Table headers --- */",
    "html.dark thead th {",
    "  color: #FFFFFF !important;",
    "  background: rgba(255, 255, 255, 0.05) !important;",
    "}",
    "",
    "/* --- Keyboard shortcuts --- */",
    "html.dark kbd {",
    "  color: #FFFFFF !important;",
    "  background: rgba(255, 255, 255, 0.12) !important;",
    "  border: 1px solid rgba(255, 255, 255, 0.3) !important;",
    "}",
    "",
    "/* --- Footer --- */",
    "html.dark footer a,",
    "html.dark footer span,",
    "html.dark footer p {",
    "  color: #B8B4C8 !important;",
    "}",
    "",
    "html.dark footer a:hover {",
    "  color: #E8E4F0 !important;",
    "}",
    "",
    "/* --- Syntax highlighting: preserve code colors --- */",
    "html.dark .token.comment,",
    "html.dark .token.prolog,",
    "html.dark .token.doctype { color: #9CA3AF !important; }",
    "",
    "html.dark .token.punctuation { color: #E5E7EB !important; }",
    "",
    "html.dark .token.property,",
    "html.dark .token.tag,",
    "html.dark .token.boolean,",
    "html.dark .token.number,",
    "html.dark .token.constant,",
    "html.dark .token.symbol { color: #FCA5A5 !important; }",
    "",
    "html.dark .token.selector,",
    "html.dark .token.attr-name,",
    "html.dark .token.string,",
    "html.dark .token.char,",
    "html.dark .token.builtin { color: #86EFAC !important; }",
    "",
    "html.dark .token.operator,",
    "html.dark .token.entity,",
    "html.dark .token.url { color: #E5E7EB !important; }",
    "",
    "html.dark .token.atrule,",
    "html.dark .token.attr-value,",
    "html.dark .token.keyword { color: #F9A8D4 !important; }",
    "",
    "html.dark .token.function,",
    "html.dark .token.class-name { color: #A78BFA !important; }",
    "",
    "html.dark .token.regex,",
    "html.dark .token.important,",
    "html.dark .token.variable { color: #FCD34D !important; }",
  ].join("\n");

  /**
   * Inject (or re-inject) the override stylesheet at the very end of <head>.
   * Being last in the cascade means our !important rules beat Mintlify's.
   */
  function injectStyles() {
    var existing = document.getElementById(STYLE_ID);
    if (existing) existing.remove();

    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  // --- Inject at multiple lifecycle points to guarantee we're last ---

  // 1. Inject immediately if head exists
  if (document.head) {
    injectStyles();
  }

  // 2. Re-inject when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectStyles);
  }

  // 3. Re-inject after all resources (CSS files) have loaded
  window.addEventListener("load", function () {
    injectStyles();
    // Safety: re-inject after short delays to catch late-loading Mintlify CSS
    setTimeout(injectStyles, 200);
    setTimeout(injectStyles, 1000);
    setTimeout(injectStyles, 3000);
  });

  // 4. Watch for new <style> or <link> elements added to <head>
  //    and re-inject to maintain last position in cascade
  if (typeof MutationObserver !== "undefined") {
    var debounceTimer = null;

    var observer = new MutationObserver(function (mutations) {
      var shouldReinject = false;

      for (var i = 0; i < mutations.length; i++) {
        var nodes = mutations[i].addedNodes;
        for (var j = 0; j < nodes.length; j++) {
          var node = nodes[j];
          if (node.id === STYLE_ID) continue; // Ignore our own element
          if (node.tagName === "STYLE" || node.tagName === "LINK") {
            shouldReinject = true;
            break;
          }
        }
        if (shouldReinject) break;
      }

      if (shouldReinject) {
        // Debounce: wait for batch of style changes to finish
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(injectStyles, 50);
      }
    });

    var startObserving = function () {
      observer.observe(document.head, { childList: true });
    };

    if (document.head) {
      startObserving();
    } else {
      document.addEventListener("DOMContentLoaded", startObserving);
    }
  }
})();
