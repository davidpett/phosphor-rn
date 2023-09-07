import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPrinterDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M232 96v80h-40v-24H64v24H24V96c0-8.84 7.76-16 17.33-16h173.34c9.57 0 17.33 7.16 17.33 16Z"
      opacity={0.2}
    />
    <Path d="M214.67 72H200V40a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v32H41.33C27.36 72 16 82.77 16 96v80a8 8 0 0 0 8 8h32v32a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-32h32a8 8 0 0 0 8-8V96c0-13.23-11.36-24-25.33-24ZM72 48h112v24H72Zm112 160H72v-48h112Zm40-40h-24v-16a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v16H32V96c0-4.41 4.19-8 9.33-8h173.34c5.14 0 9.33 3.59 9.33 8Zm-24-52a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgPrinterDuotone);
export default Memo;
