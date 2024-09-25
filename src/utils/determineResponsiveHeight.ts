import { MutableRefObject } from 'react';

const determineResponsiveHeight = (
  imageRef: MutableRefObject<undefined | null>,
  element: string = 'firstChild'
) => {
  const clientRect = (imageRef?.current as any)?.[
    element
  ]?.getBoundingClientRect?.();
  return (9 * (clientRect?.width || 0)) / 16;
};

export default determineResponsiveHeight;
