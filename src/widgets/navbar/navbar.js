import React from "react";

export const NavBar = {
  fields: {
    logo: {
      type: "custom",
      label: "Logo",
      render: ({ name, onChange, value }) => (
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder="URL du logo"
          className="logo-input-custom"
        />
      ),
    },
    buttons: {
      type: "custom",
      label: "Boutons",
      render: ({ name, onChange, value }) => (
        <div>
          {value &&
            value.map((button, index) => (
              <div key={index} className="button-container-custom">
                <input
                  type="text"
                  value={button.label || ""}
                  onChange={(e) =>
                    onChange([
                      ...value.slice(0, index),
                      { ...button, label: e.target.value },
                      ...value.slice(index + 1),
                    ])
                  }
                  placeholder="Libellé du bouton"
                  className="button-label-input-custom"
                />

                <input
                  type="text"
                  value={button.onClick || ""}
                  onChange={(e) =>
                    onChange([
                      ...value.slice(0, index),
                      { ...button, onClick: e.target.value },
                      ...value.slice(index + 1),
                    ])
                  }
                  placeholder="Nom de la fonction onClick"
                  className="button-onclick-input-custom"
                />
              </div>
            ))}
          <div className="add-button-container-custom">
            <button className="add-button-custom" onClick={() => onChange([...(value || []), { label: "", onClick: "" }])}>Ajouter un bouton</button>
          </div>
        </div>
      ),
    },
  },
  render: ({ logo, buttons = [] }) => {
    return (
      <nav className="navbar-custom">
        <div className="logo-custom">
          {logo && <img src={logo} alt="Logo" />}
        </div>
        <ul className="buttons-custom">
          {buttons.map((button, index) => (
            <li key={index} className="button-li-custom">
              <button className="button-custom" onClick={button.onClick}>{button.label}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
};
