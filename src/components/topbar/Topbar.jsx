import Notification from "../notification/Notification";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import "./topbar.css";

const Topbar = () => {
  return (
    <>
        <Notification />
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topbarHeader">
                    <div className="topbarLeft">
                        <img className="topbarLogo" src="lfk-logo.png" alt=""/>
                        </div>
                    <div className="topbarRight">
                        <ul className="topbarNavMenu">
                            <li className="topbarNavMenuItem">Books</li>
                            <li className="topbarNavMenuItem">Sign</li>
                            <li className="topbarNavMenuItem">Activities</li>
                            <li className="topbarNavMenuItem">Staff Access</li>
                            <li className="topbarNavMenuItem">Mobile App</li>
                            <li className="topbarNavMenuItem">FAQS</li>
                            <li className="topbarNavMenuItem">Publishers</li>
                            <li className="topbarNavMenuItem">Contact Us</li>
                            <li className="topbarNavMenuItem">Logout</li>
                        </ul>
                    </div>
                </div>
                <Breadcrumbs/>
            </div>
        </div>
    </>
  )
}

export default Topbar
