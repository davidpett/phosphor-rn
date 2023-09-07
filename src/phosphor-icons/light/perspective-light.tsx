import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPerspectiveLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 122h-18V48a14 14 0 0 0-16.5-13.77l-160 29.09A14 14 0 0 0 34 77.09V122H16a6 6 0 0 0 0 12h18v44.91a14 14 0 0 0 11.5 13.77l160 29.09a14.2 14.2 0 0 0 2.5.23 14 14 0 0 0 14-14v-74h18a6 6 0 0 0 0-12ZM46 77.09a2 2 0 0 1 1.64-2l160-29.1h.37a2 2 0 0 1 2 2v74H46ZM210 208a2 2 0 0 1-.72 1.53 2 2 0 0 1-1.64.44l-160-29.1a2 2 0 0 1-1.64-2V134h164Z" />
  </Svg>
);
const Memo = memo(SvgPerspectiveLight);
export default Memo;
