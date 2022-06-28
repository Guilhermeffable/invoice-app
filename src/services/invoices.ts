import axios from "axios";

export const getInvoices = async (lastIndex, numItems) => {
    const invoices = await axios
        .get(
            `https://invoice-api-exercise.herokuapp.com/invoices?lastIndex=${lastIndex}&numItems=${numItems}`
        )
        .then((result) => result.data);

    return invoices;
};

export const getFilteredInvoices = async (
    states,
    dateFrom,
    dateTo,
    clientName
) => {
    const invoices = await axios
        .get(
            `https://invoice-api-exercise.herokuapp.com/invoices?invoiceState=${states}&dateFrom=${dateFrom}&dateTo=${dateTo}&client=${clientName}`
        )
        .then((result) => result.data);

    return invoices;
};
