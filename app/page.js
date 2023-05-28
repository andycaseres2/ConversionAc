import Conversion from "@Components/Conversion";
import Grafics from "@Components/Charts";
import HomePage from "@Components/HomePage";

export default function Home({ showConversion, showCharts, showHome }) {
  return (
    <main
      style={{ maxHeight: "100vh" }}
      className="flex w-full flex-col items-center justify-between"
    >
      {showHome && <HomePage />}
      {showConversion && <Conversion />}
      {showCharts && <Grafics />}
    </main>
  );
}
