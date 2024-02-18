import './AboutProduct.css'

export const AboutProduct = () => {
  return (
    <section className='aboutProduct'>
      <ul className='aboutProduct-list'>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct1.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Лекала</h4>
          <p className='aboutProduct-listText'>Продумана конструкція виробів та розмірів за для зручності на будь яких парамтрех та стильного силуету .</p>
        </li>
        <li className='aboutProduct-item'>
          <img className='about-img' src={require('../../Images/aboutProduct2.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Тканина</h4>
          <p className='aboutProduct-listText'>М'який, шовковистий на дотик, достатньо стійкий до зминання за рахунок поліестеру та еластану супер софт який добре тримає температуру та при цьому дихає завдяки бавовні в складі.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct3.jpg')} alt="Жилетки на вішаку" />
          <h4 className='aboutProduct-listTitle'>Комірці</h4>
          <p className='aboutProduct-listText'>Добре укріплені та проглажені, та при цьому не втрачають м'якості і комфорту а завдяки супер софту гладенькі й приємні до шкіри. Також їх можна перегладити і змінити форму.</p>
        </li>
        <li className='aboutProduct-item '>
          <img className='about-img' src={require('../../Images/aboutProduct4.jpg')}alt="Жилетка на вішаку" />
          <h4 className='aboutProduct-listTitle'>Вирізи</h4>
          <p className='aboutProduct-listText'>Спроектовані так щоб виконувати не тільки оздоблювальну функцію низу кожної з сорочок а і надають свободи в стегнах.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../Images/aboutProduct5.jpg')} alt="Дівчина в жилетці" />
          <h4 className='aboutProduct-listTitle'>Манжети</h4>
          <p className='aboutProduct-listText'>Як і комірці укріплені флізеліном, проглажені, тримають форму, приємні до шкіри та гарно підкреслюють жіночність кисті руки.</p>
        </li>
       
      </ul>
    </section>
  );
};
