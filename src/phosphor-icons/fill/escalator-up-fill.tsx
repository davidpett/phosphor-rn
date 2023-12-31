import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEscalatorUpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 56v40a16 16 0 0 1-16 16h-36.5l-91.25 98.85A16 16 0 0 1 84.5 216H32a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h36.5l91.25-98.85A16 16 0 0 1 171.5 40H224a16 16 0 0 1 16 16Zm-34.34 90.34a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 11.32 11.32L192 171.31V208a8 8 0 0 0 16 0v-36.69l10.34 10.35a8 8 0 0 0 11.32-11.32Z" />
  </Svg>
);
const Memo = memo(SvgEscalatorUpFill);
export default Memo;
