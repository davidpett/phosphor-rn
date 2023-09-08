import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgQueueBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12Zm104 52H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24Zm0 64H40a12 12 0 0 0 0 24h92a12 12 0 0 0 0-24Zm120-20a12 12 0 0 1-5.64 10.18l-64 40A12 12 0 0 1 164 200v-80a12 12 0 0 1 18.36-10.18l64 40A12 12 0 0 1 252 160Zm-34.64 0L188 141.65v36.7Z" />
  </Svg>
);
const Memo = memo(SvgQueueBold);
export default Memo;
