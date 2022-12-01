import utils from "../shared/utils";

export const waitForImages = async () => {
  const check = () => {
    for (let i = 0; i < document.images.length; i++) {
      if (!document.images[i].complete || !document.images[i].naturalHeight) { return false; }
    }
    return true;
  };

  while (!check()) await utils.wait(500);

  return true;
};

export default {
  waitForImages,
};
