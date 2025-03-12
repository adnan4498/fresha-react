export const handlePriceAndDuration = (selectedServices, currencySymbol) => {
    const cleanAndSumValues = (values, unit = "") => {
        let cleanedValues = values.map(v => v?.replace(unit, "").replace(",", ""));
        let total = cleanedValues.reduce((sum, v) => sum + Number(v), 0);
        return unit === "min" ? `${total} mins` : String(total); // price accepted as string in further files
    };

    return {
        price: cleanAndSumValues(selectedServices.map(item => item?.price), currencySymbol),
        duration: cleanAndSumValues(selectedServices.map(item => item?.duration), "min")
    };
};