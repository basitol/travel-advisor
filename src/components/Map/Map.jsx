import React from "react";
import GoogleMapReact from "google-map-react";
import { paper, Typograpghy, useMediaQuery } from "@material-ui/core";
import { LocationCityOutlined } from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootsrapURLKeys={{ key: "AIzaSyAbxwKCE5zyqDqsiYXSvhLmHT5xKwlU5UM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          const {
            center: { lat, lng },
            marginBounds: { ne, sw },
          } = e;
          if (lat && lng) {
            // set your coordinate state here
            setCoordinates({ lat, lng });
          }
          if (ne && sw) {
            setBounds({ ne, sw });
          }
          console.log(e);
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
