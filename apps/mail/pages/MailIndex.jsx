const { useState, useEffect, Fragment } = React
import MailFilter  from '../cmps/MailFilter.jsx'
import { MailDetails } from '../cmps/MailDetails.jsx'
import MailList from '../cmps/MailList.jsx'
import { mailService } from "../services/mail.service.js"
import SendMail from '../cmps/SendMail.jsx'

function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
  const [isReadRedioCheck, setIsReadRedioCheck] = useState(false)
    const [isUnReadRedioCheck, setIsUnReadRedioCheck] = useState(false)
    const [countRead, setCountRead] = useState(0)
      const [countUnRead, setCountUnRead] = useState(0)
      
    const [isAddMail, setIsNewMail] = useState(false)
    
    function onAddMail() {
        console.log('onAddMail')
        setIsNewMail(true)
        console.log('isAddMail', isAddMail)
    }
    console.log('isAddMail 2', isAddMail)

    // problem:
    // how do pass the funcion 

      function onCountRead() {
            setCountRead(prevCount => prevCount + 1)
      }

      function onUnCountRead() {
          setCountUnRead(prevCount => prevCount + 1)
      } 


    function onRemoveMail(mailId) {

      mailService.remove(mailId)
            .then(() => {
                setMails(mails => mails.filter(mail => mail.id !== mailId))
            })
            .catch(err => {
                console.log('err:', err)
            })
    }

  useEffect(() => {
    console.log('loadMails active')
    loadMails()
   }, [filterBy, isReadRedioCheck, isUnReadRedioCheck])
   
   useEffect(() => {
    setCountRead(0)
    setCountUnRead(0)
   }, [isReadRedioCheck, isUnReadRedioCheck])


   // note:
   // check the data in filter
   // data need to boolean
  function loadMails() {
     mailService.mailQuery(filterBy)
      .then(mails => {
        console.log('mails list' ,mails)
        setMails(mails)
      }  
      )
      .catch(err => console.log('err:', err))
  }

  // task: update state
  function onUnReadRedioCheck(bolean) {
    // probelm:
    // what is data state?
    // how do i change the data

    // what is the parameter
    // how do i update the the state
    
    // probelm:
    // what is the data type?
    // how do i update it

    // plan:
    // check the data type
    // check what is the dat that is update
      setIsUnReadRedioCheck(bolean)
  }

  function onIsReadRedioCheck(bolean) {
    
    setIsReadRedioCheck(bolean)
  }

  
  function onSetFilter(filterBy) { // ex: {txt:'asd'}
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))
    }
  
   // problem:
   // were is the function acttive?
   // in what comp?

   // i need to know what to pass
   //
   return (
    <div className="main">
        <MailFilter 
        filterObj={filterBy}
        onSetFilter={onSetFilter}
        onUnReadRedioCheck={onUnReadRedioCheck}
        onIsReadRedioCheck={onIsReadRedioCheck}
        isReadRedioCheck={isReadRedioCheck}
        isUnReadRedioCheck={isUnReadRedioCheck}
        onAddMail={onAddMail}
        />
      <MailList 
      mailsList={mails} 
      onUnReadRedioCheck={onUnReadRedioCheck}
      onIsReadRedioCheck={onIsReadRedioCheck}
      isReadRedioCheck={isReadRedioCheck}
      isUnReadRedioCheck={isUnReadRedioCheck}
      onCountRead={onCountRead}
      onUnCountRead={onUnCountRead}
      countRead={countRead}
        countUnRead={countUnRead}
        onRemoveMail={onRemoveMail}
      />
      {isAddMail && <SendMail />}
    </div>
  )
}

export default MailIndex
