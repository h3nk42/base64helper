import logo from './logoColor.webp';
import './App.css';
import { Input } from 'antd';
import {useEffect, useState} from "react";
import base64url from "base64url";
const { TextArea } = Input;

const defaultFormData = {
    title: {en: "Hello Aumionaut!", de: "Hallo Aumionauti!" },
    text: {en: "Hey weve got a message..", de: "Hey es gibt neuigkeiten.." },
    button: {en: "All right!", de: "Alles klar!" },
}

function App() {
    let [formData, setFormData] = useState(defaultFormData);
    let [output, setOutput] = useState("");

    useEffect(() => {
        calcOutput();
    })


    const handleChange = (e, formType) => {
        let newData = formData;
        switch (formType){
            case "titleEn":
                newData.title.en = e.target.value
                setFormData(newData);
                break;
            case "titleDe":
                newData.title.de = e.target.value
                setFormData(newData);
                break;
            case "textEn":
                newData.text.en = e.target.value
                setFormData(newData);
                break;
            case "textDe":
                newData.text.de = e.target.value
                setFormData(newData);
                break;
            case "buttonEn":
                newData.button.en = e.target.value
                setFormData(newData);
                break;
            case "buttonDe":
                newData.button.de = e.target.value
                setFormData(newData);
                break;
        }
        calcOutput()
    }

    const calcOutput = () => {
        setOutput(base64url.encode(JSON.stringify(formData)))
    }

  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{height:50}} />
      <header className="App-header" style={{display:'flex', flexDirection: 'column', alignItems:'center', justifyContent:'flex-start'}}>
          <img src={logo} style={{marginBottom: 50, width:250, height: 100}} className="App-logo" alt="logo" />
              <h2 style={{color:'wheat'}}> Custom Modal DeepLink Generator </h2>
          <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', flexDirection: 'row'}}>
                  <h6 style={{color:'wheat', marginRight: 10}}> Title en:</h6>
                  <TextArea cols={20} rows={4} defaultValue={defaultFormData.title.en} onChange={(e)=> {handleChange(e, 'titleEn')}}/>
              </div>
              <div style={{marginLeft:20, display:'flex', flexDirection: 'row'}}>
                  <h6 style={{color:'wheat', marginRight: 10}}> Title de:</h6>
                  <TextArea cols={20} rows={4} defaultValue={defaultFormData.title.de} onChange={(e)=> {handleChange(e, 'titleDe')}}/>
              </div>
          </div>

          <div style={{height:10}} />
          <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', flexDirection: 'row'}}>
                  <h6 style={{color:'wheat', marginRight: 10}}> Body en:</h6>
                  <TextArea cols={20} rows={4} defaultValue={defaultFormData.text.en} onChange={(e)=> {handleChange(e, 'textEn')}}/>
              </div>
              <div style={{marginLeft:20, display:'flex', flexDirection: 'row'}}>
                  <h6 style={{color:'wheat', marginRight: 10}}> Body de:</h6>
                  <TextArea cols={20} rows={4} defaultValue={defaultFormData.text.de} onChange={(e)=> {handleChange(e, 'textDe')}}/>
              </div>
          </div>
          <div style={{height:10}} />
          <div style={{display:'flex', flexDirection:'row'}}>
              <div style={{display:'flex', flexDirection: 'row'}}>
                  <h6 style={{color:'wheat', marginRight: 10}}> Button en:</h6>
                  <TextArea cols={20} rows={4} defaultValue={defaultFormData.button.en} onChange={(e)=> {handleChange(e, 'buttonEn')}}/>
              </div>
              <div style={{marginLeft:20, display:'flex', flexDirection: 'row'}}>
                  <h6 style={{color:'wheat', marginRight: 10}}> Button de:</h6>
                  <TextArea cols={20} rows={4} defaultValue={defaultFormData.button.de} onChange={(e)=> {handleChange(e, 'buttonDe')}}/>
              </div>
          </div>
          <div style={{height:10}} />
          <div style={{display:'flex', flexDirection: 'row', }}>
              <h6 style={{color:'wheat', marginRight: 10,}}>DeepLink: </h6>
              <TextArea cols={60} rows={4} value={`https://aumio.de/download/message/${output}`}/>
          </div>
      </header>
    </div>
  );
}

export default App;
