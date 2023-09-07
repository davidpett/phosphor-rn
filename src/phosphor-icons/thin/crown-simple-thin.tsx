import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCrownSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M241.21 79.21a8.07 8.07 0 0 0-8.92-1.14l-53.43 26.64a.11.11 0 0 1-.14 0L135 31.93a8.11 8.11 0 0 0-13.9 0l-43.82 72.73a.11.11 0 0 1-.15 0l-53.4-26.58a8.1 8.1 0 0 0-11.31 9.8l37 113.36a4 4 0 0 0 5.85 2.2C55.52 203.28 81.83 188 128 188s72.47 15.28 72.73 15.43a4 4 0 0 0 5.85-2.19l37-113.36a8.06 8.06 0 0 0-2.37-8.67Zm-40.78 115.08a125.3 125.3 0 0 0-15.84-6.11C172.74 184.45 153.3 180 128 180s-44.74 4.45-56.6 8.18a126.55 126.55 0 0 0-15.84 6.11L20 85.32a.14.14 0 0 1 .13-.08l53.4 26.62a8.14 8.14 0 0 0 10.57-3.07l43.78-72.74a.1.1 0 0 1 .18 0l43.78 72.74a8.15 8.15 0 0 0 10.56 3.08l53.5-26.66a.13.13 0 0 1 .08.16Z" />
  </Svg>
);
const Memo = memo(SvgCrownSimpleThin);
export default Memo;
