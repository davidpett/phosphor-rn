import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilSimpleSlashThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M51 37.31a4 4 0 0 0-6 5.38l50.81 55.85-56.3 56.29a12 12 0 0 0-3.51 8.48V208a12 12 0 0 0 12 12h44.69a11.93 11.93 0 0 0 8.48-3.51l53.36-53.36L205 218.69a4 4 0 1 0 5.92-5.38Zm44.52 173.52a4.06 4.06 0 0 1-2.83 1.17H48a4 4 0 0 1-4-4v-44.69a4 4 0 0 1 1.17-2.82l56-56 47.94 52.74Zm129-134.63L179.8 31.52a12 12 0 0 0-17 0l-41.64 41.67a4 4 0 0 0 5.66 5.65l9.18-9.18L186.35 120l-11.85 11.85a4 4 0 1 0 5.65 5.66l44.34-44.34a12 12 0 0 0 0-16.97Zm-5.66 11.31L192 114.34 141.66 64l26.83-26.83a4.1 4.1 0 0 1 5.66 0l44.68 44.69a4 4 0 0 1 0 5.65Z" />
  </Svg>
);
const Memo = memo(SvgPencilSimpleSlashThin);
export default Memo;
