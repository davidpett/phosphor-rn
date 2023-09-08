import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingCartLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220.61 60.16A6 6 0 0 0 216 58H53l-5.17-28.5A14 14 0 0 0 34.05 18H16a6 6 0 0 0 0 12h18a2 2 0 0 1 2 1.64l25.51 140.3a21.93 21.93 0 0 0 6.24 11.77 26 26 0 1 0 38.14 6.29h52.22A26 26 0 1 0 180 178H83.17a10 10 0 0 1-9.84-8.21L69.73 150H188.1a22 22 0 0 0 21.65-18.06l12.15-66.87a6 6 0 0 0-1.29-4.91ZM98 204a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm96 0a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm3.94-74.21a10 10 0 0 1-9.84 8.21H67.55L55.19 70h153.62Z" />
  </Svg>
);
const Memo = memo(SvgShoppingCartLight);
export default Memo;
