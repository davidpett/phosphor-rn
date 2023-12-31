import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCarDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M184 184h40v24a8 8 0 0 1-8 8h-24a8 8 0 0 1-8-8ZM32 208a8 8 0 0 0 8 8h24a8 8 0 0 0 8-8v-24H32ZM194.11 52.75A8 8 0 0 0 186.8 48H69.2a8 8 0 0 0-7.31 4.75L32 120h192Z"
      opacity={0.2}
    />
    <Path d="M240 112h-10.8l-27.78-62.5A16 16 0 0 0 186.8 40H69.2a16 16 0 0 0-14.62 9.5L26.8 112H16a8 8 0 0 0 0 16h8v80a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h96v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-80h8a8 8 0 0 0 0-16ZM69.2 56h117.6l24.89 56H44.31ZM64 208H40v-16h24Zm128 0v-16h24v16Zm24-32H40v-48h176ZM56 152a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8Zm112 0a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgCarDuotone);
export default Memo;
