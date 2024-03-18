import './styles/HeaderFooter.css';
import xmr from '../../media/images/monero/xmr.svg';
import monero from '../../media/images/monero/monero.png';

const Footer = () => {
    return (
        <footer className={"footer"}>
            A Lewis Britton Production
            <br />
            <code style={{ fontSize: "12px" }}>
                4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5RPcM8KF6hDWGhj7<br />f37dfqwzGCqq1Vug13vmBkxoQARfNnrbNEcqsj<br />ZMTJSSkB46V
            </code>
            <br />
            <img src={monero} style={{ height: "100px" }} />
            <br />
            <img src={xmr} style={{ height: "15px" }} /> Monero Donations
            <br />
            &#169; Lewis Britton 2020&mdash;2023
        </footer>
    )
}

export default Footer;