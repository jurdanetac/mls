import greenMCrossedUrl from "../../assets/green-m-crossed.png";
import greenMUrl from "../../assets/green-m.png";

import { Status } from "../types";

const MembersIcon = ({ status }: { status: Status }) => {
  if (status === Status.ACTIVE || status === Status.OFF_MARKET) {
    return null;
  }

  return (
    <img
      id="statusIcon"
      width="16px"
      height="16px"
      alt="Status Icon"
      src={status === Status.MEMBERS_ONLY_SHOW ? greenMUrl : greenMCrossedUrl}
    />
  );
};

export default MembersIcon;
