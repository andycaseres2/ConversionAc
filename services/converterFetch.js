export const converterFetch = async (
  amount,
  selectedCurrencyFrom,
  selectedCurrencyTo
) => {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${selectedCurrencyFrom}&to=${selectedCurrencyTo}`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
