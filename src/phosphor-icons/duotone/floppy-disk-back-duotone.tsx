import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFloppyDiskBackDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 40H91.31a8 8 0 0 0-5.65 2.34L42.34 85.66A8 8 0 0 0 40 91.31V208a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Zm-80 144a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z"
      opacity={0.2}
    />
    <Path d="M208 32H91.31A15.86 15.86 0 0 0 80 36.69L36.69 80A15.86 15.86 0 0 0 32 91.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H48V91.31L91.31 48H168v32H88a8 8 0 0 0 0 16h80a16 16 0 0 0 16-16V48h24Zm-80-96a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgFloppyDiskBackDuotone);
export default Memo;
