export const handleInputError = (arr) => {
  const err = arr.map((item) => {
    // Belum diisi
    if (item.value === "") {
      return { ...item, error: "*Belum Diisi" };
    }

    return { ...item, error: "" };
  });

  return err;
};
