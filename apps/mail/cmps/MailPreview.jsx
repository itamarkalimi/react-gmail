// no comp need
// data from props
const { useState, useEffect, Fragment } = React

function MailPreview( { mail, isReadRedioCheck , isUnReadRedioCheck, countRead, countUnRead, onCountRead, onUnCountRead} ) {

  useEffect(() => {
    if (isReadRedioCheck) {
      onCountRead()
    }
    else if (isUnReadRedioCheck) {
      onUnCountRead()
    }
  }, []) 

  // {isReadRedioCheck ? onIsReadRedioCheck() : onUnReadRedioCheck()}
  // what data i need - 
     const { subject, isRead } = mail
    return (
        <article className="mail-preview">
      <span>{isReadRedioCheck ? '✓ read' : '✉ unread'}</span>

           <p>{mail ? subject : 'none'} </p>
        </article>
    )
}

export default MailPreview