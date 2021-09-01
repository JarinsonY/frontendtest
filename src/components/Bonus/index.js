import BonusItem from '../BonusItem';

import Carousel from 'react-elastic-carousel';

import './Bonus.css';
// Assets
import Clock from '../../assets/images/Clock.png';
import HomeOffice from '../../assets/images/HomeOffice.png';
import Learn_Workshop from '../../assets/images/Learn_Workshop.png';
import Lunch from '../../assets/images/Lunch.png';
import Remote from '../../assets/images/Remote.png';
import Tech from '../../assets/images/Tech.png';

const Bonus = () => {
    return (
        <div id="bonus">
            <div className="bonus-title">
                <span>Entre los <strong className="bonus">beneficios</strong> que</span>
                <span><strong>ofrecemos</strong> se encuentran</span>
            </div>
            <Carrousel />
        </div>
    )
}

const dataBonus = [
    {
        img: Clock,
        title: "Flexibilidad horaria"
    },
    {
        img: HomeOffice,
        title: "Home office"
    },
    {
        img: Learn_Workshop,
        title: "Capacitaciones y workshops"
    },
    {
        img: Lunch,
        title: "Snacks, frutas y bebidas gratis"
    },
    {
        img: Remote,
        title: "Semana Remota"
    },
    {
        img: Tech,
        title: "Trabajar en últimas tecnologías"
    },
]

const Carrousel = () => {

    const breakPoints = [
        {// Small
            width: 1,
            itemsToShow: 1,
            itemsToScroll: 1
        },
        {// Medium
            width: 576,
            itemsToShow: 2,
            itemsToScroll: 2
        },
        {// Large
            width: 768,
            itemsToShow: 4,
            itemsToScroll: 2
        },
    ]

    return (
        <div className="carousel-container" >
            <Carousel breakPoints={breakPoints}>
                {dataBonus.map((item, index) => (
                    <BonusItem
                        key={`bonus#${index}`}
                        img={item.img}
                        title={item.title}
                    />
                ))}
            </Carousel>
        </div >
    )
}

export default Bonus