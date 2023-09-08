import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFireExtinguisher = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m218.3 48.34-60.68-18.2 30-15a8 8 0 0 0-7.2-14.29L134 24.05a80.08 80.08 0 0 0-78 80V208a8 8 0 0 0 16 0v-32h16v56a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V104a48.07 48.07 0 0 0-40-47.32V42.75l69.7 20.91a8 8 0 1 0 4.6-15.32ZM72 160v-56a64.07 64.07 0 0 1 56-63.48v16.16A48.07 48.07 0 0 0 88 104v56Zm96 72h-64v-56h64v56Zm0-128v56h-64v-56a32 32 0 0 1 64 0Z" />
  </Svg>
);
const Memo = memo(SvgFireExtinguisher);
export default Memo;
