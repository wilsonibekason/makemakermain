import { useNavigate, useParams, useLocation } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    const location = useLocation();
    const params = useParams();
    return <Component router={{ history, location, params }} {...props} />;
  };
  return Wrapper;
};
