import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRewindLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222.81 59.72a14 14 0 0 0-14.22.46L126 112.79V71.84a13.83 13.83 0 0 0-7.19-12.12 14 14 0 0 0-14.22.46l-88.18 56.17a13.79 13.79 0 0 0 0 23.3l88.18 56.17a14 14 0 0 0 14.22.46 13.83 13.83 0 0 0 7.19-12.12v-40.95l82.59 52.61a14 14 0 0 0 14.22.46 13.83 13.83 0 0 0 7.19-12.12V71.84a13.83 13.83 0 0 0-7.19-12.12ZM114 184.16a1.73 1.73 0 0 1-1 1.59 1.9 1.9 0 0 1-2-.06l-88.15-56.16a1.8 1.8 0 0 1 0-3.06L111 70.31a1.87 1.87 0 0 1 1-.32 2 2 0 0 1 1 .26 1.73 1.73 0 0 1 1 1.59Zm104 0a1.73 1.73 0 0 1-1 1.59 1.9 1.9 0 0 1-2-.06l-88.19-56.16a1.8 1.8 0 0 1 0-3.06L215 70.31a1.87 1.87 0 0 1 1-.32 2 2 0 0 1 1 .26 1.73 1.73 0 0 1 1 1.59Z" />
  </Svg>
);
const Memo = memo(SvgRewindLight);
export default Memo;
