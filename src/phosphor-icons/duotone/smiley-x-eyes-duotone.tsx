import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyXEyesDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 128a96 96 0 1 1-96-96 96 96 0 0 1 96 96Z" opacity={0.2} />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm61.66-93.66a8 8 0 0 1-11.32 11.32L168 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L168 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 112Zm-80-20.68L99.31 112l10.35 10.34a8 8 0 0 1-11.32 11.32L88 123.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L76.69 112l-10.35-10.34a8 8 0 0 1 11.32-11.32L88 100.69l10.34-10.35a8 8 0 0 1 11.32 11.32ZM140 180a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgSmileyXEyesDuotone);
export default Memo;
