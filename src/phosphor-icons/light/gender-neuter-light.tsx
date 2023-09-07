import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderNeuterLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206 104a78 78 0 1 0-84 77.75V232a6 6 0 0 0 12 0v-50.25A78.09 78.09 0 0 0 206 104Zm-78 66a66 66 0 1 1 66-66 66.08 66.08 0 0 1-66 66Z" />
  </Svg>
);
const Memo = memo(SvgGenderNeuterLight);
export default Memo;
