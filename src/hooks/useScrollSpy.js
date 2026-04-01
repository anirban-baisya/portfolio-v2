import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  // activeId = which section is currently visible on screen
  // starts with the first section as default (usually "about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      // IntersectionObserver = browser's built-in "section visibility watcher"
      // fires a callback whenever a section enters or exits the screen
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // isIntersecting = true means this section just became visible
            setActiveId(entry.target.id);
            // entry.target.id = the id of the visible section e.g "skills"
            // updates activeId → navbar re-renders → correct link highlights
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        // shrinks the detection zone:
        // top: -100px  → ignores the navbar area at top
        // bottom: -60% → only triggers when section is near top of screen
        // so a section becomes "active" only when it's properly in view
        // not just barely peeking from the bottom
        threshold: 0,
        // trigger as soon as ANY pixel of the section enters the zone
      }
    );

    // ⚠️ CRITICAL BLOCK — DO NOT REMOVE
    // without this the observer is created but watches nothing
    // result: activeId never updates, nav highlight stays stuck on first section forever
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
      // if (el) is a safety guard
      // if a section id is in NAV_LINKS but its <section> tag is missing in JSX
      // getElementById returns null → observer.observe(null) would CRASH without this check
    });

    return () => observer.disconnect();
    // cleanup: turns off all observers when component unmounts
    // prevents memory leak
  }, [sectionIds, offset]);
  // re-runs only if sectionIds or offset change (they don't, so runs once on mount)

  return activeId;
  // navbar reads this value to decide which link to highlight
}