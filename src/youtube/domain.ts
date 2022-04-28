export const waitForImages = () => {
  return new Promise((resolve) => {
    const check = () => {
      for (let i = 0; i < document.images.length; i++)
        if (!document.images[i].complete || !document.images[i].naturalHeight) return false;
      return true;
    };

    if (check()) return resolve(true);

    const interval = setInterval(() => {
      if (check()) {
        clearInterval(interval);
        return resolve(true);
      }
    }, 500);
  });
}

export default {
  waitForImages
}