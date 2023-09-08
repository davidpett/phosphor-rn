import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScalesBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m243.14 131.54-32-80a12 12 0 0 0-13.73-7.25L140 57V40a12 12 0 0 0-24 0v22.37L53.4 76.29a12 12 0 0 0-8.54 7.25l-32 79.92A12 12 0 0 0 12 168c0 12.13 6.2 22.43 17.45 29A55 55 0 0 0 56 204a55 55 0 0 0 26.55-7C93.8 190.43 100 180.13 100 168a12 12 0 0 0-.86-4.46L72.38 96.65 116 87v117h-12a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24h-12V81.63l40.42-9-23.56 58.9A12 12 0 0 0 156 136c0 12.13 6.2 22.43 17.45 29a53.78 53.78 0 0 0 53.1 0c11.25-6.57 17.45-16.87 17.45-29a12 12 0 0 0-.86-4.46ZM56 180c-3.71 0-18-1.87-19.81-10.18L56 120.31l19.81 49.51C74 178.13 59.71 180 56 180Zm144-32c-3.71 0-18-1.87-19.81-10.18L200 88.31l19.81 49.51C218 146.13 203.71 148 200 148Z" />
  </Svg>
);
const Memo = memo(SvgScalesBold);
export default Memo;
