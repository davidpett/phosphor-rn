import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrophoneSlashLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m212.44 212-160-176a6 6 0 0 0-8.88 8L82 86.32V128a46 46 0 0 0 72.24 37.78l13.53 14.89A66 66 0 0 1 62 128a6 6 0 0 0-12 0 78.09 78.09 0 0 0 72 77.75V232a6 6 0 0 0 12 0v-26.25a77.68 77.68 0 0 0 41.86-16.18l27.7 30.43a6 6 0 0 0 8.88-8.08ZM128 162a34 34 0 0 1-34-34V99.52l52.07 57.28A33.92 33.92 0 0 1 128 162ZM88.86 39.83A46 46 0 0 1 174 64v60.43a6 6 0 0 1-12 0V64a34 34 0 0 0-62.94-17.86 6 6 0 1 1-10.2-6.31ZM189.5 152a65.55 65.55 0 0 0 4.5-24 6 6 0 0 1 12 0 77.65 77.65 0 0 1-5.32 28.37 6 6 0 0 1-5.59 3.82 6 6 0 0 1-5.59-8.19Z" />
  </Svg>
);
const Memo = memo(SvgMicrophoneSlashLight);
export default Memo;
