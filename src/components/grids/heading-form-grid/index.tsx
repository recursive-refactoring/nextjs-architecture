import { ContainerGrid } from "../container-grid";
import { ItemGrid } from "../item-grid";
import { HeadingFormGridPropsI } from "../Grids.interface";

export const HeadingFormGrid = (props: HeadingFormGridPropsI) => {
  const {
    formFieldsList = [],
    spacing = 2,
    rowSpacing = spacing,
    columnSpacing = spacing,
    disabled,
    children,
    md = 12,
  } = props;

  return (
    <ContainerGrid
      spacing={spacing}
      rowSpacing={rowSpacing}
      columnSpacing={columnSpacing}
    >
      {formFieldsList?.map((form: any) => (
        <ItemGrid
          xs={12}
          md={form?.md ?? md}
          key={form?._id}
          customStyles={form?.gridSx}
        >
          <form.component
            {...form?.componentProps}
            size={"small"}
            disabled={form?.componentProps?.disabled || disabled}
          >
            {form?.heading ? form?.heading : null}
          </form.component>
        </ItemGrid>
      ))}
      {children}
    </ContainerGrid>
  );
};
