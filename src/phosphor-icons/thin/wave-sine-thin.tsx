import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWaveSineThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M235.62 129.7C214.4 174.93 196.1 196 178 196c-22.56 0-37.67-32.21-53.66-66.3C110.15 99.37 95.44 68 78 68c-14.2 0-31.13 20.76-50.34 61.7a4 4 0 0 1-7.24-3.4C41.6 81.07 59.9 60 78 60c22.56 0 37.67 32.21 53.66 66.3 14.19 30.33 28.9 61.7 46.34 61.7 14.2 0 31.13-20.76 50.34-61.7a4 4 0 0 1 7.24 3.4Z" />
  </Svg>
);
const Memo = memo(SvgWaveSineThin);
export default Memo;
