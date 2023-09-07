import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVinylRecordLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm0-148a58.07 58.07 0 0 0-58 58 6 6 0 0 1-12 0 70.08 70.08 0 0 1 70-70 6 6 0 0 1 0 12Zm70 58a70.08 70.08 0 0 1-70 70 6 6 0 0 1 0-12 58.07 58.07 0 0 0 58-58 6 6 0 0 1 12 0Zm-40 0a30 30 0 1 0-30 30 30 30 0 0 0 30-30Zm-48 0a18 18 0 1 1 18 18 18 18 0 0 1-18-18Z" />
  </Svg>
);
const Memo = memo(SvgVinylRecordLight);
export default Memo;
