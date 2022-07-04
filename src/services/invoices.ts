import axios from "axios";
import { InvoiceInterface } from "../utils/utils";

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

export const putInvoice = async (invoice: InvoiceInterface) => {
    const status = await axios
        .put("https://invoice-api-exercise.herokuapp.com/invoices", invoice)
        .then((result) => result.status);

    return status;
};
