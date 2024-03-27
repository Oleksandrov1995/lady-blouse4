import './ProductSizeLastivka.css';

export const ProductSizeLastivka = () => {
  return (
    <section id="productSize" className='productSize'>
      <h2>Розмірна сітка та заміри виробу</h2>
      <table className='productSize-table'>
  <thead>
    <tr>
      <th>Розмір</th>
      <th>42-44</th>
      <th>46-48</th>
      <th>50-52</th>
      <th>54-56</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>Обхват грудей виробу, см</td>
      <td>110</td>
      <td>118</td>
      <td>126</td>
      <td>134</td>
    </tr>
    <tr>
    <td>Ваш обхват грудей, см</td>
      <td>90-105</td>
      <td>98-113</td>
      <td>108-121</td>
      <td>118-129</td>
    </tr>
    <tr>
    <td>Довжина по переду, см</td>
      <td>68</td>
      <td>70</td>
      <td>72</td>
      <td>74</td>
    </tr>
    <tr>
    <td>Довжина по спині, см</td>
      <td>78</td>
      <td>80</td>
      <td>82</td>
      <td>82</td>
    </tr>
  
  </tbody>
</table>

      <p className='productSizeText'><span className='productSize-bolt'>*</span>  Розміри можна обирати за параметрами та вподобаннями для створення більш вільного або менш вільного силуету.</p>
      <img className='line' src={require('../../../Images/line.png')} alt="line" />
    </section>
  );
};
