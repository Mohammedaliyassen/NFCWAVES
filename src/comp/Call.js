
import phone from '../imgs/phone-1.png'


function Call(props) {
    const { telNo, editMode = false, editData, func } = props
    return (
        <>
            {editMode ?
                <span className="call" id='whatsapp' >
                    <img src={phone} alt='whatsapp' />
                    <input
                        type="tel"
                        name="phone"
                        className="callInput"
                        placeholder="رقم الهاتف الأساسي"
                        value={editData}
                        onChange={func}
                    />
                </span>
                :
                <a href={`tel:${telNo}`}>
                    <span className="call" id='whatsapp'>
                        <img src={phone} alt='whatsapp' />
                        <p> call : <a href={`tel:${telNo}`}>{telNo}</a></p>
                    </span>
                </a>
            }
        </>
    );
}

export default Call;