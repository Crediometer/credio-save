import React, { useState } from "react";
// import "./App.css";
var tableRowIndex = 0;
function TableRow({ row, handleDataChange, deleteRow }) {
  const index = row.index;
  const [amount, handleChangeAmount] = useState(row.amount);
  const [transaction_type, handleChangeTransactionType] = useState(
    row.transaction_type
  );

  const updateValues = (e) => {
    var inputName = e.target.name;
    var inputValue = e.target.value;
    if (inputName == "amount") {
      handleChangeAmount(inputValue);
    } else if (inputName == "transaction_type") {
      handleChangeTransactionType(inputValue);
    }

    handleDataChange({
      index: index,
      amount: amount,
      transaction_type: transaction_type,
    });
  };

  const removeRow = () => {
    deleteRow(index);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <input
          type="text"
          name="amount"
          className="payment-page-amount"
          placeholder="Amount"
          value={amount}
          onChange={updateValues}
        ></input>
        <input
          type="text"
          name="transaction_type"
          className="payment-page-transaction-type"
          placeholder="Transaction Type"
          value={transaction_type}
          onChange={updateValues}
        ></input>
      </td>
      <td>
        <button type="button" className="btn btn-remove" onClick={removeRow}>
          &times;
        </button>
      </td>
    </tr>
  );
}

function Table() {
  const [talbeRows, setRows] = useState([
    {
      index: 0,
      amount: "",
      transaction_type: "",
    },
  ]);

  // Receive data from TableRow
  const handleChange = (data) => {
    talbeRows[data.index] = data;
  };

  // Add New Table Row
  const addNewRow = () => {
    tableRowIndex = parseFloat(tableRowIndex) + 1;
    var updatedRows = [...talbeRows];
    updatedRows[tableRowIndex] = {
      index: tableRowIndex,
    };
    setRows(updatedRows);
  };

  // Remove Table row if rows are count is more than 1
  const deleteRow = (index) => {
    if (talbeRows.length > 1) {
      var updatedRows = [...talbeRows];
      var indexToRemove = updatedRows.findIndex((x) => x.index == index);
      if (indexToRemove > -1) {
        updatedRows.splice(indexToRemove, 1);
        setRows(updatedRows);
      }
    }
  };

  return (
    <div className="customers">
      <table className="table" id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {talbeRows.map((row, index) => {
            if (row)
              return (
                <TableRow
                  key={index}
                  row={row}
                  handleDataChange={handleChange}
                  deleteRow={deleteRow}
                ></TableRow>
              );
          })}
        </tbody>
      </table>
      <div>
        <button className="btn-add" onClick={addNewRow}>
          +Add
        </button>
      </div>
    </div>
  );
}

export default Table;
