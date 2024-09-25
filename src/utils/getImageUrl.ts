const getImageUrl = async (file: File) => {
  const readFile = async (file: File) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    });
  };

  const setImageDataUrl = (await readFile(file)) as string;

  return setImageDataUrl;
};

export default getImageUrl;
