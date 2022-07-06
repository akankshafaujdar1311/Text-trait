import React,{useState} from 'react';
export default function Textform(props){
    const handleClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handlesClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handlespacesClick= ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Spaces has been removed","success");
    }

    const handlescopyClick= ()=>{
        let text=document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(" Copied","success");
    }
    const handlesclearClick= ()=>{
        let newText='';
        setText(newText);
        props.showAlert("text has been cleared","success");
    }


    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const[text,setText]=useState('');
    //text="new text";//wrong way to change the state
    //setText("Akanksha!!");//correct way to change the state
    return(
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className='my-2'>{props.heading}</h1>
<div class="mb-3">
  <label for="mybox" className="form-label"></label>
  <textarea  className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'black':'white'}} id="mybox" rows="8">
        </textarea>
</div>
<button  disabled= {text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClick}>ConvertToUpperCase</button>
<button disabled= {text.length===0} className='btn btn-primary mx-4 my-1' onClick={handlesClick}>ConvertToLoweCase</button>
<button  disabled= {text.length===0}className='btn btn-primary mx-4 my-1' onClick={handlescopyClick}>Copy Text</button>
<button  disabled= {text.length===0}className='btn btn-primary mx-4 my-1' onClick={handlespacesClick}>Remove Spaces</button>
<button  disabled= {text.length===0}className='btn btn-primary ' onClick={handlesclearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text Summary</h1>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
<p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
 </>
    );
}