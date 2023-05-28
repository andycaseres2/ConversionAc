export const chartsFetch = async (currency, date) => {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/${date}..?to=USD,${currency}`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
