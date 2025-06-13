
import phone from '../imgs/phone-1.png'


function Call() {
    return (
        <a href="tel:01157070765">
            <span className="call" id='whatsapp'>
                <img src={phone} alt='whatsapp' />
                <p> call : <a href="tel:01157070765">0111111111</a></p>
            </span>
        </a>
    );
}

export default Call;