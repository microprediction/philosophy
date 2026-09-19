// The list of rebukes, in one place. Add a new entry here and it appears in the
// "Rebukes" dropdown on every page.
const REBUKES = [
  { href: "./chinese-room.html", title: "The Chinese Room", who: "Searle, 1980" },
];

(function () {
  const dropdown = document.querySelector(".dropdown");
  const toggle = document.querySelector(".dropdown-toggle");
  const menu = document.getElementById("rebuke-menu");
  if (!dropdown || !toggle || !menu) return;

  const here = location.pathname.split("/").pop() || "index.html";
  const items = REBUKES.map((r) => {
    const a = document.createElement("a");
    a.href = r.href;
    a.innerHTML = `${r.title} <span class="who">${r.who}</span>`;
    if (r.href.endsWith("/" + here)) a.setAttribute("aria-current", "page");
    return a;
  });
  menu.prepend(...items);

  const setOpen = (open) => {
    dropdown.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };
  toggle.addEventListener("click", () => setOpen(!dropdown.classList.contains("open")));
  // Close after choosing an item (matters for same-page anchors), on outside click, and on Escape.
  menu.addEventListener("click", () => setOpen(false));
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) setOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
