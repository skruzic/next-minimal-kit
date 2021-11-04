import PropTypes from "prop-types";
//import { Helmet } from "react-helmet-async";
import Head from "next/head";
import { forwardRef } from "react";
// material
import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", ...other }, ref) => (
  <Box ref={ref} {...other}>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </Box>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Page.displayName = "Page";

export default Page;
