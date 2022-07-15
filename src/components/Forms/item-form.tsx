import React, {
  ReactElement,
  useEffect,
  Fragment,
  useRef,
  useState,
  useCallback,
} from "react";
import { Close, Delete, Plus } from "../../assets/svg";
import { InvoiceItem } from "../../utils/utils";
import Button from "../Button";
import Input from "../Input";

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
                  <div className="info__container flex  flex--column flex__gap--1">
                    <label className="font__weight--400" htmlFor="itemName">
                      Name
                    </label>
                    <Input
                      id="itemName"
                      placeholder={item.name}
                      onChange={(value: string) => saveItemsName(index, value)}
                    />
                  </div>
                  <div className="info__container flex flex__gap--1">
                    <div className="flex flex--column flex__gap--1">
                      <label
                        className="font__weight--400"
                        htmlFor="itemQuantity"
                      >
                        Quantity
                      </label>
                      <Input
                        id="itemQuantity"
                        placeholder={item.quantity}
                        onChange={(value: string) =>
                          saveItemsQuantity(index, value)
                        }
                      />
                    </div>
                    <div className="flex flex--column flex__gap--1">
                      <label className="font__weight--400" htmlFor="itemPrice">
                        Price
                      </label>
                      <Input
                        id="itemPrice"
                        placeholder={item.price}
                        onChange={(value: string) =>
                          saveItemsPrice(index, value)
                        }
                      />
                    </div>
                  </div>
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
                name="deleteItem"
                value="deleteItem"
                type="button"
                buttonStyle="inline"
                text="Delete"
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
          name="addItem"
          text="Add new item"
          type="button"
          buttonStyle="inline"
          onClick={addItem}
          icon={Plus}
        />
      </div>
      <Button
        name="createInvoice"
        text="Create"
        type="button"
        buttonStyle="primary"
        onClick={() => saveInfo(itemsArr)}
      />
    </div>
  );
};

export default ItemForm;
