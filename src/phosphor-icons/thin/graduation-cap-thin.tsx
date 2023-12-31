import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGraduationCapThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m249.88 92.47-120-64a4 4 0 0 0-3.76 0l-120 64a4 4 0 0 0 0 7.06L36 115.47v50.82a11.92 11.92 0 0 0 3 8c12.65 14.09 41 37.73 89 37.73 21 0 38.2-4.52 52-10.79V240a4 4 0 0 0 8 0v-42.82a111.64 111.64 0 0 0 29-22.91 11.94 11.94 0 0 0 3-8v-50.8l29.88-15.94a4 4 0 0 0 0-7.06ZM128 204c-44.83 0-71.25-22-83-35.08a3.92 3.92 0 0 1-1-2.63v-46.56l82.12 43.8a4 4 0 0 0 3.76 0L180 136.8v55.53C166.58 199 149.39 204 128 204Zm84-37.71a4 4 0 0 1-1 2.64 103.32 103.32 0 0 1-23 19v-55.4l24-12.8Zm-24.59-42.51a4 4 0 0 0-1.53-1.44l-56-29.87a4 4 0 0 0-3.76 7.06L179.5 128 128 155.47 16.5 96 128 36.53 239.5 96Z" />
  </Svg>
);
const Memo = memo(SvgGraduationCapThin);
export default Memo;
