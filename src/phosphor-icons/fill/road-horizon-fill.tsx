import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRoadHorizonFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M239 188.08 173.68 72h58a8.17 8.17 0 0 0 8.32-7.47 8 8 0 0 0-8-8.53H24.27A8.17 8.17 0 0 0 16 63.47 8 8 0 0 0 24 72h58.32L17 188.08a8 8 0 0 0 1.17 9.43 8.24 8.24 0 0 0 6 2.49H116a4 4 0 0 0 4-4v-19.73a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v20a4 4 0 0 0 4 4h91.77a8.24 8.24 0 0 0 6-2.49 8 8 0 0 0 1.23-9.45ZM136 140a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm0-52a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgRoadHorizonFill);
export default Memo;
