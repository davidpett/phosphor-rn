import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVinylRecordDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96Zm0 120a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z"
      opacity={0.2}
    />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm0-144a56.06 56.06 0 0 0-56 56 8 8 0 0 1-16 0 72.08 72.08 0 0 1 72-72 8 8 0 0 1 0 16Zm72 56a72.08 72.08 0 0 1-72 72 8 8 0 0 1 0-16 56.06 56.06 0 0 0 56-56 8 8 0 0 1 16 0Zm-40 0a32 32 0 1 0-32 32 32 32 0 0 0 32-32Zm-48 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
  </Svg>
);
const Memo = memo(SvgVinylRecordDuotone);
export default Memo;
