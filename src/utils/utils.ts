export interface InvoiceInterface {
  billingAddress: BillingAddress;
  client: Client;
  invoiceId: string;
  invoiceDate: string;
  invoiceDescription: string;
  items: [InvoiceItem];
  invoiceState: string;
  invoicePaymentDate: string;
}

export interface BillingAddress {
  city: string;
  country: string;
  street: string;
  zipCode: string;
}

export interface InvoiceItem {
  name: string;
  quantity: string;
  price: string;
}

export interface Client {
  clientAddress: BillingAddress;
  name: string;
  email: string;
}

export interface FilterValues {
  paidPill: string;
  canceledPill: string;
  pendingPill: string;
  dateBeginning: string;
  dateEnd: string;
  clientName: string;
}

export const initialFilterValues: FilterValues = {
  paidPill: "",
  canceledPill: "",
  pendingPill: "",
  dateBeginning: "",
  dateEnd: "",
  clientName: "",
};

export enum FORM_TYPE {
  INVOICE_DETAILS,
  CLIENT_DETAILS,
  ITEMS_DETAILS,
}
