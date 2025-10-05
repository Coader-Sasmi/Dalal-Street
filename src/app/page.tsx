import CreditsFeatures from "@/components/home/CreditsFeatures";
import CreditsModel from "@/components/home/CreditsModel";
import DownloadApp from "@/components/home/DownloadApp";
import InvestorsHub from "@/components/home/InvestorsHub";
import OurProcess from "@/components/home/OurProcess";
import ResearchCalls from "@/components/home/ResearchCalls";
import WhyDalalStreet from "@/components/home/WhyDalalStreet";
import { AiFillCodeSandboxSquare } from "react-icons/ai";

export default function Home() {
  return (
    <>
    <ResearchCalls/>
    <CreditsModel/>
    <CreditsFeatures/>
    <DownloadApp/>
    <WhyDalalStreet/>
    <OurProcess/>
    <InvestorsHub/>
    <AiFillCodeSandboxSquare/>
    </>

  );
}
