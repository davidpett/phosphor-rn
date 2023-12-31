import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellSimpleSlashBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.88 207.93-160-176a12 12 0 1 0-17.76 16.14l14.8 16.29A83.58 83.58 0 0 0 44 104c0 25.58-4.59 47-13.27 61.93a20.08 20.08 0 0 0-.05 20.07A19.75 19.75 0 0 0 48 196h125.6l25.52 28.07a12 12 0 0 0 17.76-16.14ZM54.68 172C63.52 154 68 131.14 68 104a59.84 59.84 0 0 1 3.52-20.29L151.78 172ZM172 224a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12ZM88.89 42.35a12 12 0 0 1 6.37-15.73A84 84 0 0 1 212 104c0 18.68 2.38 34.93 7.07 48.28a12 12 0 1 1-22.64 8C190.83 144.32 188 125.4 188 104a60 60 0 0 0-83.38-55.28 12 12 0 0 1-15.73-6.37Z" />
  </Svg>
);
const Memo = memo(SvgBellSimpleSlashBold);
export default Memo;
