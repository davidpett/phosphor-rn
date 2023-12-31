import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMediumLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 66a62 62 0 1 0 62 62 62.07 62.07 0 0 0-62-62Zm0 112a50 50 0 1 1 50-50 50.06 50.06 0 0 1-50 50ZM184 66c-17.1 0-30 26.65-30 62s12.9 62 30 62 30-26.65 30-62-12.9-62-30-62Zm0 112c-7.34 0-18-19.48-18-50s10.66-50 18-50 18 19.48 18 50-10.66 50-18 50Zm62-106v112a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgMediumLogoLight);
export default Memo;
