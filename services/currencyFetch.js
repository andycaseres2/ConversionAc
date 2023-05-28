export const currencyFetch = async () => {
  try {
    const res = await fetch("https://api.frankfurter.app/currencies");
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
