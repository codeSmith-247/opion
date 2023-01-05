import {Input, Iconbutton, SelectItem } from './';
import '../../css/components/selectbox.css';

const SelectBox = ({top = null, options, placeholder, options_icon, active = false}) => {

    return (
        <div className = {`select-box p-abs p-center one ${active? 'active' : ''}`}>
            {
                top !== null && 

                <div className = 'box-top flex-row'>
                    <div className = 'back-icon'>
                        <i className = 'bi bi-arrow-left-short'></i>
                    </div>
                    <h5>{top}</h5>
                </div>
            }

            <div className = 'search flex-row'>
                <Input type='text' name='Search' placeholder={placeholder} />
                <Iconbutton icon='bi bi-search' />
            </div>

            {Object.keys(options).length === 0 && 
                <div style={{height: 'calc(100% - 40px)'}} className = 'flex-center flex-col'>
                    <img src = 'images/no_search_result.webp' className = 'obj-fit' style={{height: '100px', width: '100px'}}/>
                    <p style = {{fontSize: '80%'}}>No Search Result</p>
                </div>
            }

            <div style={{height: 'calc(100% - 40px)', overflowY: 'scroll'}}>
                {
                    Object.keys(options).map( option => {
                        return <SelectItem name = {option} value = {options[option]} icon = {options_icon} key = {option}/>
                    })
                }

            </div>
            

        </div>
    );
}

export default SelectBox;