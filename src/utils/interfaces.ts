export interface InvoiceInterface {
    billingAddress: object;
    client: Client;
    invoiceId: string;
    invoiceDate: string;
    invoiceDescription: string;
    items: [InvoiceItem];
    invoiceState: string;
    invoicePaymentDate: string;
}

export interface InvoiceItem {
    name: string;
    quantity: string;
    price: string;
}

export interface Client {
    clientAddress: string;
    name: string;
    email: string;
}

export interface FilterValues {
    paidPill: string;
    canceledPill: string;
    pendingPill: string;
    dateFrom: string;
    dateTo: string;
    clientName: string;
}
