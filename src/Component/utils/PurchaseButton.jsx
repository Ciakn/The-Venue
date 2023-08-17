import { Button } from "@mui/material";
import TicketIcon from "../../resources/images/icons/ticket.png";
const PurchaseButton = () => {
  return (
    <Button variant="contained" style={{color : 'orange' ,background : "#2f2f2f"}}>
      Purchase ticket
    </Button>
  );
};

export default PurchaseButton;
