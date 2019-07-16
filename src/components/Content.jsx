import React from "react";

function Content(props) {
  let isLoaded = () => {
    return typeof props.result === "object" ? (
      <p>Huimidité {props.result.current.humidity}</p>
    ) : (
      <div className="d-flex align-items-center p-3">
        <strong>Recherche en cours...</strong>
        <span
          className="spinner-border text-danger ml-auto"
          role="status"
          aria-hidden="true"
        />
      </div>
    );
  };

  console.log("ça marche pas regarde : ", props.result);
  return (
    <div className="border p-2 shadow-lg rounded card-body">
      <p>{isLoaded()}</p>
    </div>
  );
}

export default Content;
