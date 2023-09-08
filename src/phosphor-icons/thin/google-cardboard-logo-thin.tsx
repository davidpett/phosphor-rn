import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoogleCardboardLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 52H32a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h60.69a12 12 0 0 0 8.48-3.51l24-24a4.08 4.08 0 0 1 5.66 0l24 24a12 12 0 0 0 8.48 3.51H224a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12Zm4 140a4 4 0 0 1-4 4h-60.69a4 4 0 0 1-2.82-1.17l-24-24a12 12 0 0 0-17 0l-24 24a4 4 0 0 1-2.8 1.17H32a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h192a4 4 0 0 1 4 4ZM80 100a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm96-48a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgGoogleCardboardLogoThin);
export default Memo;
