import { Card, Title, AreaChart } from "@tremor/react";

const dataFormatter = (number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};

const Grafic = ({ data, selectedCurrency, previousDate, currentDate }) => (
  <Card>
    <div className="w-full flex justify-between px-10">
      <Title className="font-bold text-xl">
        (USD,{selectedCurrency}) Charts
      </Title>
      <Title className="font-bold text-xl">
        The base currency of this chart is EUR
      </Title>
      <Title className="font-bold text-xl">
        Charts from {previousDate} to {currentDate}
      </Title>
    </div>
    <AreaChart
      className="h-80 w-full flex justify-center mt-4 font-bold text-xl"
      data={data}
      index="date"
      categories={[selectedCurrency, "USD"]}
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
      showAnimation={true}
    />
  </Card>
);
export default Grafic;
