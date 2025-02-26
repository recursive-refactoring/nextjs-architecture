"use client";
import { useComponents } from "./use-components";
import { CustomFormProvider } from "@/providers/custom-form-provider";
import { FormGrid } from "@/components/grids/form-grid";
import { signinFormFieldData } from "./components.data";
import { Box } from "@mui/material";
import ItemAvatarCountCard from "@/components/cards/item-avatar-count-card";
import { CommonLayoutAvatarImage } from "@/assets/images/layout";
import ActivityInfoCard from "@/components/cards/activity-info-card";
import { HeadingText } from "@/components/text/heading-text";
import CommonDialog from "@/components/dialogs/common-dialog";
import { CommonDrawer } from "@/components/dialogs/common-drawer";
import CommonTable from "@/components/table/common-table";
import { AlertDialog } from "@/components/dialogs/alert-dialog";
import { ALERT_DIALOGS_TYPES } from "@/constants/alert-dialog";
import { CommonButton } from "@/components/buttons/common-button";
import { infoSnackbar } from "@/libs/snackbar.lib";

export const ComponentsFeature = () => {
  const { column, renderData, methods } = useComponents();
  const showSnackbar = () => {
    infoSnackbar("this is success");
  };

  return (
    <>
      <CommonTable columns={column} data={renderData} />
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
        <CommonButton onClick={showSnackbar}>Show Snackbar</CommonButton>
        <Box>
          <ItemAvatarCountCard
            name="Hi"
            avatarSrc={CommonLayoutAvatarImage}
            count={3}
          />
        </Box>
        <Box>
          <ActivityInfoCard name="Hi" info="40" extraInfo="hrs" />
        </Box>
        <HeadingText variant="h1" color="primary.main">
          H1
        </HeadingText>
        <HeadingText variant="h6" color="primary.main">
          H1
        </HeadingText>
      </Box>
      <CommonDialog
        isPortalOpen={false}
        dialogTitle="New Dialog"
        submitBtnFull
        cancelBtnFull
        showCancelButton={false}
      >
        <CustomFormProvider methods={methods}>
          <FormGrid formFieldsList={signinFormFieldData} />
        </CustomFormProvider>
      </CommonDialog>
      <CommonDrawer isPortalOpen={false} drawerTitle="New Drawer">
        <CustomFormProvider methods={methods}>
          <FormGrid formFieldsList={signinFormFieldData} />
        </CustomFormProvider>
      </CommonDrawer>
      <AlertDialog
        type={ALERT_DIALOGS_TYPES?.WARNING}
        message="this is an alert"
      />
    </>
  );
};
