import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAppStoreLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM83.66 180.12l-4.8 8a8 8 0 1 1-13.72-8.24l4.8-8a8 8 0 0 1 13.72 8.24ZM128 152H56a8 8 0 0 1 0-16h35.47l27.2-45.33-13.53-22.55a8 8 0 0 1 13.72-8.24L128 75.12l9.14-15.24a8 8 0 0 1 13.72 8.24L110.13 136H128a8 8 0 0 1 0 16Zm72 0h-25.87l16.73 27.88a8 8 0 0 1-13.72 8.24l-38.4-64a8 8 0 0 1 13.72-8.24L164.53 136H200a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgAppStoreLogoFill);
export default Memo;
