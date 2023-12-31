import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandPalmBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 84a32 32 0 0 0-8 1V60a32 32 0 0 0-43.21-30A32 32 0 0 0 76 44v1a32 32 0 0 0-40 31v76a92 92 0 0 0 184 0v-36a32 32 0 0 0-32-32Zm8 68a68 68 0 0 1-136 0V76a8 8 0 0 1 16 0v44a12 12 0 0 0 24 0V44a8 8 0 0 1 16 0v68a12 12 0 0 0 24 0V60a8 8 0 0 1 16 0v65.4a52.09 52.09 0 0 0-40 50.6 12 12 0 0 0 24 0 28 28 0 0 1 28-28 12 12 0 0 0 12-12v-20a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgHandPalmBold);
export default Memo;
