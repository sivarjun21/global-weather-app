import { useEffect } from "react";

function useGlobeControls(globeRef, selectedCity) {

  // Auto rotation setup
  useEffect(() => {

    if (!globeRef.current) return;

    const controls = globeRef.current.controls();

    controls.autoRotate = true;

    controls.autoRotateSpeed = 0.4;

    controls.enableDamping = true;

    controls.dampingFactor = 0.1;

    controls.minDistance = 180;

    controls.maxDistance = 350;

  }, [globeRef]);

  // Move globe to selected city
  useEffect(() => {

    if (!selectedCity || !globeRef.current) return;

    globeRef.current.pointOfView(
      {
        lat: selectedCity.lat,
        lng: selectedCity.lng,
        altitude: 1.8,
      },

      2000
    );

  }, [selectedCity, globeRef]);

}

export default useGlobeControls;