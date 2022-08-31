import { Client } from "../../../utils/utils";

export interface InvoiceProps {
  ID: string;
  date: string;
  client: Client;
  description: string;
  price: number;
  state: string;
}
