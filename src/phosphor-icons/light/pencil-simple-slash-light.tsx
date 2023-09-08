import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilSimpleSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52.44 36a6 6 0 0 0-8.88 8l49.49 54.47-54.95 54.95a13.9 13.9 0 0 0-4.1 9.89V208a14 14 0 0 0 14 14h44.69a13.94 13.94 0 0 0 9.9-4.1l51.87-51.9 49.11 54a6 6 0 0 0 8.88-8.08ZM94.1 209.42a2 2 0 0 1-1.41.58H48a2 2 0 0 1-2-2v-44.69a2 2 0 0 1 .59-1.41l54.54-54.54 45.25 49.78ZM225.91 74.79 181.22 30.1a14 14 0 0 0-19.8 0l-41.67 41.67a6 6 0 0 0 8.48 8.49l7.77-7.78L183.52 120l-10.44 10.44a6 6 0 1 0 8.49 8.48l44.34-44.33a14 14 0 0 0 0-19.8Zm-8.49 11.31L192 111.52 144.49 64l25.42-25.41a2 2 0 0 1 2.82 0l44.69 44.68a2 2 0 0 1 0 2.83Z" />
  </Svg>
);
const Memo = memo(SvgPencilSimpleSlashLight);
export default Memo;
