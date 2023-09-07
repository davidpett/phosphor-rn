import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFactoryBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 176a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h28a12 12 0 0 1 12 12Zm56-12h-28a12 12 0 0 0 0 24h28a12 12 0 0 0 0-24Zm76 52a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h12V88a12 12 0 0 1 19.2-9.6L92 112V88a12 12 0 0 1 19.2-9.6l33.33 25 10.61-74.23A20.1 20.1 0 0 1 174.94 12h18.12a20.1 20.1 0 0 1 19.8 17.17l15 105.13c0 .1.12 1.34.12 1.7v68h12A12 12 0 0 1 252 216Zm-85.57-96.17L172 124h30.16l-12.57-88h-11.18ZM52 204h152v-56h-36a12 12 0 0 1-7.2-2.4l-14.38-10.78h-.06L116 112v24a12 12 0 0 1-19.2 9.6L52 112Z" />
  </Svg>
);
const Memo = memo(SvgFactoryBold);
export default Memo;
