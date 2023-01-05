import {Button, Input } from './';
import '../../css/components/selectbox.css';

const InputBox = ({ top }) => {
    return (
        <div className = 'select-box p-abs p-center three'>
            <div className = 'box-top flex-row'>
                <div className = 'back-icon'>
                    <i className = 'bi bi-arrow-left-short'></i>
                </div>
                <h5>{top}</h5>
            </div>
            <div className = 'search flex-row'>
                <Input type='text' name='filter_value' placeholder='Type your value here..' />
            </div>
            <Button name='Done' />
        </div>
    );
}

export default InputBox;