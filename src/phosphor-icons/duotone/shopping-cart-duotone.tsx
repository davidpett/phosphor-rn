import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingCartDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m216 64-12.16 66.86A16 16 0 0 1 188.1 144H62.55L48 64Z"
      opacity={0.2}
    />
    <Path d="M222.14 58.87A8 8 0 0 0 216 56H54.68l-4.89-26.86A16 16 0 0 0 34.05 16H16a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27 28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12 28 28 0 1 0 28-28H83.17a8 8 0 0 1-7.87-6.57L72.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56ZM96 204a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm96 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm4-74.57a8 8 0 0 1-7.9 6.57H69.22L57.59 72h148.82Z" />
  </Svg>
);
const Memo = memo(SvgShoppingCartDuotone);
export default Memo;
