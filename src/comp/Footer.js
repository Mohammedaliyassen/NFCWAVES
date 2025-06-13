
import './footer.css'


function Footer() {
    return (
        <>
            <div className="footer container">
                <div className="row">
                    <div className="footerContent col-12 col-lg-8 d-flex justify-content-around border-end">
                        <div className="about ">
                            <h2>ABOUT</h2>
                            <p>connect us</p>
                            <p>about us</p>
                            <p>careers</p>
                        </div>
                        <div className="help">
                            <h2>HELP</h2>
                            <p>connect us</p>
                            <p>about us</p>
                            <p>careers</p>
                        </div>
                        <div className="social me-lg-5 m-0">
                            <h2>SOCIAL</h2>
                            <p>facebook</p>
                            <p>instegram</p>
                            <p>linkedin</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                       <p> <span>E-mail : </span> <a className="text-white" href="mail:wavesnfc@gmail.com">wavesnfc@gmail.com</a> </p>
                       <p> <span>address : </span> <a className="text-white" href="mail:wavesnfc@gmail.com">Ihannasia Bani-suif</a> </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;