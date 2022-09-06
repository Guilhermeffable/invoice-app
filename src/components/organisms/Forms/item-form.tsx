import React, {
  ReactElement,
  useEffect,
  Fragment,
  useRef,
  useState,
  useCallback,
} from "react";
import { Close, Delete, Plus } from "../../../assets/svg";
import { InvoiceItem } from "../../../utils";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import InputField from "../../molecules/Form/InputField";

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
          <Fragment>
            <form key={item.name}>
              <fieldset>
                <section className="info__form-section info__item-list flex  flex__gap--2">
                  <InputField
                    label={"Name"}
                    id={"itemName"}
                    placeholder={""}
                    onChange={(value: string): void => {
                      saveItemsName(index, value);
                    }}
                  />
                  <InputField
                    label={"Quantity"}
                    id={"itemQuantity"}
                    placeholder={""}
                    onChange={(value: string): void => {
                      saveItemsQuantity(index, value);
                    }}
                  />
                  <InputField
                    label={"Price"}
                    id={"itemPrice"}
                    placeholder={""}
                    onChange={(value: string): void => {
                      saveItemsPrice(index, value);
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
                label="Delete"
                icon={Delete}
                onClick={() => deleteItem(index)}
              />
            </div>

            <hr />
          </Fragment>
        );
      })}
      <div className="info__button flex flex--center">
        <Button
          label="Add new item"
          type="button"
          buttonStyle="inline"
          onClick={addItem}
          icon={Plus}
        />
      </div>
      <Button
        label="Create"
        type="button"
        buttonStyle="primary"
        onClick={() => saveInfo(itemsArr)}
      />
    </div>
  );
};

export default ItemForm;
