import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSplitHorizontalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M110 48v160a6 6 0 0 1-12 0v-74H38.49l21.75 21.76a6 6 0 1 1-8.48 8.48l-32-32a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 8.48L38.49 122H98V48a6 6 0 0 1 12 0Zm126.24 75.76-32-32a6 6 0 0 0-8.48 8.48L217.51 122H158V48a6 6 0 0 0-12 0v160a6 6 0 0 0 12 0v-74h59.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48Z" />
  </Svg>
);
const Memo = memo(SvgSplitHorizontalLight);
export default Memo;
