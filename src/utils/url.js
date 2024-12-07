const isValidURL = (url) => {
  try {
    return Boolean(new URL(url));
  } catch {
    return false;
  }
};

export default isValidURL;
