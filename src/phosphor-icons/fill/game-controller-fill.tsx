import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGameControllerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M247.44 173.75a.68.68 0 0 0 0-.14l-16.39-84.17v-.18A60.08 60.08 0 0 0 172 40H83.89a59.88 59.88 0 0 0-59 49.52L8.58 173.61a.68.68 0 0 0 0 .14 36 36 0 0 0 60.9 31.71l.35-.37L109.52 160h37l39.71 45.09c.11.13.23.25.35.37A36.08 36.08 0 0 0 212 216a36 36 0 0 0 35.43-42.25ZM104 112h-8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0v8h8a8 8 0 0 1 0 16Zm40-8a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8Zm84.37 87.47a19.84 19.84 0 0 1-12.9 8.23 20.09 20.09 0 0 1-17.47-5.39L167.8 160h4.2a60 60 0 0 0 51-28.38l8.74 45a19.82 19.82 0 0 1-3.37 14.85Z" />
  </Svg>
);
const Memo = memo(SvgGameControllerFill);
export default Memo;
