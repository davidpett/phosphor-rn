import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgQueueDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m240 160-64 40v-80Z" opacity={0.2} />
    <Path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm104 56H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16Zm0 64H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16Zm112-24a8 8 0 0 1-3.76 6.78l-64 40A8 8 0 0 1 168 200v-80a8 8 0 0 1 12.24-6.78l64 40A8 8 0 0 1 248 160Zm-23.09 0L184 134.43v51.14Z" />
  </Svg>
);
const Memo = memo(SvgQueueDuotone);
export default Memo;
