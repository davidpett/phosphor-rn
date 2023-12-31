import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandPalmThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 92a23.9 23.9 0 0 0-16 6.13V60a24 24 0 0 0-40.07-17.8A24 24 0 0 0 84 44v14.13A24 24 0 0 0 44 76v76a84 84 0 0 0 168 0v-36a24 24 0 0 0-24-24Zm16 60a76 76 0 0 1-152 0V76a16 16 0 0 1 32 0v44a4 4 0 0 0 8 0V44a16 16 0 0 1 32 0v68a4 4 0 0 0 8 0V60a16 16 0 0 1 32 0v72.18A44.06 44.06 0 0 0 124 176a4 4 0 0 0 8 0 36 36 0 0 1 36-36 4 4 0 0 0 4-4v-20a16 16 0 0 1 32 0Z" />
  </Svg>
);
const Memo = memo(SvgHandPalmThin);
export default Memo;
