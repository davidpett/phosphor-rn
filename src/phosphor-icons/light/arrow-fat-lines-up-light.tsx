import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLinesUpLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 115.76-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v26a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-26h42a6 6 0 0 0 4.24-10.24ZM176 114a6 6 0 0 0-6 6v26H86v-26a6 6 0 0 0-6-6H46.49L128 32.49 209.51 114Zm6 102a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6Zm0-32a6 6 0 0 1-6 6H80a6 6 0 0 1 0-12h96a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLinesUpLight);
export default Memo;