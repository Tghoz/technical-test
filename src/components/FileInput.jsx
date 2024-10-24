import { useState, useRef, useEffect } from "react";
import Papa from "papaparse";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import "../css/fileInput.css";

export default function FileInput() {
  const inputRef = useRef();
  const [fileDetails, setFileDetails] = useState({ name: "", content: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const storedJson = localStorage.getItem("JsonFile"); // Asegúrate de usar la misma clave
    const storedFileName = localStorage.getItem("csvFileName");

    if (storedJson && storedFileName) {
      setFileDetails({ name: storedFileName, content: storedJson });
    }
  }, []);

  const isCSVFile = (file) => {
    return (
      file &&
      (file.type === "text/csv" ||
        file.type === "application/csv" ||
        file.name.endsWith(".csv"))
    );
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      if (!isCSVFile(file)) {
        setError("Por favor, sube un archivo CSV válido.");
        return;
      }

      setError("");

      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          const data = JSON.stringify(results.data);
          setFileDetails({ name: file.name, content: data });
          localStorage.setItem("JsonFile", data); // Guardamos el contenido correcto
          localStorage.setItem("csvFileName", file.name);
        },
        error: (error) => {
          setError("Error al procesar el archivo CSV.");
        },
      });
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = () => {
    setFileDetails({ name: "", content: "" });
    localStorage.removeItem("JsonFile"); // Asegúrate de usar la misma clave
    localStorage.removeItem("csvFileName");
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleChange}
      />

      <button className="file-btn" onClick={onChooseFile}>
        <span>
          <IoCloudUploadOutline />
        </span>
        Upload File
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {fileDetails.content && (
        <div className="selected-file">
          <p className="font-mono">{fileDetails.name}</p>
          <button onClick={removeFile}>
            <span>
              <MdDeleteOutline size={25} />
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
