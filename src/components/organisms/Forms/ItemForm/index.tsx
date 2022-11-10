import React, { useEffect, Fragment, useState, ChangeEvent } from "react";
import { Delete, Plus } from "../../../../assets/svg";
import { InvoiceItem } from "../../../../utils";
import Button from "../../../atoms/Button";
import InputField from "../../../molecules/Form/InputField";

const ItemForm = ({
  onFormChange,
  saveInfo,
}: {
  onFormChange: Function;
  saveInfo: Function;
}) => {
  const [numberOfItems, setNumberOfItems] = useState<number>(1);
  const [itemsArr, setItemsArr] = useState<InvoiceItem[]>([
    { name: "", quantity: "0", price: "0" },
  ]);

  useEffect(() => {}, [itemsArr]);

  const saveItemsName = (index: number, value: string) => {
    itemsArr[index].name = value;
  };

  const saveItemsQuantity = (index: number, value: string) => {
    itemsArr[index].quantity = value;
  };

  const saveItemsPrice = (index: number, value: string) => {
    itemsArr[index].price = value;
  };

  const addItem = () => {
    setItemsArr((prevState) => [
      ...prevState,
      { name: "", quantity: "0", price: "0" },
    ]);
  };

  const deleteItem = (index1: number) => {
    setItemsArr((prevState) =>
      prevState.filter((item, index) => {
        return index !== index1;
      })
    );
  };

  return (
    <div className="info card flex flex--column flex__gap--1">
      <h2 className="font__weight--300">Item List</h2>
      {itemsArr.map((item, index) => {
        return (
          <Fragment key={index}>
            <form>
              <fieldset>
                <section className="info__form-section info__item-list flex  flex__gap--2">
                  <InputField
                    label={"Name"}
                    type={"text"}
                    id={"itemName"}
                    placeholder={""}
                    onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                      saveItemsName(index, event.currentTarget.value);
                    }}
                  />
                  <InputField
                    type={"text"}
                    label={"Quantity"}
                    id={"itemQuantity"}
                    placeholder={""}
                    onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                      saveItemsQuantity(index, event.currentTarget.value);
                    }}
                  />
                  <InputField
                    type={"text"}
                    label={"Price"}
                    id={"itemPrice"}
                    placeholder={""}
                    onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                      saveItemsPrice(index, event.currentTarget.value);
                    }}
                  />
                </section>
              </fieldset>
            </form>
            <div className="info__footer flex flex--space-between">
              <div className="flex flex--column flex__gap--1 font__weight--400">
                <p>Total</p>
                <p>
                  {(
                    ((parseInt(item.price) * parseInt(item.quantity)) / 100) *
                    100
                  ).toFixed(2)}{" "}
                  €
                </p>
              </div>
              <Button
                type="button"
                buttonStyle="inline"
                onClick={() => deleteItem(index)}
              >
                <Delete />
                Delete
              </Button>
            </div>

            <hr />
          </Fragment>
        );
      })}
      <div className="info__button flex flex--center">
        <Button type="button" buttonStyle="inline" onClick={addItem}>
          Add new Item <Plus />
        </Button>
      </div>
      <Button
        type="button"
        buttonStyle="primary"
        onClick={() => saveInfo(itemsArr)}
      >
        Create
      </Button>
    </div>
  );
};

export default ItemForm;
