import React, { useState, useEffect } from "react";
import axios from "axios";

const IconPicker = () => {
  const [icons, setIcons] = useState([]);
  const [iconName, seticonName] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    // Fetch icons from FreePik API
    const fetchIcons = async () => {
      try {
        const response = await axios.get(
          `http://cors-anywhere.herokuapp.com/https://api.freepik.com/v1/icons?term=${iconName}`,
          {
            headers: {
              //   Authorization: {
              //     "X-Freepik-API-Key": "FPSX7f2f0ad461c54eeab3e477a4e85443e2",
              //   },
              "X-Freepik-API-Key": "FPSX7f2f0ad461c54eeab3e477a4e85443e2",
            },
          }
        );
        setIcons(response.data.data);
      } catch (error) {
        console.error("Error fetching icons:", error);
      }
    };

    fetchIcons();
  }, [iconName]);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div>
      <h2>Selected Icon:</h2>
      {selectedIcon && <img src={selectedIcon.url} alt={selectedIcon.title} />}

      <h2>Icon Picker:</h2>
      <div className="icon-picker">
        {icons.map((icon) => (
          <img
            key={icon.id}
            src={icon.url}
            alt={icon.title}
            onClick={() => handleIconSelect(icon)}
          />
        ))}
      </div>

      <input
        type="text"
        name="search"
        onChange={(el) => seticonName(el.target.value)}
      />
    </div>
  );
};

export default IconPicker;
