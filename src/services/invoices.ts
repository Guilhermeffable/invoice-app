import axios from "axios";

export const getInvoices = async (lastIndex, numItems) => {
    const invoices = await axios
        .get(
            `https://invoice-api-exercise.herokuapp.com/invoices?lastIndex=${lastIndex}&numItems=${numItems}`
        )
        .then((result) => result.data);

    return invoices;
};
