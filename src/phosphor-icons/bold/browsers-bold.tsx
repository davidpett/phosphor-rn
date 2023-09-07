import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBrowsersBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 32H76a20 20 0 0 0-20 20v20H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-20h20a20 20 0 0 0 20-20V52a20 20 0 0 0-20-20Zm-44 64v16H40V96Zm0 104H40v-64h136Zm40-40h-16V92a20 20 0 0 0-20-20H80V56h136Z" />
  </Svg>
);
const Memo = memo(SvgBrowsersBold);
export default Memo;
