import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMarkerCircleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204.37 51.6A108.08 108.08 0 1 0 236 128a108.09 108.09 0 0 0-31.63-76.4ZM108 140h40v16h-40Zm-16 63.92V180h72v23.9a84.33 84.33 0 0 1-72 .02Zm96-17.13V176a20 20 0 0 0-16-19.6V136a20 20 0 0 0-14.85-19.31l-9.88-35.49a20 20 0 0 0-38.54 0l-9.88 35.49A20 20 0 0 0 84 136v20.42A20 20 0 0 0 68 176v10.77a84 84 0 1 1 120 0Z" />
  </Svg>
);
const Memo = memo(SvgMarkerCircleBold);
export default Memo;
