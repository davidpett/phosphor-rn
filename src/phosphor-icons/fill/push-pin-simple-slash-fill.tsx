import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPushPinSimpleSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.38 221.92a8 8 0 0 1-11.3-.54L168.1 184H136v56a8 8 0 0 1-16 0v-56H40a8 8 0 0 1 0-16h9.29l16.95-96-24.16-26.62a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3Zm-22.88-60.85a8 8 0 0 0 13.79-6.77L185.54 48H192a8 8 0 0 0 0-16H91.25a8 8 0 0 0-5.92 13.38Z" />
  </Svg>
);
const Memo = memo(SvgPushPinSimpleSlashFill);
export default Memo;
