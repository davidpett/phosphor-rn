import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTicketDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M200 128a32 32 0 0 0 25.6 31.36 8 8 0 0 1 6.4 7.83V192a8 8 0 0 1-8 8H96V56h128a8 8 0 0 1 8 8v24.81a8 8 0 0 1-6.4 7.83A32 32 0 0 0 200 128Z"
      opacity={0.2}
    />
    <Path d="M227.19 104.48A16 16 0 0 0 240 88.81V64a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v24.81a16 16 0 0 0 12.81 15.67 24 24 0 0 1 0 47A16 16 0 0 0 16 167.19V192a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-24.81a16 16 0 0 0-12.81-15.67 24 24 0 0 1 0-47ZM32 167.2a40 40 0 0 0 0-78.39V64h56v128H32Zm192 0V192H104V64h120v24.8a40 40 0 0 0 0 78.39Z" />
  </Svg>
);
const Memo = memo(SvgTicketDuotone);
export default Memo;
