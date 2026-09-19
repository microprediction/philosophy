// The list of rebukes, in one place. Add a new entry here and it appears in the
// "Rebukes" dropdown on every page.
const REBUKES = [
  { href: "./chinese-room.html", title: "The Chinese Room", who: "Searle, 1980" },
];

(function () {
  const dropdown = document.querySelector("details.dropdown");
  const menu = document.getElementById("rebuke-menu");
  if (!dropdown || !menu) return;

  const here = location.pathname.split("/").pop() || "index.html";
  const items = REBUKES.map((r) => {
    const a = document.createElement("a");
    a.href = r.href;
    a.innerHTML = `${r.title} <span class="who">${r.who}</span>`;
    if (r.href.endsWith("/" + here)) a.setAttribute("aria-current", "page");
    return a;
  });
  menu.prepend(...items);

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) dropdown.removeAttribute("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") dropdown.removeAttribute("open");
  });
})();
