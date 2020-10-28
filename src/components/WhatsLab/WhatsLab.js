import React from 'react'
import iconSearch from '../../img/search.svg'
import iconOptions from '../../img/dot.svg'
import styled from 'styled-components'
import imgAvatar from '../../img/avatar.png'

const AllDivs = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #009688 20%, #dddbd1 0%);
`

const PageHeader = styled.div`
    width: 60%;
    height: 15vh;
    margin-top: 20px;
    display: flex;
    align-items: center;
    background-color: orange;
    border: 1px solid grey;
    border-radius: 8px;
    position: relative;
`
const UserPhoto = styled.img`
    border-radius: 50%;
    border: 1px solid #666;
    width: auto;
    height: 70%;
    margin-left: 25px;
`
const InputName = styled.input`
    border-radius: 10%;
    border-style: none;
    width: 300px;
    height: 20%;
    background-color: orange;
    margin-left: 25px;
    color: white;
    font-size: 20px;

`
const ImgSearch = styled.img`
    display: flex;
    right: 65px;
    position: absolute;
    width: auto;
    height: 25%;
`
const ImgOptions = styled.img`
    display: flex;
    right: 25px;
    position: absolute;
    margin-left: 20px;
    width: auto;
    height: 25%;
`

const PageMain = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 60%;
    height: 70vh;
    border: 1px solid grey;
    background-image: url(https://www.papeiseparede.com.br/3257-thickbox_default/papel-de-parede-whatsapp-branco-e-azul.jpg);
    border-radius: 8px;
`

const MessageBox = styled.div`
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 10px;
    font-size: 25px;
`

const PageFooter = styled.div`
    width: 60%;    
    height: 15vh;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    background-color: #009688;
    border: 1px solid grey;
    border-radius: 8px;
`

const InputMessage = styled.input`
    border: 1px solid whitesmoke;
    width: 80%;
    height: 80%;
    background-color: #009688;
    margin-left: 25px;
    color: white;
    font-size: 20px;
    border-radius: 8px;
`
const SendButton = styled.button`
    width: 150px;
    height: 50px;
    background-color: grey;
    margin-left: 25px;
    color: white;
    font-size: 20px;
    border: 1px solid #666;
    border-radius: 8px;
`



class WhatsLab extends React.Component {
    
    state = {
        messages: [],
        userName: "",
        message: ""
    }

    addMessage = () => {
        const newMessage = {
            userName: this.state.userName,
            message: this.state.message
        }

        const newMessages = [...this.state.messages, newMessage]

        this.setState({ messages: newMessages})
    }

    
    changeUserName = (event) => {
        this.setState({userName: event.target.value});
    }

    changeMessage = (event) => {
        this.setState({message: event.target.value});
    }

    clickEnter = (event) => {
        if (event.keyCode === 13) {
            this.addMessage()
        }
    }
    
    render() {
        
        const messagesList = this.state.messages.map((msg) => {
            return (
                <p>
                    {msg.userName}: {msg.message}
                </p>
            )
            })
        
        return <AllDivs>
            <PageHeader>
                <UserPhoto src={imgAvatar} alt='User Picture'/>
                <InputName
                placeholder={"Digite o usuário"}
                value={this.state.userName}
                onChange={this.changeUserName}
                />
                <ImgSearch src={iconSearch} alt='Icon Search'/>
                <ImgOptions src={iconOptions} alt='Icon Options'/>
            </PageHeader> 
            <PageMain>
               <p>
                   <MessageBox>
                       {messagesList}                      
                   </MessageBox>
               </p>
            </PageMain>
            <PageFooter>
                <InputMessage 
                placeholder={'Escreva sua mensagem'}
                value={this.state.message}
                onChange={this.changeMessage}
                onKeyDown={this.clickEnter}
                />

                <SendButton onClick={this.addMessage}>ENVIAR</SendButton>
            </PageFooter>
        </AllDivs>
    }
}

export default WhatsLab