import styles from './footer.module.scss'
import logo from '../../../media/images/logo/bash-logo.png'
import xmr from '../../../media/images/monero/xmr.svg'
import monero from '../../../media/images/monero/monero.png'
import { Grid, Spacing, Typography } from '..'
import { useScreenWidth } from '../../../scripts'

export const Footer = () => {
    const { isMobile } = useScreenWidth()

    return (
        <footer className={styles.footer}>
            <Spacing pY={60}>
                <Grid alignRows="auto auto auto auto auto" rowGap={20}>
                    <Grid rowItem={[1, 5]}>
                        <Grid
                            alignColumns="auto auto"
                            columnGap={20}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid columnItem={[1, 2]}>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ height: '35px' }}
                                />
                            </Grid>
                            <Grid columnItem={[2, 2]}>
                                <div className={styles.footerLogo}>
                                    BrittonsBashRC
                                </div>
                            </Grid>
                        </Grid>
                        <Typography
                            type="h3"
                            content={<code>brittonsbash.com</code>}
                            color="lightGrey"
                        />
                    </Grid>
                    <Grid rowItem={[2, 5]}>
                        <img src={xmr} alt="xmr" style={{ height: '15px' }} />
                        <Typography type="body" content="Monero Donations" />
                    </Grid>
                    <Grid rowItem={[3, 5]}>
                        <Typography
                            type="footnote"
                            content={
                                <code>
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
                    </Grid>
                    <Grid rowItem={[4, 5]}>
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
                    </Grid>
                    <Grid rowItem={[5, 5]}>
                        <Typography
                            type="body"
                            content={<>&#169; Lewis Britton 2020&mdash;2023</>}
                            color="lightGrey"
                            textAlign="center"
                        />
                    </Grid>
                </Grid>
            </Spacing>
        </footer>
    )
}
