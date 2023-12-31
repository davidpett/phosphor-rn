import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPercentDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M95.8 56.2a28 28 0 1 1-39.6 0 28 28 0 0 1 39.6 0Zm104 104a28 28 0 1 0 0 39.6 28 28 0 0 0 0-39.6Z"
      opacity={0.2}
    />
    <Path d="m205.66 61.64-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.31Zm-155.12 39.8a36 36 0 0 1 50.92-50.91 36 36 0 0 1-50.92 50.91ZM56 76a20 20 0 1 0 34.14-14.16A20 20 0 0 0 56 76Zm160 104a36 36 0 1 1-10.54-25.46A35.76 35.76 0 0 1 216 180Zm-16 0a20 20 0 1 0-5.86 14.14A19.87 19.87 0 0 0 200 180Z" />
  </Svg>
);
const Memo = memo(SvgPercentDuotone);
export default Memo;
