import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudLightningFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 168h-23.47l-14.4 24H144a8 8 0 0 1 6.86 12.12l-24 40a8 8 0 0 1-13.72-8.24L129.87 208H104a8 8 0 0 1-6.86-12.12L113.87 168h-37C48.12 168 24.2 145.07 24 116.36A52.09 52.09 0 0 1 61.35 66.1a4 4 0 0 1 5 4.78A92.48 92.48 0 0 0 64 87.39 8.14 8.14 0 0 0 71.41 96h.6a8.18 8.18 0 0 0 8.08-7.72A76 76 0 1 1 156 168Z" />
  </Svg>
);
const Memo = memo(SvgCloudLightningFill);
export default Memo;