import Conversion from "@Components/Conversion";
import Grafics from "@Components/Grafics";
import HomePage from "@Components/HomePage";

export default function Home({ showConversion, showGrafics, showHome }) {
  return (
    <main
      style={{ maxHeight: "100vh" }}
      className="flex w-full h-full flex-col items-center justify-between"
    >
      {showHome && <HomePage />}
      {showConversion && <Conversion />}
      {showGrafics && <Grafics />}
    </main>
  );
}
