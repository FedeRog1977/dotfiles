import '../styles/header-footer.styles.scss'
import xmr from '../../../media/images/monero/xmr.svg'
import monero from '../../../media/images/monero/monero.png'
import { Spacing, Typography } from '..'

export const Footer = () => (
    <footer className="footer">
        <Spacing mY={40}>
            <Typography
                type="h3"
                content="A Lewis Britton Production"
                color="lightGrey"
                textAlign="center"
            />
        </Spacing>
        <Spacing mY={40}>
            <Typography
                type="body"
                content={<img src={xmr} alt="xmr" style={{ height: '15px' }} />}
                color="lightGrey"
                textAlign="center"
                inline
            />{' '}
            <Typography
                type="body"
                content="Monero Donations"
                color="lightGrey"
                textAlign="center"
                inline
            />
        </Spacing>
        <Spacing mY={40}>
            <Typography
                type="body"
                content={
                    <code style={{ fontSize: '12px' }}>
                        4ALBFTLBcv68zhmy8vvdTdjLZ2bisn5RPcM8KF6hDWGhj7
                        <br />
                        f37dfqwzGCqq1Vug13vmBkxoQARfNnrbNEcqsj
                        <br />
                        ZMTJSSkB46V
                    </code>
                }
                color="lightGrey"
                textAlign="center"
            />
        </Spacing>
        <Spacing mY={40}>
            <Typography
                type="body"
                content={
                    <img
                        src={monero}
                        alt="monero"
                        style={{ height: '100px' }}
                    />
                }
                color="lightGrey"
                textAlign="center"
            />
        </Spacing>
        <Spacing mY={40}>
            <Typography
                type="body"
                content={
                    <>
                        BrittonsBashRC at <code>brittonsbash.com</code>
                    </>
                }
                color="lightGrey"
                textAlign="center"
            />
            <Typography
                type="body"
                content={<>&#169; Lewis Britton 2020&mdash;2023</>}
                color="lightGrey"
                textAlign="center"
            />
        </Spacing>
    </footer>
)
