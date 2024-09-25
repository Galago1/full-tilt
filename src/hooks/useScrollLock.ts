import { useEffect } from 'react';

const useScrollLock = () => {
  useEffect(() => {
    if (globalThis?.document) {
      const body = globalThis.document.body;

      const observer = new MutationObserver(() => {
        body.style.touchAction = body.style.overflow === 'hidden' ? 'none' : '';
      });

      observer.observe(body, {
        attributes: true,
        attributeFilter: ['style']
      });
    }
  }, []);
};

export default useScrollLock;
