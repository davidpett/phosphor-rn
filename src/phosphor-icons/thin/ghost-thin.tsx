import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGhostThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 116a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm48-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm64 12v96a4 4 0 0 1-6.53 3.1l-26.8-21.93-26.8 21.93a4 4 0 0 1-5.07 0L128 197.17l-26.8 21.93a4 4 0 0 1-5.07 0l-26.8-21.93-26.8 21.93A4 4 0 0 1 36 216v-96a92 92 0 0 1 184 0Zm-8 0a84 84 0 0 0-168 0v87.56l22.8-18.66a4 4 0 0 1 5.07 0l26.8 21.93 26.8-21.93a4 4 0 0 1 5.06 0l26.8 21.93 26.8-21.93a4 4 0 0 1 5.07 0l22.8 18.66Z" />
  </Svg>
);
const Memo = memo(SvgGhostThin);
export default Memo;
