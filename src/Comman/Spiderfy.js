import React from "react";
import PropTypes from "prop-types";
// @ts-ignore
import { MAP, MARKER } from "react-google-maps/lib/constants";
import { OverlappingMarkerSpiderfier } from "ts-overlapping-marker-spiderfier";

class Spiderfy extends React.Component {
  static contextTypes = {
    [MAP]: PropTypes.object
  };

  oms;

  constructor(props, context) {
    super(props, context);
    this.oms = new OverlappingMarkerSpiderfier(this.context[MAP], {});
    this.markerNodeMounted = this.markerNodeMounted.bind(this);
  }

  markerNodeMounted(ref) {
    const marker = ref?.state[MARKER];
    this.oms.addMarker(marker);
    window.google.maps.event.addListener(marker, "spider_click", (e) => {
      if (this.props.onSpiderClick) this.props.onSpiderClick(e);
    });
  }

  render() {
    return React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, { ref: this.markerNodeMounted })
    );
  }
}

export default Spiderfy;
