import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPushPinSlashDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m229.66 98.34-57.27 57.46c11.46 22.93-1.72 45.86-10.11 57a8 8 0 0 1-12 .83L42.34 105.76A8 8 0 0 1 43 93.85c29.65-23.92 57.4-10 57.4-10l57.27-57.46a8 8 0 0 1 11.31 0L229.66 87a8 8 0 0 1 0 11.34Z"
      opacity={0.2}
    />
    <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L67.37 73.2A69.82 69.82 0 0 0 38 87.63a16 16 0 0 0-1.29 23.78L85 159.71l-42.66 42.63a8 8 0 0 0 11.32 11.32L96.29 171l48.29 48.29A16 16 0 0 0 155.9 224h1.13a15.93 15.93 0 0 0 11.64-6.33 89.75 89.75 0 0 0 11.58-20.27l21.84 24a8 8 0 1 0 11.84-10.76ZM155.9 208 48 100.08c10.23-8.25 21.2-12.36 32.66-12.27l87.16 95.88c-2.23 9.87-7.58 18.54-11.92 24.31Zm79.42-104-44.64 44.79a8 8 0 1 1-11.33-11.3L224 92.7 163.32 32 122.1 73.35a8 8 0 0 1-11.33-11.29L152 20.7a16 16 0 0 1 22.63 0l60.69 60.68a16 16 0 0 1 0 22.62Z" />
  </Svg>
);
const Memo = memo(SvgPushPinSlashDuotone);
export default Memo;
