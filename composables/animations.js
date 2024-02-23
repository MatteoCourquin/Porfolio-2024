import { gsap } from 'gsap';
import { useTouchDevive } from './states';

export const useMagnet = (event, speed) => {
  if (useTouchDevive().value) return;
  var bounding = event.currentTarget.getBoundingClientRect();
  gsap.to(event.currentTarget, 1, {
    x:
      ((event.clientX - bounding.left) / event.currentTarget.offsetWidth -
        0.5) *
      (30 * speed),
    y:
      ((event.clientY - bounding.top) / event.currentTarget.offsetHeight -
        0.5) *
      (30 * speed),
  });
};

export const useResetMagnet = (event) => {
  if (useTouchDevive().value) return;
  gsap.to(event.currentTarget, 1, { x: 0, y: 0 });
};

export const useParallax = (elementRef, speed) => {
  const updateParallax = () => {
    const scrollY = window.scrollY;
    gsap.to(elementRef, {
      y: -scrollY * speed,
      ease: 'power1.out',
    });
  };

  window.addEventListener('scroll', updateParallax);

  return () => window.removeEventListener('scroll', updateParallax);
};

export const useRotateScroll = (elementRef, speed) => {
  const updateRotate = () => {
    const scrollY = window.scrollY;
    gsap.to(elementRef, {
      rotation: scrollY * speed,
      ease: 'power1.out',
    });
  };

  window.addEventListener('scroll', updateRotate);

  return () => window.removeEventListener('scroll', updateRotate);
};
