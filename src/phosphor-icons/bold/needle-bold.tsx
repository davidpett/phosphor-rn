import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNeedleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M215.11 40.89a44 44 0 0 0-62.22 0l-24 24a11.88 11.88 0 0 0-3.34 6.45c-7.15 41.66-70.24 112.36-94 136.14a12 12 0 0 0 17 17c23.75-23.73 94.49-86.88 136.18-94a12 12 0 0 0 6.45-3.34l24-24a44 44 0 0 0 0-62.22Zm-17 45.25-21.42 21.43c-14.85 3.31-32.4 11.41-52.47 24.18 12.77-20.07 20.87-37.62 24.18-52.47l21.43-21.42a20 20 0 1 1 28.28 28.28Z" />
  </Svg>
);
const Memo = memo(SvgNeedleBold);
export default Memo;