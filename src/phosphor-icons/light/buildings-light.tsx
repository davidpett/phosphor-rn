import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBuildingsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 210h-18V96a14 14 0 0 0-14-14h-66V32a14 14 0 0 0-21.77-11.64l-80 53.33A14 14 0 0 0 34 85.34V210H16a6 6 0 0 0 0 12h224a6 6 0 0 0 0-12ZM208 94a2 2 0 0 1 2 2v114h-68V94ZM46 85.34a2 2 0 0 1 .89-1.66l80-53.34A2 2 0 0 1 130 32v178H46ZM110 112v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0Zm-32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0Zm0 56v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0Zm32 0v16a6 6 0 0 1-12 0v-16a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgBuildingsLight);
export default Memo;
