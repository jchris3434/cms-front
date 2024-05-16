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
        />
      ),
    },
    buttons: {
      type: "custom",
      label: "Boutons",
      render: ({ name, onChange, value }) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {value &&
            value.map((button, index) => (
              <div key={index} style={{ marginRight: "10px" }}>
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
                  style={{ marginRight: "5px" }}
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
                  style={{ marginRight: "5px" }}
                />
              </div>
            ))}
          <button onClick={() => onChange([...(value || []), { label: "", onClick: "" }])}>Ajouter un bouton</button>
        </div>
      ),
    },
  },
  render: ({ logo, buttons = [] }) => {
    return (
      <nav>
        <div className="logo">
          {logo && <img src={logo} alt="Logo" />}
        </div>
        <ul className="buttons" style={{ display: "flex", listStyleType: "none", margin: 0, padding: 0 }}>
          {buttons.map((button, index) => (
            <li key={index} style={{ marginRight: "10px" }}>
              <button style={{ padding: "5px 10px" }} onClick={button.onClick}>{button.label}</button>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
};
