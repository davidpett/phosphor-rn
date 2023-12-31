import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyXEyesFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm-18.34 98.34a8 8 0 0 1-11.32 11.32L88 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L76.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L88 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32L99.31 112ZM128 192a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm61.66-69.66a8 8 0 0 1-11.32 11.32L168 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L168 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 112Z" />
  </Svg>
);
const Memo = memo(SvgSmileyXEyesFill);
export default Memo;
