import React from "react";
import './banner.css'
import SectionContent from "../SectionContent";

class HomeBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { backgroundProps } = this.props;

    return (
      <div className="banner_section" style={{ backgroundImage: `url(${backgroundProps})` }} >
        <div className="banner-container">
          <p className="signature">
            Emma <br />
            <span>Pierre</span>
          </p>
        </div>
      </div>
    );
  }
}

export default HomeBanner;
