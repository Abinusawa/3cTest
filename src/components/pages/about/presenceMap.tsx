import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  GeographyType,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/continents/africa.json";

const highlightedCountries: string[] = ["Nigeria", "Kenya", "South Africa"];

const MapChart: React.FC = () => {
  return (
    <ComposableMap projection="geoMercator">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo: GeographyType) => {
            const countryName = geo.properties?.name;
            const isHighlighted = highlightedCountries.includes(countryName);

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: isHighlighted ? "#FF5722" : "#DDD",
                    outline: "none",
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
