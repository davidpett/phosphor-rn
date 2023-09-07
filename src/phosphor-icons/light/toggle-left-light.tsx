import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleLeftLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 58H80a70 70 0 0 0 0 140h96a70 70 0 0 0 0-140Zm0 128H80a58 58 0 0 1 0-116h96a58 58 0 0 1 0 116ZM80 90a38 38 0 1 0 38 38 38 38 0 0 0-38-38Zm0 64a26 26 0 1 1 26-26 26 26 0 0 1-26 26Z" />
  </Svg>
);
const Memo = memo(SvgToggleLeftLight);
export default Memo;
