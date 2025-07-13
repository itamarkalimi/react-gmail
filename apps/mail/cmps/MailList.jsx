const { useState, useEffect, Fragment } = React
import MailPreview from '../cmps/MailPreview.jsx'
import { About } from './pages/About.jsx'
import { mailService } from "../services/mail.service.js"
import SendMail from '../cmps/SendMail.jsx'
// DOM:
// list of pre mail

// problem:
// do i get an array - { mails }

function MailList({ mailsList, isReadRedioCheck , isUnReadRedioCheck,countRead, countUnRead, onCountRead, onUnCountRead, onRemoveMail, isAddMail}) {
     

    // algorithem:
    // boolean state
    // import component
    // 



    return (
        <div className='list-container'>
            {mailsList ? <ul className="mail-list container">
                {mailsList.map(mail =>
                    <li key={mail.id}>
                        <MailPreview  
                        isReadRedioCheck={isReadRedioCheck}
                        isUnReadRedioCheck={isUnReadRedioCheck}
                        mail={mail} 
                        onCountRead={onCountRead}
                        onUnCountRead={onUnCountRead}
                        onRemoveMail={onRemoveMail}
                         />
                         
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
             
            </p>
        </div>
    )
}
export default MailList
