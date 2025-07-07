const { useState, useEffect, Fragment } = React
import MailFilter  from '../cmps/MailFilter.jsx'
 
import MailList from '../cmps/MailList.jsx'
import { mailService } from "../services/mail.service.js"

function MailIndex() {
  const [mails, setMails] = useState(null)
  const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
 const [isReadRedioCheck, setIsReadRedioCheck] = useState(false)
    const [isUnReadRedioCheck, setIsUnReadRedioCheck] = useState(false)
    const [countRead, setCountRead] = useState(0)
      const [countUnRead, setCountUnRead] = useState(0)
    
      function onCountRead() {
            setCountRead(prevCount => prevCount + 1)
      }

      function onUnCountRead() {
          setCountUnRead(prevCount => prevCount + 1)
      } 


    function onRemoveMail(mailId) {
      console.log('enter onRemoveMail')
        mailService.remove(mailId)
            .then(() => {
                setMails(mails => mails.filter(mail => mail.id !== mailId))
            })
            .catch(err => {
                console.log('err:', err)
            })
    }

  useEffect(() => {
    
    loadMails()
   }, [filterBy, isReadRedioCheck, isUnReadRedioCheck])
   
   useEffect(() => {
    setCountRead(0)
    setCountUnRead(0)
   }, [isReadRedioCheck, isUnReadRedioCheck])

  function loadMails() {
     mailService.mailQuery(filterBy)
      .then(mails => setMails(mails)   
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
    <Fragment>
        <MailFilter 
        filterObj={filterBy}
        onSetFilter={onSetFilter}
        onUnReadRedioCheck={onUnReadRedioCheck}
        onIsReadRedioCheck={onIsReadRedioCheck}
        isReadRedioCheck={isReadRedioCheck}
        isUnReadRedioCheck={isUnReadRedioCheck}
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
    </Fragment>
  )
}

export default MailIndex
