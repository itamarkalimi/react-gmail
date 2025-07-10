const { useState, useEffect, Fragment } = React
import MailPreview from '../cmps/MailPreview.jsx'
import { About } from './pages/About.jsx'
import { mailService } from "../services/mail.service.js"
import SendMail from '../cmps/SendMail.jsx'
// DOM:
// list of pre mail

// problem:
// do i get an array - { mails }

function MailList({ mailsList, isReadRedioCheck , isUnReadRedioCheck,countRead, countUnRead, onCountRead, onUnCountRead, onRemoveMail}) {
    
    const [isAddMail, setIsNewMail] = useState(false)
    // task:
    // analyze the data
    // paramter - mailId
    // delete data from local

    // problem: what do i get? what is the data?
    // 
    function onAddMail() {
        // algorithem:
        // get data from form
        // render component in a new
        // move to a new page

        // problem-algorithem:
        // update state data
        // render component accourding to data model state
        
        setIsNewMail(true)
    }

    // algorithem:
    // boolean state
    // import component
    // 



    return (
        <div>
            {mailsList ? <ul className="mail-list container">
                {mailsList.map(mail =>
                    <li key={mail.id}>
                        <MailPreview  
                        isReadRedioCheck={isReadRedioCheck}
                        isUnReadRedioCheck={isUnReadRedioCheck}
                        mail={mail} 
                        onCountRead={onCountRead}
                        onUnCountRead={onUnCountRead}
                         />
                         <span><button onClick={() => onRemoveMail(mail.id)} >
                            Remove
                        </button></span>
                    </li>
                )}
            </ul> : `no emails`}
            <p>
                Read email: {countRead}
            </p>
            <p>
                unread email: {countUnRead}
            </p>
            <p>
                <button onClick={() => onAddMail()} >
                            Create mail
                        </button>
            </p>
            <p>
             {isAddMail && <SendMail />}
            </p>
        </div>
    )
}

export default MailList
