import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartBreakLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M178 34a59.63 59.63 0 0 0-42.43 17.57L128 59.15l-7.57-7.58A60 60 0 0 0 18 94c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37 6 6 0 0 0 5.68 0 334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48 48 0 0 1 81.94-33.94l7.57 7.57-11.75 11.76a6 6 0 0 0 0 8.49l25.94 25.94-17.94 17.94a6 6 0 0 0 8.48 8.48l22.19-22.18a6 6 0 0 0 0-8.49l-25.94-25.94 23.57-23.57A48 48 0 0 1 226 94c0 55.72-81.59 105.64-98 115.11Z" />
  </Svg>
);
const Memo = memo(SvgHeartBreakLight);
export default Memo;
