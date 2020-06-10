export const webpSupport = () => {
  const webp = document.getElementsByClassName('webp');

  if (webp.length > 0) {
    return true;
  }
  return false;
};
export const prepareSrcSet = srcSet => {
  const resultString = srcSet
    .split(',')
    .map(screenSize => screenSize.split(' '));
  const cssString = resultString
    .map(size => `url(${size[0]} ${size[1]}) `)
    .join();
  return cssString;
};
