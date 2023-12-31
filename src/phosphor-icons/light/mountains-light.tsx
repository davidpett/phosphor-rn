import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMountainsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 78a26 26 0 1 0-26-26 26 26 0 0 0 26 26Zm0-40a14 14 0 1 1-14 14 14 14 0 0 1 14-14Zm89.16 158.94-54.56-92.08a13.9 13.9 0 0 0-12-6.86 13.88 13.88 0 0 0-12 6.86l-27.88 47.05-46.56-79a14 14 0 0 0-24.13 0L2.83 197A6 6 0 0 0 8 206h240a6 6 0 0 0 5.16-9.06ZM86.27 79a2 2 0 0 1 3.46 0l25.34 43H60.93ZM18.5 194l35.36-60h68.29l19.3 32.77 16 27.2Zm152.93 0-17.85-30.29L184.83 111a2 2 0 0 1 1.72-1 1.93 1.93 0 0 1 1.72 1l49.2 83Z" />
  </Svg>
);
const Memo = memo(SvgMountainsLight);
export default Memo;
