import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandFist = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 80h-16V64a32 32 0 0 0-56-21.13 32 32 0 0 0-55.79 17.55A32 32 0 0 0 24 88v40a104 104 0 0 0 208 0v-16a32 32 0 0 0-32-32Zm-48-32a16 16 0 0 1 16 16v16h-32V64a16 16 0 0 1 16-16ZM88 64a16 16 0 0 1 32 0v40a16 16 0 0 1-32 0ZM40 88a16 16 0 0 1 32 0v16a16 16 0 0 1-32 0Zm176 40a88 88 0 0 1-175.92 3.75A31.93 31.93 0 0 0 80 125.13a31.93 31.93 0 0 0 44.58 3.35 32.21 32.21 0 0 0 11.8 11.44A47.88 47.88 0 0 0 120 176a8 8 0 0 0 16 0 32 32 0 0 1 32-32 8 8 0 0 0 0-16h-16a16 16 0 0 1-16-16V96h64a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgHandFist);
export default Memo;
