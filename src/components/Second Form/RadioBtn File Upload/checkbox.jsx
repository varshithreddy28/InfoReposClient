import React, { useEffect, useState } from "react";
import "./checkbox.css"; // Import your custom CSS for styling
import InputText from "../InputText/input";
import InputTextNotReq from "../InputTextNotRequired/input";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RadioButtonGroup({
  options,
  selectedOption,
  onChange,
  horizontal,
  title,
  updateInfo,
  radioInpDetails,
  otherValue,
  index,
  label,
}) {
  const [showInputText, setShowInputText] = useState(false); // State variable
  const [radioValue, setRadioValue] = useState("");
  const [radioBtnInfo, setradioBtnInfo] = useState({});
  const [remark, setRemark] = useState("No");
  const [note, setNote] = useState("No");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [uploadErr, setUploadErr] = useState(false);

  const containerClassName = horizontal
    ? "radio-container horizontal"
    : "radio-container vertical";

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    onChange(index, selectedValue); // Updates the options which we are clicking
    // Check if the "Other" option is selected and toggle the input text accordingly
    setShowInputText(selectedValue === otherValue);
    setRadioValue(selectedValue);
  };

  const updateRadioDetails = (value, name) => {
    const temp = {};
    temp[label] = value;
    setradioBtnInfo(temp);
    // console.log(value);
    updateInfo(value, label);
  };

  const updateRemarkDetails = (value, name) => {
    const temp = {};
    // temp["remark"] = value;
    if (value === "")
      // if the user dont enter any remarks then i am setting the default value of inp to NO
      setRemark("No");
    else setRemark(value);
  };

  const updateNoteDetails = (value, name) => {
    const temp = {};
    // temp["remark"] = value;
    if (value === "")
      // if the user dont enter any remarks then i am setting the default value of inp to NO
      setNote("No");
    else setNote(value);
  };

  const inputDetails = {
    ...radioInpDetails,
    updateInputValue: updateRemarkDetails,
  };

  const inputDetailsNote = {
    name: "note",
    placeholder: "Note if Any",
    label: "Note if Any",
    updateInputValue: updateNoteDetails,
  };

  useEffect(() => {
    const temp = {
      value: radioValue,
      remark,
      note,
    };

    if (fileUrl && !showInputText) temp["fileUrl"] = fileUrl;

    if (!showInputText) temp["remark"] = null;

    // console.log(temp);
    updateRadioDetails({ ...temp });
  }, [radioValue, remark, note, fileUrl]);

  // useEffect(() => {
  //   console.log(radioBtnInfo);
  // }, [radioBtnInfo]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      // If the selected file is a PDF, set it in the state.
      setSelectedFile(file);
    } else {
      // If the selected file is not a PDF, display an error message.
      alert("Please select a PDF file.");
    }
  };

  const handleUpload = async (e) => {
    if (!selectedFile) {
      alert("Please select a PDF file.");
      return;
    }
    setUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "eyi4g20d");
    formData.append("folder", "Registrations");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dmumzo5xj/upload",
        formData
      );
      const data = response.data;
      setFileUrl(data.url);
      setUploaded(true);
      toast.success("Uploaded the File Successfully");
      console.log("File uploaded:", data.url);
    } catch (error) {
      setUploading(false);
      toast.error(error.message);
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <div className="checkHeader">{title}</div>
      <div className={containerClassName}>
        {options.map((option) => (
          <label
            key={option}
            className={
              horizontal ? "radio-label-horizontal" : "radio-label-vertical"
            }
          >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              name={label}
              required
            />
            <span className="radioText">{option}</span>
          </label>
        ))}

        {/* Conditional rendering of the input text */}
      </div>
      {showInputText && <InputText {...inputDetails} />}
      {/* if yes or no what ever is the Option Selected */}
      {radioValue && <InputTextNotReq {...inputDetailsNote} />}

      {radioValue == "Yes" ? (
        <>
          <div className="fileUpload">
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Form.Label>Upload Registration File(only PDF)</Form.Label>
            <div className="fileInline">
              <Form.Control
                required
                accept=".pdf"
                onChange={handleFileChange}
                type="file"
                className="fileInp"
              />
              <button
                onClick={handleUpload}
                type="button"
                className="filebtnSub"
              >
                {uploading
                  ? uploaded
                    ? "Uploaded File"
                    : "Uploading PDF"
                  : "Upload PDF"}
              </button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default RadioButtonGroup;
