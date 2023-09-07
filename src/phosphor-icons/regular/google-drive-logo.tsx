import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleDriveLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.6 151.78 169.13 39.52A15.91 15.91 0 0 0 155.56 32h-55.13a15.89 15.89 0 0 0-13.56 7.52l-.05.07L18.44 151.7a16 16 0 0 0-.33 16.42l27.32 47.82A16 16 0 0 0 59.32 224h137.35a16 16 0 0 0 13.89-8.06l27.32-47.82a15.91 15.91 0 0 0-.28-16.34ZM219 152h-46.48l-35.19-58.67 22.75-37.92Zm-116.87 0L128 108.88 153.87 152Zm61.34 16 24 40H68.53l24-40ZM128 77.78 110.12 48l35.78-.05ZM95.91 55.41l22.76 37.92L83.47 152H37ZM36.54 168h37.33l-19.15 31.92Zm164.74 31.93L182.12 168h37.41Z" />
  </Svg>
);
const Memo = memo(SvgGoogleDriveLogo);
export default Memo;
