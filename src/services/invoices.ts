import axios from "axios";

export const getInvoices = async (
    lastIndex,
    numItems,
    states,
    dateFrom,
    dateTo,
    clientName
) => {
    const invoices = await axios
        .get(
            `https://invoice-api-exercise.herokuapp.com/invoices?lastIndex=${lastIndex}&numItems=${numItems}&invoiceState=${states}&dateFrom=${dateFrom}&dateTo=${dateTo}&client=${clientName}`
        )
        .then((result) => result.data);

    return invoices;
};