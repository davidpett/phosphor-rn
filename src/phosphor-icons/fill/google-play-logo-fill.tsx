import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePlayLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M223.82 114.18 56 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 32 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67 16 16 0 0 0 16.12 0l167.78-96a15.76 15.76 0 0 0 0-27.64ZM144 139.31l18.92 18.92-88.5 50.66ZM74.4 47.1l88.53 50.67L144 116.69ZM177.31 150l-22-22 22-22 38.43 22Z" />
  </Svg>
);
const Memo = memo(SvgGooglePlayLogoFill);
export default Memo;
