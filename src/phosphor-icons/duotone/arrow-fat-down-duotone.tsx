import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatDownDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m224 136-96 96-96-96h48V48a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v88Z"
      opacity={0.2}
    />
    <Path d="M231.39 132.94A8 8 0 0 0 224 128h-40V48a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v80H32a8 8 0 0 0-5.66 13.66l96 96a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 1.73-8.72ZM128 220.69 51.31 144H80a8 8 0 0 0 8-8V48h80v88a8 8 0 0 0 8 8h28.69Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatDownDuotone);
export default Memo;
