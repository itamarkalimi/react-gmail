// no comp need
// data from props
const { useState, useEffect, Fragment } = React
const { Link } = ReactRouterDOM

function MailPreview( { mail, isReadRedioCheck , isUnReadRedioCheck, countRead, countUnRead, onCountRead, onUnCountRead, onRemoveMail} ) {

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
     const { subject, isRead, id } = mail
    return (
        <article className="mail-preview">
      <span>{isReadRedioCheck ? '✓ read' : '✉ unread'}</span>

           <p>{mail ? subject : 'none'} </p>
           <button onClick={() => onRemoveMail(mail.id)} >
                            Remove
                        </button> 
                        <Link to={id}>View</Link> 
        </article>
    )
}

export default MailPreview