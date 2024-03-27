import './ProposalLastivka.css';
import { Link } from 'react-scroll';
import CountTimeDown from "../../CountTimeDown/CountTimeDown";



export const ProposalLastivka = () => {
  return (
    <section className="proposal-section">
      
      <ul className="proposal-list">
        <li className="proposal-item">
          <img className='proposal-img'
            src={require('../../../Images/lastivka/proposal1Lastivka.jpg')}
            alt="Дівчина в жилетці"
          />
          <p className="proposal-item-text">Легка в підборі розміру завдяки своєму вільному та комфортному фасону</p>
        </li>
        <li className="proposal-item">
          {' '}
          <img className='proposal-img'
            src={require('../../../Images/lastivka/proposal2Lastivka.jpg')}
            alt="Жилетка на вішаку"
          />
          <p className="proposal-item-text">Тканина що приємно сидить на тілі та не просвічується</p>
        </li>
        <li className="proposal-item">
          {' '}
          <img className='proposal-img'
            src={require('../../../Images/lastivka/proposal3Lastivka.jpg')}
            alt="Дівчина в жилетці"
          />
          <p className="proposal-item-text">Якісно продумані деталі для зручності та гарного вигляду</p>
        </li>
      </ul>
      <div className="proposal-allPrice">
        <img
          src={require('../../../Images/lastivka/prices1Lastivka.png')}
          alt="Шаблон ціни тижня"
        />
        {/* <span className="proposal-price price-text">970 ГРН</span>
        <span className="proposal-todayPrice price-text">679 ГРН</span> */}
      </div>
      <h3 className='proposal-text'>Пропозиція діє ще:</h3>
      <CountTimeDown/>
      <button type='button' className='proposal-button'> <Link
      
            to="chooseColor"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Обрати колір
          </Link></button>
      <p className='proposal-text'>Залишилося <span style={{ background: '#ff671e' }}>11</span> штук по акції. Встигніть замовити свій колір!</p>
    </section>
  );
};
