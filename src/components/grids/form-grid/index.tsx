import { ContainerGrid } from "../container-grid";
import { FormGridPropsI } from "../Grids.interface";
import { ItemGrid } from "../item-grid";

export const FormGrid = (props: FormGridPropsI) => {
  const {
    formFieldsList = [],
    spacing = 2,
    disabled,
    children,
    md = 12,
  } = props;

  return (
    <ContainerGrid spacing={spacing}>
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
          />
        </ItemGrid>
      ))}
      {children}
    </ContainerGrid>
  );
};
