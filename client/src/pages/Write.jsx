import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('')

  console.log(value)

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        
        
        </div>
      </div>
     <div className="menu">
      <div className="item1">
        <h1>Publish</h1>
        <span>
          <b>Status:</b> Draft
        </span>

        <span>
          <b>Visibility:</b> Public
        </span>
        <input style={{display:"none"}} type="file" id='file'/>
        <label className="file" htmlFor='file'> Upload Image</label>
        <div className="buttons">
          <button>Draft</button>
          <button>Update</button>
        </div>
         </div>
      <div className="item2">
        <h1>Category</h1>
        <div className="cat">
        <input type='radio' name='cat' value="art" id='art'/>
        <label htmlFor='art'>Art</label>
                </div>
        <div className="cat">
        <input type='radio' name='cat' value="science" id='science'/>
        <label htmlFor='science'>Science</label> </div>
        <div className="cat">
        <input type='radio' name='cat' value="technology" id='technology'/>
        <label htmlFor='technology'>Technology</label>  </div>

        <div className="cat">
        <input type='radio' name='cat' value="fashion" id='fashion'/>
        <label htmlFor='fashion'>Fashion</label>
        </div>
        <div className="cat">
        <input type='radio' name='cat' value="lifestyle" id='lifestyle'/>
        <label htmlFor='lifestyle'>Lifestyle</label>
        </div>
        <div className="cat">
        <input type='radio' name='cat' value="Agriculture" id='Agriculture'/>
        <label htmlFor='agriculture'>Agriculture</label>
        </div>
        <div className="cat">
        <input type='radio' name='cat' value="Design" id='Design'/>
        <label htmlFor='design'>Design</label>
        </div>
        <div className="cat">
        <input type='radio' name='cat' value="food" id='food'/>
        <label htmlFor='food'>Food</label>          
          </div>   
        
        
      </div>
     </div>
    </div>
  )
}

export default Write