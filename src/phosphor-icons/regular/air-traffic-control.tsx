import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirTrafficControl = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.11 62.82A16 16 0 0 0 216 56h-80V24h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v32H40a16 16 0 0 0-15 21.47l26.19 72a16 16 0 0 0 15 10.53H96v64a8 8 0 0 0 16 0v-64h32v64a8 8 0 0 0 16 0v-64h29.82a16 16 0 0 0 15-10.53l26.19-72a16 16 0 0 0-1.9-14.65ZM110.68 144l-13.1-72h60.84l-13.1 72ZM40 72h41.32l13.09 72H66.18Zm149.82 72h-28.23l13.09-72H216Z" />
  </Svg>
);
const Memo = memo(SvgAirTrafficControl);
export default Memo;