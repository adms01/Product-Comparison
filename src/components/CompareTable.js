import React from "react";
import Table from "./Table";
import TableRow from "./TableRow";
import TableRowItem from "./TableRowItem";

function CompareTable({
  provider_rating,
  monthly_price,
  monthly_price_type,
  internet_speed,
  set_up_cost,
  contract_info,
  data_limits,
  yearly_cost,
  yearly_savings,
}) {
  return (
    <Table>
      <TableRow>
        <TableRowItem>Rating</TableRowItem>
        <TableRowItem>{provider_rating * 10}/10</TableRowItem>
      </TableRow>
      <TableRow>
        <TableRowItem>Monthly Cost</TableRowItem>
        <TableRowItem>£{monthly_price}</TableRowItem>
      </TableRow>
      <TableRow>
        <TableRowItem>Monthly Price Type</TableRowItem>
        <TableRowItem>{monthly_price_type}</TableRowItem>
      </TableRow>
      <TableRow>
        <TableRowItem>Yearly cost</TableRowItem>
        <TableRowItem>£{yearly_cost}</TableRowItem>
      </TableRow>

      <TableRow>
        <TableRowItem>Yearly saving</TableRowItem>
        <TableRowItem>£{yearly_savings}</TableRowItem>
      </TableRow>
      <TableRow>
        <TableRowItem>Speed</TableRowItem>
        <TableRowItem>{internet_speed} Mbps</TableRowItem>
      </TableRow>

      <TableRow>
        <TableRowItem>Set Up Cost</TableRowItem>
        <TableRowItem>£{set_up_cost}</TableRowItem>
      </TableRow>
      <TableRow>
        <TableRowItem>Term Limit</TableRowItem>
        <TableRowItem>{contract_info}</TableRowItem>
      </TableRow>
      <TableRow>
        <TableRowItem>Data Limits</TableRowItem>
        <TableRowItem>{data_limits}</TableRowItem>
      </TableRow>
    </Table>
  );
}

export default CompareTable;
