import React, { useState, useEffect } from "react";
import "./nameform.css";
import { GrAdd } from "react-icons/gr";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";

function NameForm({ title, handleAddNames }) {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");

  const handleAdd = () => {
    if (newName.trim() !== "") {
      setNames([...names, newName]);
      setNewName("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(names[index]);
  };

  const handleDelete = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
  };

  const handleEditName = () => {
    if (editName.trim() !== "") {
      if (editIndex !== null) {
        const updatedNames = [...names];
        updatedNames[editIndex] = editName;
        setNames(updatedNames);
        setEditIndex(null);
        setEditName("");
      }
    }
  };

  useEffect(() => {
    handleAddNames(names);
  }, [names]);

  return (
    <div className="nameform">
      <div className="nameFormInp">
        <label htmlFor="nameText" className="nameFormHeader">
          {title}
        </label>
        <div className="nameformEle">
          <input
            className="form-control"
            id="nameText"
            type="text"
            placeholder="Enter a name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className="nameAdd" type="button" onClick={handleAdd}>
            <GrAdd />
          </button>
        </div>
      </div>
      <ul>
        {names.map((name, index) => (
          <li key={index} className="nameformEle nameformEleLi">
            <div className="djf">
              <span className="indexName">{index + 1}.</span>
              {editIndex === index ? (
                <input
                  className="form-control"
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              ) : (
                name
              )}
            </div>
            <div className="nameEdit">
              <button
                className="nameAdd"
                type="button"
                onClick={() => handleDelete(index)}
              >
                <AiOutlineDelete />
              </button>
              <button
                className="nameAdd"
                type="button"
                onClick={
                  editIndex === index
                    ? () => handleEditName()
                    : () => handleEdit(index)
                }
              >
                {editIndex === index ? <TiTickOutline /> : <AiOutlineEdit />}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NameForm;
