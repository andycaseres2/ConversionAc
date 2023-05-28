import { Card, Title, AreaChart } from "@tremor/react";

const dataFormatter = (number) => {
  return "$" + Intl.NumberFormat("us").format(number).toString();
};

const Grafic = ({ data, selectedCurrency, previousDate, currentDate }) => (
  <Card className="p-0 py-4 lg:p-10">
    <div className="w-full flex flex-col lg:flex-row justify-between px-5 lg:px-10 gap-2 lg:gap-0">
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
