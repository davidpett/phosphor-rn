import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudLightningThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 20a72.19 72.19 0 0 0-68.49 49.39A48 48 0 1 0 76 164h44.94l-20.37 33.94A4 4 0 0 0 104 204h32.94l-20.37 33.94a4 4 0 0 0 6.86 4.12l24-40A4 4 0 0 0 144 196h-32.94l19.2-32H156a72 72 0 0 0 0-144Zm0 136H76a40 40 0 1 1 9.43-78.88A71.63 71.63 0 0 0 84 87.77a4 4 0 0 0 8 .46A64.06 64.06 0 1 1 156 156Z" />
  </Svg>
);
const Memo = memo(SvgCloudLightningThin);
export default Memo;
