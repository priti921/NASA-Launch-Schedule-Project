import { useCallback, useEffect, useState } from "react";

import { httpGetPlanets } from "./requests";
// console.log( httpGetPlanets())
function usePlanets() {
  const [planets, savePlanets] = useState([]);

  const getPlanets = useCallback(async () => {
    const fetchedPlanets = await httpGetPlanets();
    savePlanets(fetchedPlanets);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);
  // console.log(planets.planets);
  //fking why it's returning as an object
  // return planets.planets;
  return planets;
}

export default usePlanets;
