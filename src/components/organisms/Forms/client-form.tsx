import React, { useState } from "react";
import { Client, InvoiceInterface } from "../../../utils";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

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

  const saveName = (value: string) => {
    newClient.name = value;
  };

  const saveEmail = (value: string) => {
    newClient.email = value;
  };

  const saveStreet = (value: string) => {
    newClient.clientAddress.street = value;
  };

  const saveCity = (value: string) => {
    newClient.clientAddress.city = value;
  };

  const saveZipCode = (value: string) => {
    newClient.clientAddress.zipCode = value;
  };

  const saveCountry = (value: string) => {
    newClient.clientAddress.country = value;
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
            <div className="info__container flex flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="clientName">
                Name
              </label>
              <Input
                id="clientName"
                placeholder=""
                onChange={(value: string) => saveName(value)}
              />
            </div>
            <div className="info__container flex  flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="clientEmail">
                Email
              </label>
              <Input
                id="clientEmail"
                placeholder=""
                onChange={(value: string) => saveEmail(value)}
              />
            </div>
          </section>
        </fieldset>
      </form>
      <h2 className="font__weight--300">Billing Address Information</h2>
      <form>
        <fieldset>
          <section className="info__form-section info__client-address flex flex__gap--1">
            <div className="info__container flex  flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="clientStreet">
                Street
              </label>
              <Input
                id="clientStreet"
                placeholder=""
                onChange={(value: string) => saveStreet(value)}
              />
            </div>
            <div className="info__container flex flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="clientCity">
                City
              </label>
              <Input
                id="clientCity"
                placeholder=""
                onChange={(value: string) => saveCity(value)}
              />
            </div>
            <div className="info__container flex flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="clientZipCode">
                Zip code
              </label>
              <Input
                id="clientZipCode"
                placeholder=""
                onChange={(value: string) => saveZipCode(value)}
              />
            </div>
            <div className="info__container flex flex--column flex__gap--1">
              <label className="font__weight--400" htmlFor="clientCountry">
                Country
              </label>
              <Input
                id="clientCountry"
                placeholder=""
                onChange={(value: string) => saveCountry(value)}
              />
            </div>
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
