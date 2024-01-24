/** @jsxImportSource @emotion/react */
import {
  Backdrop,
  Button,
  Card,
  CardContent,
  Dialog,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { FC } from "react";

import { RegisterPageStyle } from "../index.style";

interface TermAndConditionsPopupProps {
  open: boolean;
  onClose: () => void;
}

const TermAndConditionsPopup: FC<TermAndConditionsPopupProps> = ({
  open,
  onClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      css={RegisterPageStyle.popupComponent}
    >
      <Backdrop open={open} style={{ opacity: 1, position: "relative" }} />
      <Paper className="MuiPaper-root-231 MuiCard-root-230 MuiPaper-elevation1-235 MuiPaper-rounded-232">
        <CardContent className="MuiCardContent-root-573">
          <Box className="MuiBox-root-227" p={2}>
            <Typography
              variant="h4"
              className="MuiTypography-root-376 MuiTypography-h4-384"
              style={{ fontSize: "22px", marginBottom: "5px" }}
            >
              viAct’s Terms and Conditions for Free Trial
            </Typography>
            <Typography
              variant="body1"
              className="MuiTypography-root-376 MuiTypography-body1-378"
              style={{
                color: "rgb(147, 147, 147)",
                marginBottom: "20px",
                fontSize: "12px",
              }}
            >
              Last updated April 9, 2020
            </Typography>
            <Typography
              variant="body1"
              className="MuiTypography-root-376 MuiTypography-body1-378"
              style={{ fontWeight: 700, marginBottom: "20px" }}
            >
              AGREEMENT TO TERMS
            </Typography>
            <Typography
              variant="body1"
              className="MuiTypography-root-376 MuiTypography-body1-378"
            >
              These Terms and Conditions constitute a legally binding agreement
              made between you, whether personally or on behalf of an entity and
              VIACT, concerning your access to and use of the free trial.
              <br />
              <br />
              You agree that by accessing the free trial, you have read,
              understood, and agree to be bound by all of these Terms and
              Conditions. If you do not agree with all of these Terms and
              Conditions, then you are expressly prohibited from using the free
              trial and you must discontinue use immediately.
              <br />
              <br />
              We reserve the right, in our sole discretion, to make changes or
              modifications to these Terms and Conditions at any time and for
              any reason.
              <br />
              <br />
              We will alert you about any changes by updating the “Last updated”
              date of these Terms and Conditions, and you waive any right to
              receive specific notice of each such change.
              <br />
              <br />
              It is your responsibility to periodically review these Terms and
              Conditions to stay informed of updates. You will be subject to,
              and will be deemed to have been made aware of and to have
              accepted, the changes in any revised Terms and Conditions by your
              continued use of the free trial after the date such revised Terms
              and Conditions are posted.
              <br />
              <br />
              The information provided on the free trial is not intended for
              distribution to or use by any person or entity in any jurisdiction
              or country where such distribution or use would be contrary to law
              or regulation or which would subject us to any registration
              requirement within such jurisdiction or country.
              <br />
              <br />
              Accordingly, those persons who choose to access the free trial
              from other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </Typography>
          </Box>
          <Box
            className="MuiBox-root-227"
            sx={{ display: "flex", justifyContent: "end" }}
          >
            <Button
              variant="contained"
              style={{ background: "rgb(35, 182, 216)", color: "white" }}
              onClick={onClose}
            >
              CLOSE
            </Button>
          </Box>
        </CardContent>
      </Paper>
    </Dialog>
  );
};

export default TermAndConditionsPopup;
