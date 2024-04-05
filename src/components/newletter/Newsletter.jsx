import "./newsletter.css";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1 className="letterTitle">Newsletter</h1>
      <h3 className="letterDesc">
        Get timely updates from your favorite products.
      </h3>
      <div className="letterInput">
              <input type="text" className="letterInpt" />
              <div className="iconBox">
                  
        <SendIcon className="letterIcon" />
              </div>
      </div>
    </div>
  );
};

export default Newsletter;
