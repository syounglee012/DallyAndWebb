import Link from "next/link"
export default function Footer() {


return (
    <>
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container__left">
                    <div className="footer__container__left__logo">

                    </div>
                    <div className="footer__container__left__address">
                        <p>1234 Main Street</p>
                        <p>Anytown, USA 12345</p>
                        <p>Phone: 555-555-5555</p>
                        <p>Fax: 555-555-5555</p>
                    </div>
                </div>
                <div className="footer__container__right">
                    <div className="footer__container__right__links">
                        <ul>
                            <li><Link href="/home">Home</Link></li>

                            <li><Link href="/dally">Dally</Link></li>

                            <li><Link href="/webb">Webb</Link></li>
                        
                            <li><Link href="/brewington">Brewington</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
)
}
