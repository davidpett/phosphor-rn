import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleDriveLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.19 153.86 165.74 41.64A11.94 11.94 0 0 0 155.56 36h-55.13a11.93 11.93 0 0 0-10.17 5.64L21.83 153.82a12 12 0 0 0-.25 12.32L48.91 214a12 12 0 0 0 10.41 6h137.35a12 12 0 0 0 10.42-6l27.32-47.81a12 12 0 0 0-.22-12.33Zm-8.06 2.14h-55.87l-37.6-62.67 27.39-45.65Zm-131.07 0L128 101.11 160.93 156Zm70.67 8 28.8 48H61.47l28.79-48ZM128 85.56 103.06 44h49.87ZM95.94 47.68l27.39 45.65L85.74 156H29.87ZM29.58 164h51.36l-26.31 43.85Zm171.79 43.85L175.06 164h51.36Z" />
  </Svg>
);
const Memo = memo(SvgGoogleDriveLogoThin);
export default Memo;
