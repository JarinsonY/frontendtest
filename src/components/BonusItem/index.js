import './BonusItem.css'

 const BonusItem = ({title, img}) => {
    return (
        <div className="bonusItem">
            <img src={img} alt={`${title}-img`} />
            <span className="bonusItem-title">{title}</span>
        </div>
    )
}

export default BonusItem;