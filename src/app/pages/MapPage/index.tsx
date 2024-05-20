import { Box } from "@mui/material";
import { Map, View} from "ol";
import TileLayer from "ol/layer/Tile";
import { XYZ } from "ol/source";
import { useEffect, useRef, useState } from "react";


  const kzExtentMetric = [5044848, 4828000, 10100000, 7760000];
  const kzCentrMetric = [7565288, 6093627];

export const MapPage = () => {
  const [mounted, setMounted] = useState(false);
  const mapDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) return;

    const map = new Map({
      target: mapDivRef.current!,
      view: new View({
        center: kzCentrMetric,
        zoom: 5,
        extent: kzExtentMetric,
      }),
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://mt0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
          }),
          zIndex: 2,
          visible: true,
        }),
        new TileLayer({
          source: new XYZ({
            url: "https://mt1.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}",
          }),
          zIndex: 10,
          visible: true,
        }),
      ],
    });
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);



    return (
      <Box position={"relative"} height={"100vh"} width={"100vw"}>
        <Box
          id="map"
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          width={"100%"}
          height={"100%"}
          ref={mapDivRef}
        >
        </Box>
      </Box>
    );
}