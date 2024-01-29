import React, { Ref } from "react";
import { Marker } from "react-google-maps";

function CustomMarker(props, ref) {
  return <Marker ref={ref} {...props} />;
}

export default React.forwardRef(CustomMarker);
