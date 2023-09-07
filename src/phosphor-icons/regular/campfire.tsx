import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCampfire = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M223.62 226.42a8 8 0 0 1-10.05 5.2L128 204.39l-85.57 27.23a8 8 0 1 1-4.85-15.25l64-20.37-64-20.38a8 8 0 1 1 4.85-15.24L128 187.6l85.57-27.22a8 8 0 1 1 4.85 15.24l-64 20.38 64 20.37a8 8 0 0 1 5.2 10.05ZM68 108c0-20.1 9.77-40.87 28.24-60a156 156 0 0 1 27.57-22.76 8 8 0 0 1 8.38 0C134.47 26.59 188 60.08 188 108a60 60 0 0 1-120 0Zm60 44a16 16 0 0 0 16-16c0-13.57-10-24.46-16-29.79-6 5.33-16 16.22-16 29.79a16 16 0 0 0 16 16Zm-44-44a43.83 43.83 0 0 0 12.09 30.24c0-.74-.09-1.49-.09-2.24 0-28 26.44-45.91 27.56-46.66a8 8 0 0 1 8.88 0C133.56 90.09 160 108 160 136c0 .75 0 1.5-.09 2.24A43.83 43.83 0 0 0 172 108c0-32-32.26-58-44-66.34C116.27 50 84 76 84 108Z" />
  </Svg>
);
const Memo = memo(SvgCampfire);
export default Memo;
