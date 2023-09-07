import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatUpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.39 123.06A8 8 0 0 1 224 128h-40v80a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-80H32a8 8 0 0 1-5.66-13.66l96-96a8 8 0 0 1 11.32 0l96 96a8 8 0 0 1 1.73 8.72Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatUpFill);
export default Memo;
