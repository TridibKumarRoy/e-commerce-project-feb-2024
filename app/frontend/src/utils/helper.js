export const convertISOToDateTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString();
};
