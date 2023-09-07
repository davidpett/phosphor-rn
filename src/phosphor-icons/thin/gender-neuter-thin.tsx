import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderNeuterThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204 104a76 76 0 1 0-80 75.89V232a4 4 0 0 0 8 0v-52.11A76.09 76.09 0 0 0 204 104Zm-76 68a68 68 0 1 1 68-68 68.07 68.07 0 0 1-68 68Z" />
  </Svg>
);
const Memo = memo(SvgGenderNeuterThin);
export default Memo;
