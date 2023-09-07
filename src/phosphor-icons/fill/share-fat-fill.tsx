import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShareFatFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m237.66 117.66-80 80A8 8 0 0 1 144 192v-39.77c-57.1 3.24-96.25 40.27-107.24 52a12 12 0 0 1-20.68-9.58c3.71-32.26 21.38-63.29 49.76-87.37 23.57-20 52.22-32.69 78.16-34.91V32a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgShareFatFill);
export default Memo;
