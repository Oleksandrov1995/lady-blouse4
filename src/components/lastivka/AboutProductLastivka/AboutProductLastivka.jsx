import './AboutProductLastivka.css'

export const AboutProductLastivka = () => {
  return (
    <section className='aboutProduct'>
      <ul className='aboutProduct-list'>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../../Images/lastivka/aboutProduct1Lastivka.jpg')}alt="Тканина" />
          <h4 className='aboutProduct-listTitle'>Тканина</h4>
          <p className='aboutProduct-listText'>Сорочка м'яка та комфортно сидить на тілі та дозволяє шкірі дихати, а завдяки доданому поліестеру робить сорочку довговічною та стійкою до зминання, структура тканини дозволяє сорочці гарно сидіти на фігурі створюючи гармонічний вигляд.</p>
        </li>
        <li className='aboutProduct-item'>
          <img className='about-img' src={require('../../../Images/lastivka/aboutProduct2Lastivka.jpg')} alt="Манжети" />
          <h4 className='aboutProduct-listTitle'>Манжети</h4>
          <p className='aboutProduct-listText'>Як і комірці, укріплені флізеліном, проглажені та добре тримають форму, мають розріз для зручності вдягання, трохи подовжені, гарно підкреслюють красу та витонченість кисті руки.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../../Images/lastivka/aboutProduct3Lastivka.jpg')} alt="Лекала" />
          <h4 className='aboutProduct-listTitle'>Лекала</h4>
          <p className='aboutProduct-listText'>Продумана конструкція виробу та розмірів задля зручності на будь яких параметрах та стильного силуету.</p>
        </li>
        <li className='aboutProduct-item '>
          <img className='about-img' src={require('../../../Images/lastivka/aboutProduct4Lastivka.jpg')}alt="Комірець" />
          <h4 className='aboutProduct-listTitle'>Комірець</h4>
          <p className='aboutProduct-listText'>Добре укріплені та проглажені, та при цьому не втрачають м'якості і комфорту а завдяки супер софту гладенькі й приємні до шкіри. Також їх можна перегладити і змінити форму.</p>
        </li>
        <li className='aboutProduct-item item-color'>
          <img className='about-img' src={require('../../../Images/lastivka/aboutProduct5Lastivka.jpg')} alt="Ґудзики" />
          <h4 className='aboutProduct-listTitle'>Ґудзики</h4>
          <p className='aboutProduct-listText'>Ґудзики що розташовані позаду роблять сорочку оригінальною та зручною в підборі розміру, завдяки їм Ви легко зможете регулювати простір для комфорту, вигляду та відчуття свободи при носінні.</p>
        </li>
      
      </ul>
    </section>
  );
};
