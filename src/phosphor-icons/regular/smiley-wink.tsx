import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyWink = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88ZM80 108a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm104 0a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8Zm-9.08 48c-10.29 17.79-27.39 28-46.92 28s-36.63-10.2-46.93-28a8 8 0 1 1 13.86-8c7.46 12.91 19.2 20 33.07 20s25.61-7.1 33.08-20a8 8 0 1 1 13.84 8Z" />
  </Svg>
);
const Memo = memo(SvgSmileyWink);
export default Memo;
