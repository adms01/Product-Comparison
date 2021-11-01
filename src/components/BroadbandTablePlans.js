import React from "react";
import BroadbandPlanRow from "./BroadbandPlanRow";
import { Table } from "./Table";

function BroadbandTablePlans({ deals }) {
  return <Table>{deals && deals.map((deal) => <BroadbandPlanRow deal={deal} key={deal.deal_id} />)}</Table>;
}

export default BroadbandTablePlans;
