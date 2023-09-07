import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUUpRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M173.17 133.17 214.34 92H88a52 52 0 0 0 0 104h88a4 4 0 0 1 0 8H88a60 60 0 0 1 0-120h126.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66-5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowUUpRightThin);
export default Memo;
