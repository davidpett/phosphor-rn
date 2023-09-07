import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingCartThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M219.07 61.44A4 4 0 0 0 216 60H51.34l-5.48-30.15A12 12 0 0 0 34.05 20H16a4 4 0 0 0 0 8h18a4 4 0 0 1 4 3.28l25.5 140.3a20 20 0 0 0 7.5 12.27 24 24 0 1 0 30.87 4.15h60.26a24 24 0 1 0 17.87-8H83.17a12 12 0 0 1-11.8-9.85l-4-22.15H188.1a20 20 0 0 0 19.68-16.42l12.16-66.86a4 4 0 0 0-.87-3.28ZM100 204a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm96 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm3.91-73.85A12 12 0 0 1 188.1 140H65.88L52.79 68h158.42Z" />
  </Svg>
);
const Memo = memo(SvgShoppingCartThin);
export default Memo;
