import axios from "axios";
import { InvoiceInterface, InvoiceSearch } from "../utils";

export const getInvoices = async (invoiceSearch: InvoiceSearch) => {
  const invoices = await axios
    .get(
      `https://invoice-api-exercise.herokuapp.com/invoices?lastIndex=${invoiceSearch.lastIndex}&numItems=${invoiceSearch.lastNum}&invoiceState=${invoiceSearch.states}&dateFrom=${invoiceSearch.dateBeggining}&dateTo=${invoiceSearch.dateEnd}&client=${invoiceSearch.clientName}&orderBy=${invoiceSearch.order}`
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

export const deleteInvoice = async (invoiceId: string) => {
  const status = await axios
    .delete(
      `https://invoice-api-exercise.herokuapp.com/invoices?invoiceId=${invoiceId}`
    )
    .then((result) => result.status);

  return status;
};

export const addInvoice = async (invoice: InvoiceInterface) => {
  const status = await axios
    .post("https://invoice-api-exercise.herokuapp.com/invoices", invoice)
    .then((result) => result.status);

  return status;
};
