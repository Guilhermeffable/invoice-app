export interface InvoiceInterface {
  billingAddress?: BillingAddress;
  client?: Client;
  invoiceId?: string;
  invoiceDate?: string;
  invoiceDescription?: string;
  items?: InvoiceItem[];
  invoiceState?: string;
  invoicePaymentDate?: string;
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
  order: string;
}

export interface BreadcrumbLink {
  title: string;
  url: string;
}

export interface InvoiceSearch {
  lastIndex: number;
  lastNum: number;
  states: string;
  dateBeggining: string;
  dateEnd: string;
  clientName: string;
  order: string;
}

export const initialFilterValues: FilterValues = {
  paidPill: "",
  canceledPill: "",
  pendingPill: "",
  dateBeginning: "",
  dateEnd: "",
  clientName: "",
  order: "",
};

export enum FORM_TYPE {
  INVOICE_DETAILS,
  CLIENT_DETAILS,
  ITEMS_DETAILS,
}
