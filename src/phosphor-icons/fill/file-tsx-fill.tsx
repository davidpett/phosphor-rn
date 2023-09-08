import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileTsxFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8V88a8 8 0 0 0-2.34-5.66ZM152 88V44l44 44Zm62.51 68.65L197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 13-9.3L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm-66.7 39.66a20.82 20.82 0 0 1-9.19 15.23C133.43 215 127 216 121.13 216a60.43 60.43 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.21 15 2.71 19.55-.35.88-.6 1.83-1.52 2.14-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 9-14.94c11.85-8 30.72-3.31 32.84-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.08 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.78 2.82 26.29 7.65 24.1 24.96ZM88 152a8 8 0 0 1-8 8H68v48a8 8 0 0 1-16 0v-48H40a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgFileTsxFill);
export default Memo;
