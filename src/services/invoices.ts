import axios from "axios";
import { InvoiceInterface } from "../utils/utils";

export const getInvoices = async (
  lastIndex,
  numItems,
  states,
  dateFrom,
  dateTo,
  clientName,
  order
) => {
  const invoices = await axios
    .get(
      `https://invoice-api-exercise.herokuapp.com/invoices?lastIndex=${lastIndex}&numItems=${numItems}&invoiceState=${states}&dateFrom=${dateFrom}&dateTo=${dateTo}&client=${clientName}&orderBy=${order}`
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
  debugger;
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

  console.log(status);
};
