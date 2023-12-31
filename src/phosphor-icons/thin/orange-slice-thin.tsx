import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOrangeSliceThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 84H8a4 4 0 0 0-4 4 124 124 0 0 0 248 0 4 4 0 0 0-4-4ZM71.53 150.13 124 97.66v74.24a83.67 83.67 0 0 1-52.47-21.77Zm-5.66-5.66A83.67 83.67 0 0 1 44.1 92h74.24ZM132 97.66l52.47 52.47A83.67 83.67 0 0 1 132 171.9Zm58.13 46.81L137.66 92h74.24a83.67 83.67 0 0 1-21.77 52.47ZM128 204A116.14 116.14 0 0 1 12.07 92h24a92 92 0 0 0 183.82 0h24A116.14 116.14 0 0 1 128 204Z" />
  </Svg>
);
const Memo = memo(SvgOrangeSliceThin);
export default Memo;
