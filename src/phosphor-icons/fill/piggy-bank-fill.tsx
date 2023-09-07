import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPiggyBankFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M226 88.08c-.4-1-.82-2-1.25-3a87.93 87.93 0 0 0-30.17-37H216a8 8 0 0 0 0-16H112a88.12 88.12 0 0 0-87.72 81A32 32 0 0 0 0 144a8 8 0 0 0 16 0 16 16 0 0 1 8.57-14.16A87.69 87.69 0 0 0 46 178.22l12.56 35.16A16 16 0 0 0 73.64 224h12.72a16 16 0 0 0 15.07-10.62l1.92-5.38h57.3l1.92 5.38A16 16 0 0 0 177.64 224h12.72a16 16 0 0 0 15.07-10.62L221.64 168H224a24 24 0 0 0 24-24v-32a24 24 0 0 0-22-23.92ZM152 72h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Zm28 56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgPiggyBankFill);
export default Memo;
