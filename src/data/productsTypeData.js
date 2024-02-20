export const productsTypeData = [
  {
    id: 'classic',
    imageSrc: require('../Images/products/classic/classicBlack.jpg'),
    type: 'Класік',
    price: 542,
    todayPrice: 589,
    discount: 30,
    aboutTitle:'Найактуальніша модель серед прихильників класичного стилю. Прямий крій сорочки відповідає сучасним трендам і спрощує підбір розміру, оскільки добре виглядає на всіх типах фігури. Ґудзики приховані під планкою для надання аккуратності та лаконічності до образу.',
    aboutText: (<div><p>- Тканина: супер софт; </p>
    <p>- Прямий крій; </p>
    <p>- Made in Kharkiv. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
      '#090003',
      '#b2d1e4',
      '#374e6e',
      '#533185',
      '#ffffff',
    ],
    colorsImg: [
      {
        id: 'classicWhite',
        img: require('../Images/products/classic/classicWhite.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'classicBlack',
        img: require('../Images/products/classic/classicBlack.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'classicBlue',
        img: require('../Images/products/classic/classicBlue.jpg'),
        colorName: 'Блакитний',
      },
      {
        id: 'classicDarkBlue',
        img: require('../Images/products/classic/classicDarkBlue.jpg'),
        colorName: 'Темно-синій',
      },
      {
        id: 'classicFiolet',
        img: require('../Images/products/classic/classicFiolet.jpg'),
        colorName: 'Фіолетовий',
      },
        ],
    sizes:["XS","S","M","L","XL"],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
        <th>Розмірна сітка</th>
        <th>Довжина виробу</th>
        <th>Довжина рукава</th>
        <th>Обхват грудей</th>
         </tr>
    </thead>
    <tbody>
    <tr>
        <td>Розмір XS</td>
        <td>65 см</td>
        <td>57 см</td>
        <td>90 см</td>
        
      </tr>
      <tr>
        <td>Розмір S</td>
        <td>66,5 см</td>
        <td>58,5 см</td>
        <td>94 см</td>
       
      </tr>
      <tr>
        <td>Розмір M</td>
        <td>68,5 см</td>
        <td>60 см</td>
        <td>100 см</td>
        </tr>
      <tr>
        <td>Розмір L</td>
        <td>70 см</td>
        <td>61,5 см</td>
        <td>110 см</td>
      </tr>
      <tr>
        <td>Розмір XL</td>
        <td>72,5 см</td>
        <td>63 см</td>
        <td>120 см</td>
      </tr>
        </tbody>
  </table>
  <p className='productSize-textAfter'>* розміри розраховані сидіти трохи вільно</p></div>),
  },
  {
    id: 'over2',
    imageSrc: require('../Images/products/over2/ower2WhiteFront.jpg'),
    type: 'Over 2',
    price: 939,
    todayPrice: 657,
    discount: 30,
    aboutTitle:'Найелегантніша модель нашої лінійки. Може носитися як оверсайз, так і більш приталено, тому завдяки цьому може підійти під будь які типи фігури. Має дві кишені на грудях та розрізи по бокам, для зручності заправлення лише спереду та створення гарного образу. А опущена лінія плеча додасть до образу легкості та тендітності.',
    aboutText: (<div><p>- Тканина: супер софт; </p>
    <p>- Вільний крій з легким розширенням до низу; </p>
    <p>- Made in Kharkiv. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
            '#ffffff',
    ],
    colorsImg: [
      {
        id: 'ower2WhiteSide',
        img: require('../Images/products/over2/ower2WhiteSide.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'ower2WhiteFront',
        img: require('../Images/products/over2/ower2WhiteFront.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'ower2WhiteBack',
        img: require('../Images/products/over2/ower2WhiteBack.jpg'),
        colorName: 'Білий',
      },
     
        ],
    sizes:["42-44","46-48","50-52","54-56"],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
      <th>Заміри</th>
      <th>Обхват грудей виробу</th>
      <th>Ваш обхват грудей</th>
        <th>Довжина по переду</th>
        <th>Довжина по спині</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Розмір 42-44</td>
        <td>108 см</td>
        <td>88-105 см</td>
        <td>66 см</td>
        <td>72 см</td>
        
      </tr>
      <tr>
        <td>Розмір 46-48</td>
        <td>114 см</td>
        <td>106-111 см</td>
        <td>68 см</td>
        <td>74 см</td>
      </tr>
      <tr>
        <td>Розмір 50-52</td>
        <td>120 см</td>
        <td>112-118 см</td>
        <td>70 см</td>
        <td>76 см</td>
        </tr>
      <tr>
        <td>Розмір 54-56</td>
        <td>128 см</td>
        <td>117-125 см</td>
        <td>72 см</td>
        <td>76 см</td>        
      </tr>
     
        </tbody>
  </table>
  </div>),
  },
  {
    id: 'lastivka',
    imageSrc: require('../Images/products/lastivka/lastivkaBlueBack.JPG'),
    type: 'Ластівка',
    price: 970,
    todayPrice: 679,
    discount: 30,
    aboutTitle:'Найоригінальніша модель нашої лінійки. Може носитися як оверсайз, так і приталено. Позаду має подовжену спинку з розрізом на рівні стегон, для комфортного та вільного носіння без відчуття стиснення в стегнах. Має одну кишеню зліва на грудях, приспущен лінію плеча та гудзики на спинці, для регулювання довжини розрізу.',
    aboutText: (<div><p>- Тканина: супер софт; </p>
    <p>- Вільний крій з розширенням до низу; </p>
    <p>- Made in Kharkiv. </p>
    <p>Оплата: післяплатою при отриманні або повна оплата на реквізити!</p>
    <p>Доставка: Новою поштою та Укрпоштою до відділення або кур'єром до адреси!</p></div>),
    colors: [
            '#ffffff',
            '#000000',
            '#a2bbd9'
    ],
    colorsImg: [
      {
        id: 'lastivkaBlueBack',
        img: require('../Images/products/lastivka/lastivkaBlueBack.JPG'),
        colorName: 'Блакитний',
      },
      {
        id: 'lastivkaWhiteFront',
        img: require('../Images/products/lastivka/lastivkaWhiteFront.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'ower2WhiteBack',
        img: require('../Images/products/lastivka/lastivkaBlackSide.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'lastivkaBlueFront',
        img: require('../Images/products/lastivka/lastivkaBlueFront.JPG'),
        colorName: 'Блакитний',
      },
      {
        id: 'lastivkaWhiteBack',
        img: require('../Images/products/lastivka/lastivkaWhiteBack.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lastivkaBlackFront',
        img: require('../Images/products/lastivka/lastivkaBlackFront.jpg'),
        colorName: 'Чорний',
      },
      {
        id: 'lastivkaBlue',
        img: require('../Images/products/lastivka/lastivkaBlue.JPG'),
        colorName: 'Блакитний',
      },
      {
        id: 'lastivkaWhiteFront2',
        img: require('../Images/products/lastivka/lastivkaWhiteFront2.jpg'),
        colorName: 'Білий',
      },
      {
        id: 'lastivkaBlackFront2',
        img: require('../Images/products/lastivka/lastivkaBlackFront2.jpg'),
        colorName: 'Чорний',
      },
     
        ],
    sizes:["42-44","46-48","50-52","54-56"],
    sizeTable:(<div> <table className='productSize-table'>
    <thead>
      <tr>
      <th>Заміри</th>
      <th>Обхват грудей виробу</th>
      <th>Ваш обхват грудей</th>
        <th>Довжина по переду</th>
        <th>Довжина по спині</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <td>Розмір 42-44</td>
        <td>110 см</td>
        <td>88-108 см</td>
        <td>68 см</td>
        <td>78 см</td>
        
      </tr>
      <tr>
        <td>Розмір 46-48</td>
        <td>118 см</td>
        <td>106-116 см</td>
        <td>70 см</td>
        <td>80 см</td>
      </tr>
      <tr>
        <td>Розмір 50-52</td>
        <td>126 см</td>
        <td>114-124 см</td>
        <td>72 см</td>
        <td>82 см</td>
        </tr>
      <tr>
        <td>Розмір 54-56</td>
        <td>134 см</td>
        <td>122-130 см</td>
        <td>74 см</td>
        <td>82 см</td>        
      </tr>
     
        </tbody>
  </table>
  </div>),
  },
 
];
