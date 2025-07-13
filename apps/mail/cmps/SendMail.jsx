

// no comp need
// data from props
const { useState, useEffect, Fragment } = React
import { mailService } from "../services/mail.service.js"

function SendMail() {

  // {isReadRedioCheck ? onIsReadRedioCheck() : onUnReadRedioCheck()}
  // what data i need - 

  // problem:
  // check the data that i need to put in mail object
  // do the form inputs
  // input that get

  // data modal
    const [createMail,setCreateMail] = useState(mailService.createMail())
    
    useEffect(() => {
  console.log('Updated createMail:', createMail)
}, [createMail])
    // get data from form
    // problem:
    // how to get the data from from?
    function getMailData(event) {
    event.preventDefault()
    

    const form = event.target
    const subject = form.subject.value
    const body = form.body.value

    console.log("subject:", subject)
    console.log("body:", body)

    // Update the mail object
    setCreateMail(prevMail => ({
      ...prevMail,
      subject: subject,
      body: body
    }))
    console.log('createMail', createMail)

    // Optionally clear form after sending
    // form.reset()
  }

    

  return (
        <div className="mail-comp">
          send mail

          <form onSubmit={getMailData}>
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Enter your email" />
            <label>Body</label>
            <textarea class="body" name="body" rows="4" cols="50">

            </textarea>
            <button type="submit">Send mail</button>
          </form>
        </div>
    )

    }


export default SendMail