import { ReactComponent as LogoDark } from "../../../assets/images/logos/companylogo.svg";
import { Link } from "react-router-dom";

const CompanyLogo = () => {
  return (
    <Link to="/">
      <LogoDark />
    </Link>
  );
};

export default CompanyLogo;
