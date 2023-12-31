import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserListBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 80a12 12 0 0 1 12-12h80a12 12 0 0 1 0 24h-80a12 12 0 0 1-12-12Zm92 36h-80a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24Zm0 48h-56a12 12 0 0 0 0 24h56a12 12 0 0 0 0-24Zm-88.38 25a12 12 0 1 1-23.24 6c-5.72-22.23-28.24-39-52.38-39s-46.66 16.76-52.38 39a12 12 0 1 1-23.24-6c5.38-20.9 20.09-38.16 39.11-48a52 52 0 1 1 73 0c19.04 9.85 33.75 27.11 39.13 48ZM80 132a28 28 0 1 0-28-28 28 28 0 0 0 28 28Z" />
  </Svg>
);
const Memo = memo(SvgUserListBold);
export default Memo;
