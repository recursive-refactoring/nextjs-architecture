import { ContainerGrid } from "../container-grid";
import { ItemGrid } from "../item-grid";
import { ListGridPropsI } from "../Grids.interface";

export const ListGrid = (props: ListGridPropsI) => {
  const {
    list = [],
    spacing = 2,
    render,
    sm = 12,
    md = 6,
    lg = md,
    xl = lg,
  } = props;

  return (
    <ContainerGrid spacing={spacing}>
      {list?.map((singleItem: any) => (
        <ItemGrid xs={12} sm={sm} md={md} xl={xl} lg={lg} key={singleItem?._id}>
          {render(singleItem)}
        </ItemGrid>
      ))}
    </ContainerGrid>
  );
};
