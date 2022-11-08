import React, { ChangeEvent, useState } from "react";
import { Client, InvoiceInterface } from "../../../../utils";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import InputField from "../../../molecules/Form/InputField";

const ClientForm = ({
  onFormChange,
  saveInfo,
}: {
  onFormChange: Function;
  saveInfo: Function;
}) => {
  const [newClient, setNewClient] = useState<Client>({
    clientAddress: { city: "", country: "", street: "", zipCode: "" },
    email: "",
    name: "",
  });

  const saveName = (event: ChangeEvent<HTMLInputElement>) => {
    newClient.name = event.currentTarget.value;
  };

  const saveEmail = (event: ChangeEvent<HTMLInputElement>) => {
    newClient.email = event.currentTarget.value;
  };

  const saveStreet = (event: ChangeEvent<HTMLInputElement>) => {
    newClient.clientAddress.street = event.currentTarget.value;
  };

  const saveCity = (event: ChangeEvent<HTMLInputElement>) => {
    newClient.clientAddress.city = event.currentTarget.value;
  };

  const saveZipCode = (event: ChangeEvent<HTMLInputElement>) => {
    newClient.clientAddress.zipCode = event.currentTarget.value;
  };

  const saveCountry = (event: ChangeEvent<HTMLInputElement>) => {
    newClient.clientAddress.country = event.currentTarget.value;
  };

  const saveClientInfo = () => {
    saveInfo(newClient);
    onFormChange();
  };

  return (
    <div className="card info flex flex--column flex__gap--1">
      <h2 className="font__weight--300">Generic Information</h2>
      <form>
        <fieldset>
          <section className="info__form-section  info__client-generic flex  flex__gap--1">
            <InputField
              label={"Name"}
              id={"clientName"}
              onChange={saveName}
              placeholder={""}
            />
            <InputField
              label={"Email"}
              id={"clientEmail"}
              onChange={saveEmail}
              placeholder={""}
            />
          </section>
        </fieldset>
      </form>
      <h2 className="font__weight--300">Billing Address Information</h2>
      <form>
        <fieldset>
          <section className="info__form-section info__client-address flex flex__gap--1">
            <InputField
              label={"Street"}
              id={"clientStreet"}
              onChange={saveStreet}
              placeholder={""}
            />
            <InputField
              label={"City"}
              id={"clientCity"}
              onChange={saveCity}
              placeholder={""}
            />
            <InputField
              label={"Zip code"}
              id={"clientZipCode"}
              onChange={saveZipCode}
              placeholder={""}
            />
            <InputField
              label={"Country"}
              id={"clientCountry"}
              onChange={saveCountry}
              placeholder={""}
            />
          </section>
        </fieldset>
      </form>
      <Button
        type="button"
        label="Continue"
        buttonStyle="primary"
        onClick={() => saveClientInfo()}
      />
    </div>
  );
};

export default ClientForm;
