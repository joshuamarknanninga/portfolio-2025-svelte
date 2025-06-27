// src/lib/animateOnScroll.js
export function animateOnScroll(node, { animation = 'fadeInUp' }) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add(`animate-${animation}`);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return { destroy() { observer.disconnect() } };
  }
  