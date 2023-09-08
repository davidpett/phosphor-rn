import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBugBeetleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 152a12 12 0 0 0 0-24h-12v-16h12a12 12 0 0 0 0-24h-13.55a83.7 83.7 0 0 0-18.78-38.7l16.82-16.81a12 12 0 0 0-17-17l-18 18a83.7 83.7 0 0 0-91.1 0l-18-18a12 12 0 0 0-17 17L64.33 49.3A83.7 83.7 0 0 0 45.55 88H32a12 12 0 0 0 0 24h12v16H32a12 12 0 0 0 0 24h12a83.55 83.55 0 0 0 1.55 16H32a12 12 0 0 0 0 24h22.15a84 84 0 0 0 147.7 0H224a12 12 0 0 0 0-24h-13.55a83.55 83.55 0 0 0 1.55-16ZM128 44a60.1 60.1 0 0 1 57.82 44H70.18A60.1 60.1 0 0 1 128 44Zm12 166.79V140a12 12 0 0 0-24 0v70.79A60.09 60.09 0 0 1 68 152v-40h120v40a60.09 60.09 0 0 1-48 58.79Z" />
  </Svg>
);
const Memo = memo(SvgBugBeetleBold);
export default Memo;
