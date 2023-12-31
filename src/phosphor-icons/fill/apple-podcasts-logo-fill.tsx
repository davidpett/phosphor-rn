import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgApplePodcastsLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 144a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm15.75 0h-31.5a20.17 20.17 0 0 0-16 7.82 19.67 19.67 0 0 0-3.58 17.05l12.18 48A20.17 20.17 0 0 0 124.44 232h7.12a20.17 20.17 0 0 0 19.64-15.13l12.18-48a19.67 19.67 0 0 0-3.58-17.05 20.17 20.17 0 0 0-16.05-7.82Zm38.49-2a8 8 0 0 0 5.75 9.74 8.12 8.12 0 0 0 2 .25 8 8 0 0 0 7.74-6 72 72 0 1 0-139.46 0 8 8 0 1 0 15.49-4 56 56 0 1 1 108.48 0ZM128 24a104 104 0 0 0-57.51 190.66 8 8 0 0 0 11.09-2.23 8 8 0 0 0-2.24-11.09 88 88 0 1 1 97.31 0 8 8 0 0 0 8.86 13.32A104 104 0 0 0 128 24Z" />
  </Svg>
);
const Memo = memo(SvgApplePodcastsLogoFill);
export default Memo;
