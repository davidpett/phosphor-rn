import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGraduationCapLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m250.82 90.71-120-64a5.94 5.94 0 0 0-5.64 0l-120 64a6 6 0 0 0 0 10.58L34 116.67v49.62a14 14 0 0 0 3.55 9.32C50.42 189.94 79.29 214 128 214a127.21 127.21 0 0 0 50-9.73V240a6 6 0 0 0 12 0v-41.65a113.18 113.18 0 0 0 28.45-22.75 13.91 13.91 0 0 0 3.55-9.31v-49.62l28.82-15.38a6 6 0 0 0 0-10.58ZM128 202c-44 0-70-21.56-81.52-34.41a2 2 0 0 1-.48-1.3v-43.22l79.18 42.22a6 6 0 0 0 5.64 0L178 140.13v51c-13 6.22-29.55 10.87-50 10.87Zm82-35.71a2 2 0 0 1-.48 1.3A100.25 100.25 0 0 1 190 184.3v-50.57l20-10.66Zm-22.15-45a6.27 6.27 0 0 0-1-.71l-56-29.86a6 6 0 0 0-5.64 10.58l50.04 26.7L128 153.2 20.75 96 128 38.8 235.25 96Z" />
  </Svg>
);
const Memo = memo(SvgGraduationCapLight);
export default Memo;
