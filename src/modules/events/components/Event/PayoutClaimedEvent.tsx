import { utils } from "ethers";
import { BigNumberish } from "ethers/utils";
import { useCallback } from "react";
import ContentLoader from "react-content-loader";

import { TokenSymbol } from "../../../../constants/token.constants";
import { Avatar } from "../../../../ui";
import { Event } from "../../events.types";
import { isTokenSymbol } from "../../events.utils";
import { useEventDetails } from "../../hooks/useEventDetails";
import EventContent from "./EventContent";

interface PayoutClaimedEventProps {
  data: Event<{
    token: string;
    amount: BigNumberish;
    fundingPotId: BigNumberish;
  }>;
  inView: boolean;
}

function PayoutClaimedEvent({ data, inView }: PayoutClaimedEventProps) {
  const [details, { loading }] = useEventDetails(data, inView);

  const getSymbol = useCallback(() => {
    if (!data.values.token) {
      return null;
    }

    if (isTokenSymbol(data.values.token)) {
      return TokenSymbol[data.values.token];
    }

    return data.values.token;
  }, [data.values.token]);

  const wei = new utils.BigNumber(10);
  const fundingPotId = new utils.BigNumber(data.values.fundingPotId);
  const amount = new utils.BigNumber(data.values.amount).div(wei.pow(18));

  if (!details || loading) {
    return (
      <ContentLoader
        height={38}
        width="100%"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="18.5" cy="18.5" r="18.5" />
        <rect height="5.5" rx="1" ry="1" width="100%" x="50" y="5" />
        <rect height="5.5" rx="1" ry="1" width="70%" x="50" y="15" />
      </ContentLoader>
    );
  }

  return (
    <>
      <Avatar seed={details?.recipient} />
      <EventContent blockHash={inView ? data.blockHash : undefined}>
        {`User **${
          details?.recipient
        }** claimed **${amount.toString()}** **${getSymbol()}** payout from pot **${fundingPotId.toNumber()}**.`}
      </EventContent>
    </>
  );
}

export default PayoutClaimedEvent;
