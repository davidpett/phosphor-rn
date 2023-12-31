import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTwitchLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h20v36a4 4 0 0 0 2.3 3.62 3.9 3.9 0 0 0 1.7.38 4 4 0 0 0 2.56-.93l45.78-38.14a4 4 0 0 1 2.56-.93h42.2a12.06 12.06 0 0 0 7.69-2.78l42.89-35.75a11.93 11.93 0 0 0 4.32-9.22V48a12 12 0 0 0-12-12Zm4 120.25a4 4 0 0 1-1.44 3.08l-42.9 35.74a4 4 0 0 1-2.56.93h-42.2a12.06 12.06 0 0 0-7.69 2.78L76 231.46V200a4 4 0 0 0-4-4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM172 88v48a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0Zm-48 0v48a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgTwitchLogoThin);
export default Memo;
