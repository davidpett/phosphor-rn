import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleDriveLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M241 149.65 172.59 37.51l-.07-.11a19.85 19.85 0 0 0-17-9.4h-55.08a19.85 19.85 0 0 0-17 9.4l-.07.11L15 149.65a20 20 0 0 0-.36 20.46L42 217.92A20 20 0 0 0 59.33 228h137.34A20 20 0 0 0 214 217.92l27.32-47.81a20 20 0 0 0-.32-20.46ZM211.88 148h-37.09L142 93.33l18.12-30.19ZM54.8 192l-11.44-20h23.45Zm40-20h66.4l19.2 32H75.6Zm14.4-24 18.8-31.34L146.8 148Zm80 24h23.45l-11.45 20ZM128 70l-10.81-18h21.62Zm-32.11-6.86L114 93.33 81.21 148H44.12Z" />
  </Svg>
);
const Memo = memo(SvgGoogleDriveLogoBold);
export default Memo;
