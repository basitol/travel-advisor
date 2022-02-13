import React from "react";
import GoogleMapReact from "google-map-react";
import { paper, Typograpghy, useMediaQuery } from "@material-ui/core";
import { LocationCityOutlined } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

import useStyles from "./styles";

const Map = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>Map</h1>
    </div>
  );
};

export default Map;
