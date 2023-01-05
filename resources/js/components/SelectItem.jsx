
import '../../css/components/selectitem.css';


const SelectItem = ({ name, value, icon = 'bi bi-intersect' }) => {
    return (
        <div className="select-item flex-row flex-between">
            <div className = 'flex-row'>
                <div className = 'icon'>
                    <i className = {icon}></i>
                </div>
                <div className = 'item-text'>{name}</div>
            </div>

            <div className='value'>{value}</div>
        </div>
    );

}

export default SelectItem;