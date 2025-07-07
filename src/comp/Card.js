
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import user_1 from '../imgs/user-1.jpg';
import facebook from '../imgs/facebook.png';
import instagram from '../imgs/instagram.png';
import whatsapp from '../imgs/whatsapp.svg';
import Call from './Call';
import mail from '../imgs/gmail.png';
import './Card.css';
import Story from './Story';
import { getInfo } from '../store/store'; // تأكد من استيراد الـ thunk
import Lost404 from './Lost404'
import Loading from './Loading';
function Card() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo()); // استدعاء الـ thunk لجلب البيانات
  }, [dispatch]);
  const { id } = useParams();
  const data = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  console.log('Card component render'); // عرض رسالة عند إعادة تحميل المكون
  console.log('Loading:', loading); // عرض حالة التحميل في الكونسول
  console.log('Error:', error); // عرض حالة الخطأ في الكونسول
  console.log('Data:', data); // عرض البيانات في الكونسول

  if (loading) return <Loading />;
  if (error) return <p>error {error}</p>;

  const userData = data ? data.items.find(user => user.id === id) : null; // تعديل مسار البيانات

  return (
    <div className='nfcPage'>

      {userData ?
        <div className='productsSec'>
          <div className="card">
            <div className='userData'>
              <div className='imgHolder'>
                <img src={userData ? `https://waves.pockethost.io/api/files/User/${userData.id}/${userData.Avatar}` : user_1} className="card-img-top" alt="..." />
              </div>
              <h1>{userData ? userData.Name : 'User Name'}</h1>
              <h4 style={{fontSize:'large'}}>مطور ويب </h4>
              <h6 style={{fontSize:'1.25rem',lineHeight:'30px'}}>{userData ? userData.Bio : 'User Description'}</h6>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item" id='facebook'>
                <a href={userData ? userData.Facebook : '/'}><img src={facebook} alt='facebook' /></a>
              </li>
              <li className="list-group-item" id='instagram'>
                <a href={userData ? userData.Instagram : '/'}> <img src={instagram} alt='instagram' /></a>
              </li>
              <li className="list-group-item" id='whatsapp'>
                <a href={userData ? `https://wa.me/${userData.Whats}` : '/'}> <img src={whatsapp} alt='whatsapp' /></a>
              </li>
            </ul>
            <div className='stories d-flex align-items-center flex-column'>
              <Story discStory={userData.Product_1_description} linkTo={userData.Product_1_link} storyTittle={userData.Product_1_name} imgStory={`https://waves.pockethost.io/api/files/User/${userData.id}/${userData.Product_1_img}`} />
              <Story discStory={userData.Product_2_description} linkTo={userData.Product_2_link} storyTittle={userData.Product_2_name} imgStory={`https://waves.pockethost.io/api/files/User/${userData.id}/${userData.Product_2_img}`} />
              <Story discStory={userData.Product_3_description} linkTo={userData.Product_3_link} storyTittle={userData.Product_3_name} imgStory={`https://waves.pockethost.io/api/files/User/${userData.id}/${userData.Product_3_img}`} />
            </div>
            <Call />
            <span className="call gmail" id='whatsapp'>
              <img src={mail} alt='whatsapp' />
              <p>Mail: <a href={`mailto:${userData ? userData.email : 'example@gmail.com'}`}>{userData ? userData.email : 'example@gmail.com'}</a></p>
            </span>
          </div>
        </div> : <Lost404 />}

    </div>
  );
}

export default Card;


