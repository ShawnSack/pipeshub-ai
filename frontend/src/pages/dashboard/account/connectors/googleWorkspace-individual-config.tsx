import { Helmet } from 'react-helmet-async';

import { Box } from '@mui/material';

import { CONFIG } from 'src/config-global';

import Sidebar from 'src/sections/accountdetails/Sidebar';
import GoogleWorkspaceIndividualPage from 'src/sections/accountdetails/account-settings/connector/googleWorkspace-individual-config';

// ----------------------------------------------------------------------

const metadata = { title: `Connector Settings  - ${CONFIG.appName}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden', zIndex: 0 }}>
        <Sidebar />
        <GoogleWorkspaceIndividualPage />
      </Box>
    </>
  );
}
