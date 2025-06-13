
import './footer.css'


function Footer() {
    return (
        <>
            <div className="footer container">
                <div className="row">
                    <div className="footerContent col-12 col-lg-8 d-flex justify-content-around border-end">
                        <div className="about  d-flex flex-column">
                            <h2>ABOUT</h2>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">connect us</a>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">about us</a>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">careers</a>
                        </div>
                        <div className="help d-flex flex-column">
                            <h2>HELP</h2>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">connect us</a>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">about us</a>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">careers</a>
                        </div>
                        <div className="social me-lg-5 m-0 d-flex flex-column">
                            <h2>SOCIAL</h2>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">facebook</a>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">instegram</a>
                            <a href="https://nfcwaves.netlify.app/" className="p text-white">linkedin</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                    <p>How can I contact support?</p>
                    <p>You can contact our support team via email at support <a className="text-primary" href="mail:wavesnfc@gmail.com">wavesnfc@gmail.com</a> or by phone at <a href="tel:01157070765" className='text-primary'>+201157070765</a></p>
                       <p> <span>E-mail : </span> <a className="text-primary" href="mail:wavesnfc@gmail.com">wavesnfc@gmail.com</a> </p>
                       <p> <span>address : </span> <a className="text-primary" href="https://maps.app.goo.gl/7Lb3N9vvmbtsM4ye8">Ihannasia Bani-suif</a> </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;