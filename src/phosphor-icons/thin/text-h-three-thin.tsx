import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHThreeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 180a32 32 0 0 1-54.86 22.4 4 4 0 0 1 5.72-5.6A24 24 0 1 0 212 156a4 4 0 0 1-3.28-6.29l23.6-33.71H192a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29l-24.16 34.51A32.06 32.06 0 0 1 244 180ZM144 52a4 4 0 0 0-4 4v56H44V56a4 4 0 0 0-8 0v120a4 4 0 0 0 8 0v-56h96v56a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgTextHThreeThin);
export default Memo;
