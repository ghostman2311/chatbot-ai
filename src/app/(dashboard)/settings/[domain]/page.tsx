import SettingsForm from "@/components/forms/settings/form";
import InfoBar from "@/components/infobar";

type Props = { params: { domain: string } };

const DomainSettingsPage = ({ params }: Props) => {
  return (
    <>
      <InfoBar />
      <SettingsForm />
    </>
  );
};

export default DomainSettingsPage;
