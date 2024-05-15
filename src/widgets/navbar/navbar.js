import React from "react";

export const NavBar = {
  fields: {
    logo: {
      type: "custom", 
      label: "Logo",
      render: ({ name, onChange, value }) => (
        <input
          type="text"
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          placeholder="URL du logo"
        />
      ),
    },
    buttons: {
      type: "custom", 
      label: "Boutons",
      render: ({ name, onChange, value }) => (
        <div>
          {value && value.map((button, index) => (
            <div key={index}>
              <input
                type="text"
                value={button.label} // Champ pour le libellé
                onChange={(e) => onChange([...value.slice(0, index), { ...button, label: e.target.value }, ...value.slice(index + 1)])}
                placeholder="Libellé du bouton"
              />
              <input
                type="text"
                value={button.icon} // Champ pour l'URL de l'icône
                onChange={(e) => onChange([...value.slice(0, index), { ...button, icon: e.target.value }, ...value.slice(index + 1)])}
                placeholder="URL de l'icône"
              />
              <input
                type="text"
                value={button.onClick} // Champ pour l'action onClick
                onChange={(e) => onChange([...value.slice(0, index), { ...button, onClick: e.target.value }, ...value.slice(index + 1)])}
                placeholder="Nom de la fonction onClick"
              />
            </div>
          ))}
          <button onClick={() => onChange([...value, { label: "", icon: "", onClick: "" }])}>Ajouter un bouton</button>
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
        <ul className="buttons">
          {buttons.map((button, index) => (
            <li key={index}>
              <button onClick={button.onClick}>{button.label}</button>
              <img src={button.icon} alt={button.label} /> {/* Affichage de l'icône */}
            </li>
          ))}
        </ul>
      </nav>
    );
  },
};
