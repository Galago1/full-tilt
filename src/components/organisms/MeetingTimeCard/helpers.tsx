export const formatTime = (seconds: number, includeHours = false, pad = 1) => {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(pad, '0');
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(pad, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  if (includeHours) {
    return `${h}:${m}:${s}`;
  }
  return `${m}:${s}`;
};
