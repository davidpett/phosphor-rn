import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGooglePlayLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M144 128 42.32 230a7.7 7.7 0 0 1-2.32-5.55V31.55A7.7 7.7 0 0 1 42.32 26Z"
      opacity={0.2}
    />
    <Path d="M223.82 114.18 56 18.16a16 16 0 0 0-16.12 0A15.68 15.68 0 0 0 32 31.87v192.26a15.68 15.68 0 0 0 7.92 13.67 16 16 0 0 0 16.12 0l167.78-96a15.76 15.76 0 0 0 0-27.64ZM48 212.67V43.33L132.69 128Zm96-73.36 18.92 18.92-88.5 50.66ZM74.4 47.1l88.53 50.67L144 116.69ZM177.31 150l-22-22 22-22 38.43 22Z" />
  </Svg>
);
const Memo = memo(SvgGooglePlayLogoDuotone);
export default Memo;
