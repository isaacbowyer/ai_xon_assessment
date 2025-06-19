interface IProps {
  hoveredLabel: string;
  label: string;
  hoverColor: string;
  color: string;
}
export const getNavLinkColor = (props: IProps) => {
  return props.hoveredLabel && props.hoveredLabel !== props.label
    ? props.hoverColor
    : props.color;
};
