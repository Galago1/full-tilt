import mediaQuery from 'css-mediaquery';

export const resizeWindow = (x: number = 1500, y: number = 1500) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};
export function createMatchMedia(width: number) {
  return (query: any) => ({
    matches: mediaQuery.match(query, {
      width
    }),
    addListener: () => {},
    removeListener: () => {}
  });
}
