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
  revealClass = "reveal-on-scroll",
  visibleClass = "is-visible",
  rootMargin = "0px 0px -12% 0px",
  staggerStep = 70,
  maxDelay = 280
} = {}) {
  const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const supportsObserver = "IntersectionObserver" in window;

  const getTargets = () =>
    selectors
      .flatMap((selector) => Array.from(document.querySelectorAll(selector)))
      .filter((target, index, list) => list.indexOf(target) === index);

  const prepareTargets = () => {
    const targets = getTargets();

    targets.forEach((target, index) => {
      target.classList.add(revealClass);
      target.style.setProperty("--reveal-delay", `${Math.min(index * staggerStep, maxDelay)}ms`);
    });

    return targets;
  };

  const targets = prepareTargets();

  if (motionReduced || !supportsObserver) {
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
    { rootMargin, threshold: 0.18 }
  );

  let revealRefreshFrame = 0;
  let revealRefreshTimeout = 0;

  const observeRevealItems = () => {
    prepareTargets()
      .filter((target) => !target.classList.contains(visibleClass))
      .forEach((target) => {
        const rect = target.getBoundingClientRect();
        const shouldReveal = rect.top < window.innerHeight * 0.88 && rect.bottom > 0;

        if (shouldReveal) {
          target.classList.add(visibleClass);
          observer.unobserve(target);
          return;
        }

        observer.observe(target);
      });
  };

  const queueRevealRefresh = () => {
    window.cancelAnimationFrame(revealRefreshFrame);
    window.clearTimeout(revealRefreshTimeout);

    revealRefreshFrame = window.requestAnimationFrame(observeRevealItems);
    revealRefreshTimeout = window.setTimeout(observeRevealItems, 120);
  };

  observeRevealItems();

  const mutationObserver = new MutationObserver(() => {
    queueRevealRefresh();
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
  window.addEventListener("click", queueRevealRefresh);
  window.addEventListener("keyup", queueRevealRefresh);
  window.addEventListener("hashchange", queueRevealRefresh);
  window.addEventListener("resize", queueRevealRefresh);
  window.addEventListener("scroll", queueRevealRefresh, { passive: true });
}
