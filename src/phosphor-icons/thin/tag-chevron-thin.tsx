import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTagChevronThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m234 121.34-42.67-64a12 12 0 0 0-10-5.34H24a4 4 0 0 0-3.29 6.27l46.61 67.51a4 4 0 0 1 0 4.39l-46.61 67.56A4 4 0 0 0 24 204h157.33a12 12 0 0 0 10-5.34l42.67-64a12 12 0 0 0 0-13.32Zm-6.66 8.88-42.66 64a4 4 0 0 1-3.33 1.78H31.62L74 134.66a12 12 0 0 0 0-13.37L31.62 60h149.71a4 4 0 0 1 3.33 1.78l42.66 64a4 4 0 0 1 0 4.44Z" />
  </Svg>
);
const Memo = memo(SvgTagChevronThin);
export default Memo;
