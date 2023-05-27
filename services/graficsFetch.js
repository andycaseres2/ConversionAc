export const graficsFetch = async (currency) => {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/2020-01-01..?to=USD,${currency}`
    );
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
