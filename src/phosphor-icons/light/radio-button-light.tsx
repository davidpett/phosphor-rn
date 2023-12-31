import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadioButtonLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm0-152a62 62 0 1 0 62 62 62.07 62.07 0 0 0-62-62Zm0 112a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50Z" />
  </Svg>
);
const Memo = memo(SvgRadioButtonLight);
export default Memo;
