import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrainRegionalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m221.79 118.42-22.39-82.1A14 14 0 0 0 185.89 26H70.11A14 14 0 0 0 56.6 36.32l-22.39 82.1a6 6 0 0 0 0 3.16l22.39 82.1A14 14 0 0 0 70.11 214H84l-16.8 22.4a6 6 0 1 0 9.6 7.2L99 214h58l22.2 29.6a6 6 0 0 0 9.6-7.2L172 214h13.89a14 14 0 0 0 13.51-10.32l22.39-82.1a6 6 0 0 0 0-3.16ZM68.18 39.47A2 2 0 0 1 70.11 38h115.78a2 2 0 0 1 1.93 1.47l20.67 75.8L128 129.9l-80.49-14.63Zm0 161.06-19.89-72.92L122 141v61H70.11a2 2 0 0 1-1.93-1.47Zm119.64 0a2 2 0 0 1-1.93 1.47H134v-61l73.71-13.4ZM90 88a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6Z" />
  </Svg>
);
const Memo = memo(SvgTrainRegionalLight);
export default Memo;
