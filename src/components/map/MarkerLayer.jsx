import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import {
  MapLayer
}
from 'react-leaflet';
// import shouldPureComponentUpdate from 'react-pure-render/function';

export default class MarkerLayer extends MapLayer {
  static propTypes = {
    markers: React.PropTypes.array,
    markerComponent: React.PropTypes.func.isRequired,
  };

  // shouldComponentUpdate = shouldPureComponentUpdate;

  componentDidMount() {
    this.leafletElement = ReactDOM.findDOMNode(this.refs.container);
    this.props.map.getPanes().overlayPane.appendChild(this.leafletElement);
    if (this.props.fitBoundsOnLoad) {
      this.fitBounds();
    }
    this.attachEvents();
    this.updatePosition();
  }

  componentWillUnmount() {
    this.props.map.getPanes().overlayPane.removeChild(this.leafletElement);
  }

  markersOrPositionExtractorsChanged(props) {
    return this.props.markers !== props.markers || this.props.longitudeExtractor !== props.longitudeExtractor || this.props.latitudeExtractor !== props.latitudeExtractor;
  }

  componentDidUpdate(prevProps) {
    this.props.map.invalidateSize();
    if (this.props.fitBoundsOnUpdate && this.markersOrPositionExtractorsChanged(prevProps)) {
      this.fitBounds();
    }
    this.updatePosition();
  }

  attachEvents() {
    const map: Map = this.props.map;
    map.on('zoomend',()=>this.updatePosition());
  }

  getLocationForMarker(marker) {
    return {
      lat: marker.position.lat,
      lng: marker.position.lng
    };
  }

  updatePosition() {
    this.props.markers.forEach((marker, i) => {
      const markerElement = ReactDOM.findDOMNode(
        this.refs[this.getMarkerRefName(i)]
      );
      const points = this.props.map.latLngToLayerPoint(L.latLng(this.getLocationForMarker(marker)));
      L.DomUtil.setPosition(markerElement, points);
    });
  }

  render(): React.Element {
    return ( < div ref = "container"
      className = {
        `leaflet-objects-pane 
           leaflet-marker-pane
           leaflet-zoom-hide
           react-leaflet-marker-layer`
      } > {
        this.renderMarkers()
      } < /div>
    );
  }

  renderMarkers() {
    const style = {
      position: 'absolute'
    };
    const MarkerComponent = this.props.markerComponent;
    return this.props.markers.map((marker, index) => {
      return ( < MarkerComponent {...this.props.propsForMarkers
        }
        key = {
          index
        }
        style = {
          style
        }
        map = {
          this.props.map
        }
        ref = {
          this.getMarkerRefName(index)
        }
        marker = {
          marker
        }
        text = {
          marker.text
        }
        />
      );
    });
  }
  getMarkerRefName(index: number) {
    return `marker-${index}`;
  }

}