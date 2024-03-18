import './styles/HeaderFooter.css';

const Footer = () => {
    return (
        <footer className={"footer"}>
            A Lewis Britton Production
            <br />
            <img src="Photos/xmr.svg" style={{ height: "15px" }} />
            <br />
            Monero Donations
            <code style={{ fontSize: "12px" }}>
                4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5RPcM8KF6hDWGhj7<br />f37dfqwzGCqq1Vug13vmBkxoQARfNnrbNEcqsj<br />ZMTJSSkB46V
            </code>



            <a href="Photos/monero.png"><img src="Photos/monero.png" style="height:100px"></a>

            &#169; Lewis Britton 2020-2022
        </footer>
    )
}

export default Footer;