import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatUpLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 115.76-96-96a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 32 126h42v82a14 14 0 0 0 14 14h80a14 14 0 0 0 14-14v-82h42a6 6 0 0 0 4.24-10.24ZM176 114a6 6 0 0 0-6 6v88a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2v-88a6 6 0 0 0-6-6H46.49L128 32.49 209.51 114Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatUpLight);
export default Memo;
