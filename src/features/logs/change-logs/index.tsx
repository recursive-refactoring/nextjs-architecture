import { AddNewItemButton } from "@/components/buttons/add-new-item-button";
import { HorizontalTabs } from "@/components/tabs/horizontal-tabs";
import { Box } from "@mui/material";
import { changeLogsTabData } from "./change-logs.data";

const ChangeLogsFeature = () => {
  return (
    <>
      <Box sx={{ textAlign: "end" }}>
        <AddNewItemButton hasStartIcon={false}>Add New Change</AddNewItemButton>
      </Box>
      <HorizontalTabs spacing={0.3} tabsDataArray={changeLogsTabData} />
    </>
  );
};

export default ChangeLogsFeature;
