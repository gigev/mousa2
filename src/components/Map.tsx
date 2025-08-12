'use client';

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type MapProps = {
  height?: string; // Tailwind height classes, e.g. "h-64 md:h-72"
};

const Map: React.FC<MapProps> = ({ height = "h-64 md:h-72" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  // Replace with your real Mapbox public token
  const token = "<mapbox-public-token>";

  useEffect(() => {
    if (!mapContainer.current) return;
    if (!token || token.includes("<mapbox-public-token>")) return;

    mapboxgl.accessToken = token;

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      projection: "globe",
      zoom: 2,
      center: [39.8, 24.7], // Arabia/Türkiye region
      pitch: 30,
    });

    mapRef.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      "top-right"
    );

    mapRef.current.on("style.load", () => {
      mapRef.current?.setFog({
        color: "rgb(255,255,255)",
        "high-color": "rgb(205, 210, 230)",
        "horizon-blend": 0.2,
      });
    });

    return () => {
      mapRef.current?.remove();
    };
  }, [token]);

  const isPlaceholder = !token || token.includes("<mapbox-public-token>");

  return (
    <div className={`relative w-full ${height} rounded-xl overflow-hidden ring-1 ring-border shadow-elev`}>
      <div ref={mapContainer} className="absolute inset-0" />

      {isPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/40 backdrop-blur-sm">
          <div className="text-center px-6">
            <p className="font-medium text-foreground">Map preview unavailable</p>
            <p className="text-sm text-muted-foreground mt-1">
              Add your Mapbox public token in src/components/Map.tsx to enable the map.
            </p>
          </div>
        </div>
      )}

      {/* Google Maps Link */}
      <a 
        href="https://maps.google.com/?q=41.650950,41.636008" 
        target="_blank" 
        rel="noopener"
        className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg hover:bg-background/90 transition-colors"
        aria-label="Open location in Google Maps"
      >
        <img src="/location-icon.svg" alt="Location" className="w-5 h-5" />
      </a>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default Map;
