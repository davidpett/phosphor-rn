import type { SvgProps } from 'react-native-svg';
import * as Icon from './phosphor-icons';
import type {
  PhosphorIconVariant,
  PhosphorIconWeight,
} from './phosphor-icons/phosphor-icon.types';
import React, { useMemo } from 'react';

const toPascalCase = (value: string) =>
  `${value}`
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      (_, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());

const defaultVariant: PhosphorIconVariant = 'info';
const getIconComponent = (
  variant: PhosphorIconVariant,
  weight: PhosphorIconWeight
): {
  Comp: React.MemoExoticComponent<(props: SvgProps) => React.ReactElement>;
  variant: PhosphorIconVariant;
} => {
  const iconVariant: string[] = [variant];
  if (weight !== 'regular') {
    iconVariant.push(weight);
  }
  const composedVariant: PhosphorIconVariant = iconVariant.join(
    '-'
  ) as PhosphorIconVariant;
  const Comp = Icon[toPascalCase(composedVariant) as keyof typeof Icon];
  if (typeof Comp === 'undefined') {
    console.error(`PhosphorIcon: there is no '${variant}' variant`);
    return getIconComponent(defaultVariant, weight);
  }
  return { Comp, variant: composedVariant };
};

export type PhosphorIconProps = {
  /**
   * list of icons from [phosphor icons](https://phosphoricons.com)
   */
  variant?: PhosphorIconVariant;
  color?: string;
  /**
   * the `size` maps to both the width and height of the icon, since the bounding box is always square
   */
  size?: number;
  /**
   * list of icon weights from [phosphor icons](https://phosphoricons.com)
   */
  weight?: PhosphorIconWeight;
} & Omit<SvgProps, 'fill' | 'width' | 'height'>;

/**
 * `<PhosphorIcon/>`
 */
const PhosphorIcon: React.FC<PhosphorIconProps> = ({
  variant = defaultVariant,
  color = 'black',
  size = 24,
  weight = 'regular',
  ...rest
}) => {
  const fill = color;
  const { Comp, variant: renderedVariant } = useMemo(
    () => getIconComponent(variant, weight),
    [variant, weight]
  );

  return (
    <Comp
      fill={fill}
      width={size}
      height={size}
      accessibilityLabel={renderedVariant}
      accessibilityValue={{
        now: size,
        text: fill,
      }}
      {...rest}
    />
  );
};

export { PhosphorIcon };
export default PhosphorIcon;
