import React,{useState} from 'react'
import './Questions.css'

function Questions({title,info}) {
    const [showInfo, setshowInfo] = useState(false)
    return (
        <div>
                 <div className="faqs">
                              <article>
                                 <div className="question">
                                    <header>
                                  <h2>{title}</h2>
                                  <button onClick={()=>setshowInfo(!showInfo)}>
                                      {showInfo? '-' : '+'}
                                  </button>
                                    </header>
                                   
                            
                            {
                              //Display Paragraph only when showInfo is true
                              showInfo &&  <p> {info} </p>
                            }

                        
                                    </div>
                              </article>
                        </div>
        </div>
    )
}

export default Questions
