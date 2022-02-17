import React from "react";
import GoogleMapReact from "google-map-react";
import { paper, Typograpghy, useMediaQuery } from "@material-ui/core";
import { LocationCityOutlined } from "@material-ui/icons/LocationOnOutlined";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  const coordinates = { lat: 0, lng: 0 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootsrapURLKeys={{ key: "AIzaSyAbxwKCE5zyqDqsiYXSvhLmHT5xKwlU5UM" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
