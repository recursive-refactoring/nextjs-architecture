"use client";
import CustomTable from "@/components/table/custom-table";
import { useComponents } from "./use-components";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { signinFormFieldData } from "./components.data";
import { Box } from "@mui/material";
import ItemAvatarCountCard from "@/components/cards/item-avatar-count-card";
import ActivityInfoCard from "@/components/cards/activity-info-card";

export const ComponentsFeature = () => {
  const { column, renderData, methods } = useComponents();

  return (
    <>
      <CustomTable columns={column} data={renderData} />
      <Box
        sx={{
          backgroundColor: "primary.light",
          padding: 2,
          maxWidth: "sm",
          margin: "auto",
          borderRadius: 2,
        }}
      >
        <CustomFormProvider methods={methods}>
          <FormGrid formFieldsList={signinFormFieldData} />
        </CustomFormProvider>

        <Box>
          <ItemAvatarCountCard name="Hi" avatarSrc={""} count={3} />
        </Box>
        <Box>
          <ActivityInfoCard name="Hi" info={"40 hrs"} />
        </Box>
      </Box>
    </>
  );
};
