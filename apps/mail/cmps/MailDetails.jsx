// define task:
// component of mail
// get data from mail object - like preview
// change route 

import { mailService } from "../services/mail.service.js"
const { useState, useEffect } = React
const { useParams } = ReactRouterDOM
// algorithem :
// data model state
// get data of mail - id
// get data from mail service by id
// update data model state
// useEffect get data from load function
// print data from mail object

export function MailDetails() {
      
  const [mail, setMail] = useState(null)

  const { mailId } = useParams()
  
  

  function loadMail() {
     mailService.get(mailId)
      .then(mail => {
        console.log('mails list' ,mail)
        setMail(mail)
      }  
      )
      .catch(err => console.log('err:', err))
  }


  useEffect(() => {
    console.log('loadMails active')
    loadMail()
   }, [mailId])

   if (!mail) return <div>Loading...</div>
   return (
    <div>
      {mail.subject}
    </div>
   )
}  