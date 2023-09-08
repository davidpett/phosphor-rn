import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodesandboxLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m221.76 69.66-88-48.18a12 12 0 0 0-11.52 0l-88 48.18A12 12 0 0 0 28 80.18v95.64a12 12 0 0 0 6.24 10.52l88 48.18a11.95 11.95 0 0 0 11.52 0l88-48.18a12 12 0 0 0 6.24-10.52V80.18a12 12 0 0 0-6.24-10.52ZM128 123.44l-87.67-48L83.14 52l42.94 23.5a4 4 0 0 0 3.84 0L172.86 52l42.81 23.43Zm-1.92-94.94a3.94 3.94 0 0 1 3.84 0l34.61 19L128 67.44l-36.53-20ZM36 175.82v-43.35l40 21.9v45.72l-37.92-20.76a4 4 0 0 1-2.08-3.51Zm48 28.65V152a4 4 0 0 0-2.08-3.51L36 123.35V82.19l88 48.18v96Zm48 21.89v-96l88-48.18v41.16l-45.92 25.14A4 4 0 0 0 172 152v52.47Zm85.92-47L180 200.09v-45.72l40-21.9v43.35a4 4 0 0 1-2.08 3.51Z" />
  </Svg>
);
const Memo = memo(SvgCodesandboxLogoThin);
export default Memo;
