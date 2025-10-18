import './Sidebar.scss'
import { ProgressBar } from "components/ProgressBar";
import logo from '../../../assets/images/logo.svg';

interface SidebarProps {
    funPercentage: number;
    userEmail: string;
}

export const Sidebar = ({ funPercentage, userEmail }: SidebarProps) => {
    return (
        <aside className="sidebar">
            <div className="sidebar__content">
                <div className="sidebar__header">
                    <div className="sidebar__logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                <div className="sidebar__question">
                    <p className="sidebar__subtitle">How much fun do you want in your life?</p>
                </div>

                <div className="sidebar__user-info">
                    <p className="sidebar__email">{userEmail}</p>
                    <ProgressBar percentage={funPercentage} />
                    <p className="sidebar__cta">
                        <span className="sidebar__cta-subscribe">Subscribe</span> to all our fun sites to upgrade your fun progress
                    </p>
                </div>

                <div className="sidebar__footer">
                    <div className="sidebar__company">
                        <div className="sidebar__company-info">
                            <p className="sidebar__company-name">EntertainMeMore</p>
                            <p className="sidebar__address">
                                11807 Westheimer 550 PMB617<br />
                                Houston, TX 77077
                            </p>
                        </div>
                        <p className="sidebar__contact">contact@mail.com</p>
                        <a href="#" className="sidebar__privacy">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </aside>
    );
};