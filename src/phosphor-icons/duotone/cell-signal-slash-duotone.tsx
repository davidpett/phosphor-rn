import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalSlashDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M200 40v160a8 8 0 0 1-8 8H32a8 8 0 0 1-5.66-13.66l160-160A8 8 0 0 1 200 40Z"
      opacity={0.2}
    />
    <Path d="m213.92 210.62-160-176a8 8 0 1 0-11.85 10.76l58.07 63.86-79.45 79.44A16 16 0 0 0 32 216h160a16.13 16.13 0 0 0 4.56-.68l5.52 6.06a8 8 0 1 0 11.84-10.76ZM32 200l78.9-78.89L182.64 200Zm96.18-107.49a8 8 0 0 1 0-11.31l52.51-52.5A16 16 0 0 1 208 40v119.63a8 8 0 0 1-16 0V40l-52.5 52.51a8 8 0 0 1-11.32 0Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalSlashDuotone);
export default Memo;
