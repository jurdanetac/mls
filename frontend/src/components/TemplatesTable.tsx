import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { acquisitionMarginStyle } from "@/styles";
import type { TemplateProps } from "@/types";
import {
  calculateAcquisitionMargin,
  calculateMaxAcquisitionPrice,
  USDollarExact,
} from "@/utils/number.utils";

const TemplatesTable = ({ templates }: { templates: Array<TemplateProps> }) => {
  return (
    <Table>
      <TableCaption>List of saved templates</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date Created</TableHead>
          <TableHead>MLS #</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Bedrooms</TableHead>
          <TableHead>Bathrooms</TableHead>
          <TableHead className="text-right">Listing Price</TableHead>
          <TableHead className="text-right">ARV</TableHead>
          <TableHead className="text-right">Max Acquisition Price</TableHead>
          <TableHead className="text-right">Acquisition Margin</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {templates.map((template: TemplateProps) => {
          const maxAquisitionPrice = calculateMaxAcquisitionPrice(template.arv);
          const acquisitionMargin = calculateAcquisitionMargin(
            maxAquisitionPrice,
            template.listingPrice,
          );

          return (
            <TableRow>
              <TableCell className="text-yellow-300">TO-DO</TableCell>
              <TableCell>{template.mlsNumber}</TableCell>
              <TableCell>{template.address}</TableCell>
              <TableCell>{template.bedrooms}</TableCell>
              <TableCell>
                {template.fullBathrooms} | {template.halfBathrooms}
              </TableCell>
              <TableCell className="text-right">
                {USDollarExact.format(template.listingPrice)}
              </TableCell>
              <TableCell className="text-right">
                {USDollarExact.format(template.arv)}
              </TableCell>
              <TableCell className="text-right">
                {USDollarExact.format(maxAquisitionPrice)}
              </TableCell>
              <TableCell className="text-right">
                <span style={acquisitionMarginStyle(acquisitionMargin)}>
                  {USDollarExact.format(acquisitionMargin)}
                </span>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TemplatesTable;
