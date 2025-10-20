export const timestampFormatter = (timestamp: number) => {
  const date = new Date(Number(timestamp) * 1000);
  return date.toISOString();
};
