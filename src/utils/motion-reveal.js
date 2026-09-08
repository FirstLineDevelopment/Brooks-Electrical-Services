const defaultTargets = [
  ".hero-copy > *",
  ".hero-media",
  ".trust-grid > *",
  ".service-card",
  ".diagnostic-row",
  ".reason-card",
  ".local-proof",
  ".timeline article",
  ".availability-note",
  ".sector-grid article",
  ".area-cover",
  ".reviews-panel",
  ".review-grid article",
  ".about-section .lead",
  ".quote-panel",
  ".contact-card",
  ".site-footer"
];

export function bindMotionReveal({
  selectors = defaultTargets,
  visibleClass = "is-visible",
  rootMargin = "0px 0px -12% 0px",
  staggerStep = 70,
  maxDelay = 280
} = {}) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const targets = selectors
    .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
    .filter((target, index, list) => list.indexOf(target) === index);

  if (!targets.length) return;

  targets.forEach((target, index) => {
    target.dataset.reveal = target.dataset.reveal || "up";
    target.style.setProperty("--reveal-delay", `${Math.min(index * staggerStep, maxDelay)}ms`);
  });

  if (media.matches || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add(visibleClass));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add(visibleClass);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin, threshold: 0.12 }
  );

  targets.forEach((target) => observer.observe(target));
}
