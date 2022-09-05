import type { NextPage } from 'next';
import Page from "../components/reusables/Page";
import ComingSoon from "../components/reusables/ComingSoon";

const PinSalesOutlets: NextPage = () => {
  return (
    <Page title="Scholarly Activation Pin Sales Outlet" description="Find hundreds of accredited activation pins sales outlets nationwide where you can go in-person to purchase activation pins">
      <ComingSoon feature='pin-sales-outlets' />
    </Page>
  )
}

export default PinSalesOutlets;