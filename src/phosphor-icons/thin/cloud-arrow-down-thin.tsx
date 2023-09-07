import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudArrowDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 128a83.28 83.28 0 0 1-16.8 50.4 4 4 0 1 1-6.4-4.8A76 76 0 1 0 84 128a4 4 0 0 1-8 0 83.45 83.45 0 0 1 4.57-27.27A52 52 0 1 0 72 204h24a4 4 0 0 1 0 8H72A60 60 0 1 1 83.61 93.13 84 84 0 0 1 244 128Zm-62.83 45.17L156 198.34V128a4 4 0 0 0-8 0v70.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66Z" />
  </Svg>
);
const Memo = memo(SvgCloudArrowDownThin);
export default Memo;
