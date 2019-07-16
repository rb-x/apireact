import React, { useState } from "react";

export default function Formulaire(props) {
  let [value, setValue] = useState("");
  return (
    <div className="row">
      <div className="col-md-8 mx-auto mt-4">
        <form
          className="form-group"
          onSubmit={e => props.handleSubmit(e, value)}
        >
          <div className="input-group-append">
            <input
              className="form-control"
              type="text"
              placeholder="Entrer le nom de la ville de votre choix 🙉🐵🐵🙉"
              onChange={e => setValue(e.target.value)}
              value={value}
            />
            <input type="submit" value="👀" className="btn btn-danger" />
          </div>
        </form>
      </div>
    </div>
  );
}
