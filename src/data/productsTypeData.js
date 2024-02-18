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
  // {
  //   id: 'practicalMidi',
  //   imageSrc: require('../Images/products/practicalMidi/fiolet.jpg'),
  //   type: 'Практичний Міді',
  //   price: 1980,
  //   todayPrice: 1386,
  //   discount: 30,
  //   aboutTitle:'Демісезонний пуффер середньої довжини з двома кишенями на застібках, подовженими трикотажними манжетами та високою горловиною стійка',
  //   aboutText: (<div><p>- Наповнювач: аеропух; </p>
  //   <p>- Матеріал: матова плащівка Gloria стійка до бруду, вологи та затирання;</p>
  //   <p>- Підкладка: міцна та гладенька саржа;</p>
  //   <p>- Висока горловина стійка відповідає трендам, захищає від холоду та додає комфорту;</p>
  //   <p>- М'які та трішки подовжені манжети.</p></div>),
    
     
    
   
  //   colors: ['#a78ef3', '#f6e3e9', '#9bf8ff', '#1b1517', '#58b4a9', '#dfe7fe'],
  //   colorsImg: [
  //     {
  //       id: 'pmBezevy',
  //       img: require('../Images/products/practicalMidi/bezevy.jpg'),
  //       colorName: 'Бежевий',
  //     },
  //     {
  //       id: 'pmBiryzovy',
  //       img: require('../Images/products/practicalMidi/biryzovy.jpg'),
  //       colorName: 'Бірюзовий',
  //     },
  //     {
  //       id: 'pmBlack',
  //       img: require('../Images/products/practicalMidi/black.jpg'),
  //       colorName: 'Чорний',
  //     },
  //     {
  //       id: 'pmFiolet',
  //       img: require('../Images/products/practicalMidi/fiolet.jpg'),
  //       colorName: 'Фіолетовий',
  //     },
  //     {
  //       id: 'pmGreen',
  //       img: require('../Images/products/practicalMidi/green.jpg'),
  //       colorName: 'Зелений',
  //     },
  //     {
  //       id: 'pmWhite',
  //       img: require('../Images/products/practicalMidi/white.jpg'),
  //       colorName: 'Білий',
  //     },
  //   ],
  //   sizes:["42-46/73","48-50/74"],
  //   sizeTable:(<div><table className='productSize-table'>
  //   <thead>
  //     <tr>
  //       <th>Заміри</th>
  //       <th>Розмір 42-46</th>
  //       <th>Розмір 48-50</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td>Ваш ОГ, см</td>
  //       <td>88-106</td>
  //       <td>104-122</td>
  //     </tr>
  //     <tr>
  //       <td>Напів ОГ виробу, см</td>
  //       <td>65</td>
  //       <td>69</td>
  //     </tr>
  //     <tr>
  //       <td>Довжина, см</td>
  //       <td>73</td>
  //       <td>74</td>
  //     </tr>
  //     <tr>
  //       <td>Рукав, см</td>
  //       <td>78</td>
  //       <td>78</td>
  //     </tr>
  //     <tr>
  //       <td>Манжет, см</td>
  //       <td>9</td>
  //       <td>9</td>
  //     </tr>
  //   </tbody>
  // </table></div>),
  // },
  // {
  //   id: 'warmMaxi',
  //   imageSrc: require('../Images/products/warmMaxi/pink.jpeg'),
  //   type: 'Теплий Максі',
  //   price: 3989,
  //   todayPrice: 2792,
  //   discount: 30,
  //   aboutTitle:'Стильний, якісний та комфортний великий пуффер в двох варіантах довжини',
  //   aboutText:(<div><p>- 120 см та 100 см (обирайте довжину при виборі розміру);</p>
  //   <p>- Наповнювач: набивний аеропух;</p>
  //   <p>- Плащівка матова та стійка до бруду і вологи ;</p>
  //   <p>- Підкладка міцна та гладенька саржа;</p>
  //   <p>- Великий відстібний капюшон що заховає від неочікуваного дощу мінливої погоди🥰;</p>
  //   <p>- М'які та теплі манжети завдяки яким можна регулювати довжину рукава.</p></div>),
  //   colors: [
  //     '#ee2164',
  //     '#c1ae9f',
  //     '#5accd7',
  //     '#03030f',
  //     '#baa3f1',
  //     '#104e59',
  //     '#a2cb2d',
  //     '#c2d1ce',
  //     '#faf9ff',
  //     '#fcf823',
  //   ],
  //   colorsImg: [
  //     {
  //       id: 'wmBezevy',
  //       img: require('../Images/products/warmMaxi/bezevy.jpeg'),
  //       colorName: 'Бежевий',
  //     },
  //     {
  //       id: 'wmBiryzovy',
  //       img: require('../Images/products/warmMaxi/biryzovy.jpeg'),
  //       colorName: 'Бірюзовий',
  //     },
  //     {
  //       id: 'wmBlack',
  //       img: require('../Images/products/warmMaxi/black.jpeg'),
  //       colorName: 'Чорний',
  //     },
  //     {
  //       id: 'wmFiolet',
  //       img: require('../Images/products/warmMaxi/fiolet.jpeg'),
  //       colorName: 'Фіолетовий',
  //     },
  //     {
  //       id: 'wmGreen',
  //       img: require('../Images/products/warmMaxi/green.jpeg'),
  //       colorName: 'Зелений',
  //     },
  //     {
  //       id: 'wmLaym',
  //       img: require('../Images/products/warmMaxi/laym.jpeg'),
  //       colorName: 'Лаймовий',
  //     },
  //     {
  //       id: 'wmMint',
  //       img: require('../Images/products/warmMaxi/mint.jpeg'),
  //       colorName: 'М`ятний',
  //     },
  //     {
  //       id: 'wmPink',
  //       img: require('../Images/products/warmMaxi/pink.jpeg'),
  //       colorName: 'Рожевий',
  //     },
  //     {
  //       id: 'wmWhite',
  //       img: require('../Images/products/warmMaxi/white.jpeg'),
  //       colorName: 'Білий',
  //     },
  //     {
  //       id: 'wmYellow',
  //       img: require('../Images/products/warmMaxi/yellow.jpeg'),
  //       colorName: 'Жовтий',
  //     },
  //   ],
  //   sizes:["42-46/100","42-46/120","48-50/100","48-50/120","52-54/100","52-54/120"],
  //   sizeTable:(<div> <table className='productSize-table'>
  //   <thead>
  //     <tr>
  //       <th>Розмір</th>
  //       <th>Обхват грудей, см</th>
  //       <th>Довжина, см</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td>42-46</td>
  //       <td>88-108</td>
  //       <td>100\120</td>
  //     </tr>
  //     <tr>
  //       <td>48-50</td>
  //       <td>106-116</td>
  //       <td>100\120</td>
  //     </tr>
  //     <tr>
  //       <td>52-54</td>
  //       <td>114-124</td>
  //       <td>100\120</td>
  //     </tr>
  //   </tbody>
  // </table>
  // <p>*  Розмір 52-54 доступний під замовлення з доплатою 210 грн, термін виробництва 5 робочих днів, потім доставка 1-3 дні. Також можете залишити заявку і уточнити наявність розміру.</p></div>),
  // },
];
