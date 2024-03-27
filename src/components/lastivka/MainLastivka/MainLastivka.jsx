import "./MainLastivka.css"
import React from 'react';
export const MainLastivka = ()=>{
    return(
        <section className="main-containerLastivka">
            <img className="main-discountLastivka" src={require('../../../Images/discount30.png')}  alt="discount" />
            <div className="main-titlesLastivka">
<h1 className="main-titleLastivka">Оригінальна та зручна оверсайз сорочка в усіх розмірах та трендових кольорах</h1>
<h4 className="Lastivka">НОВИЙ ТА ЗРУЧНИЙ ТРЕНД</h4>
<ul className="main-benefitsLastivka">
<li><h3>Відправка протягом 1-3 днів </h3></li>
<li><h3>Оплата при отриманні</h3></li>
<li><h3>Безпосередній контроль якості</h3></li>
</ul>

</div>
<img src={require('../../../Images/logo2.png')} alt="Logo" className="main-logoLastivka" />
        </section>
    )
}