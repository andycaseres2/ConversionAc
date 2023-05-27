function CurrencySelect({
  currencies,
  text,
  setSelectedCurrency,
  selectValue,
}) {
  function handleCurrencyChange(event) {
    const selectedValue = event.target.value;
    if (selectedValue !== "default") {
      setSelectedCurrency(selectedValue);
    }
  }

  return (
    <div className="w-full lg:w-full xl:w-1/3 mb-4 lg:my-4 flex flex-col gap-1 items-center">
      <label htmlFor="currency" className="block text-white text-2xl font-bold">
        {`${text}:`}
      </label>
      <select
        value={selectValue}
        id={`currency-${text}`}
        className="custom-select mt-1 block w-full h-14 px-4 border border-gray-500 bg-white rounded-full shadow-sm focus:outline-none focus:bg-white focus:border-gray-500 text-xl"
        onChange={handleCurrencyChange}
      >
        <option className="text-gray-700 text-xs w-full" value="">
          Select Currency
        </option>
        {Object.entries(currencies).map(([code, name]) => (
          <option
            key={code}
            value={code}
            className="text-gray-700 text-xs w-full"
          >
            {code} - {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencySelect;
