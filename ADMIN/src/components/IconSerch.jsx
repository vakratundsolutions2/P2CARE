import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconContext } from "react-icons";

const IconSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const fetchIcons = async () => {
      if (!searchTerm) return;

      const apiKey =
        "TA1wfb8NGTtMFdGMKZCJsBr29Tw21NBuI0y5Defs9I5TnTuyxkyn3cF83FNmid5H";
      const apiSecret =
        "BiBIcckppltXp4VlPXAEkdwxtoBtCgDdPOLTueH525B0ClU9NCXJI3Xoi82Q9ziU";

      const url = `https://api.iconfinder.com/v3/icons/search?query=${searchTerm}`;
      const authHeader = `Bearer ${btoa(`${apiKey}:${apiSecret}`)}`; // Base64 encode API key and secret

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
        });

        setIcons(response.data.icons);
      } catch (error) {
        console.error(error);
      }
    };

    fetchIcons();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for icons..."
      />
      {icons.length > 0 && (
        <IconContext>
          <ul>
            {icons.map((icon) => (
              <li key={icon.id}>
                <i className={`icon-${icon.id}`} />
                <span>{icon.raster_sizes[24].formats[0].preview_url}</span>
              </li>
            ))}
          </ul>
        </IconContext>
      )}
    </div>
  );
};

export default IconSearch;
