import { BodyText } from "@/components/text/body-text";
import { CommonCard } from "../common-card";
import { HeadingText } from "@/components/text/heading-text";
import { ActivityInfoCardPropsI } from "../cards.interface";

const ActivityInfoCard = (props: ActivityInfoCardPropsI) => {
  const { name, info, infoColor } = props;
  return (
    <CommonCard>
      <BodyText color="primary.main">{name}</BodyText>
      <HeadingText color={infoColor}>{info}</HeadingText>
    </CommonCard>
  );
};

export default ActivityInfoCard;
