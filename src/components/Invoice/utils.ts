import { Client } from "../../utils/interfaces";

export interface InvoiceProps {
    ID: string;
    date: string;
    client: Client;
    description: string;
    price: number;
    state: string;
    isDesktop: boolean;
}
