import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76L73.55 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224v-48.91l42.08 46.29a8 8 0 1 0 11.84-10.76ZM32 96h40v64H32Zm154 47.87a24 24 0 0 0 0-31.72 8 8 0 1 1 12-10.57 40 40 0 0 1 0 52.88 8 8 0 0 1-12-10.59Zm-79.77-75.49a8 8 0 0 1 1-11.7l39.85-31A8 8 0 0 1 160 32v74.83a8 8 0 0 1-13.92 5.38ZM248 128a79.9 79.9 0 0 1-20.37 53.34 8 8 0 0 1-11.92-10.67 64 64 0 0 0 0-85.33 8 8 0 1 1 11.92-10.67A79.83 79.83 0 0 1 248 128Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerSlashFill);
export default Memo;
