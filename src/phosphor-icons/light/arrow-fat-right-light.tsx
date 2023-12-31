import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m236.24 123.76-96-96A6 6 0 0 0 130 32v42H48a14 14 0 0 0-14 14v80a14 14 0 0 0 14 14h82v42a6 6 0 0 0 10.24 4.24l96-96a6 6 0 0 0 0-8.48ZM142 209.51V176a6 6 0 0 0-6-6H48a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h88a6 6 0 0 0 6-6V46.49L223.51 128Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatRightLight);
export default Memo;
