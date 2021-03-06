import philipsHue from "./philips-hue.json";
import sonoff from "./sonoff.json";
import zwave from "./zwave.json";
import xiaomi from "./xiaomi.json";
import camera from "./camera.json";

const integrations = camera
  .concat(sonoff)
  .concat(zwave)
  .concat(xiaomi)
  .concat(philipsHue);

export default integrations;
