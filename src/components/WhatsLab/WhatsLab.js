import React from 'react'
import './WhatsLab.css'
import iconSearch from '../../img/search.svg'
import iconOptions from '../../img/dot.svg'


class WhatsLab extends React.Component {
    
    state = {
        message: "",
        userName: ""
    }


    changeUserName = (event) => {
        this.setState({userName: event.target.value});
        
    }

    changeMessage = (event) => {
        this.setState({message: event.target.value});
        
    }
    
    render() {
        
        
        return <div className={'whatslab-container'}>
            <div className={'page-header'}>
                <img className={'user-photo'} src={this.props.userPicture} alt='User Picture'/>
                <input 
                placeholder={"Digite o usuário"}
                value={this.state.userName}
                onChange={this.changeUserName}
                />
                <img className={'icon-search'} src={iconSearch} alt='Icon Search'/>
                <img className={'icon-options'} src={iconOptions} alt='Icon Options'/>
            </div>
            <div className={"page-main"}>
                <p>{this.state.userName}{this.state.message}</p>
            </div>
            <div className={"page-footer"}>
                <input 
                placeholder={'Escreva sua mensagem'}
                value={this.state.message}
                onChange={this.changeMessage}
                />
                <button>Enviar</button>
            </div>
        </div>
    }
}

export default WhatsLab