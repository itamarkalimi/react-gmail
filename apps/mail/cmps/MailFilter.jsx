const { useState, useEffect, Fragment } = React

// DOM:
// list of pre mail

// ok - filterObj is created

function MailFilter({ filterObj, onSetFilter,onUnReadRedioCheck, onIsReadRedioCheck,isReadRedioCheck,isUnReadRedioCheck }) {
     // task:
    // update filterObj
    // change read unread
  
    

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterObj })
    

     // update filterObj
    // - every change of state - active function
    useEffect(() => {
        onSetFilter(filterByToEdit)
        
        // do i need the state for every change
    }, [filterByToEdit,isReadRedioCheck, isUnReadRedioCheck])
    
     const { txt } = filterByToEdit
     // - get data from form
    // - update state


    function handleChange({ target }) { 
         
        // get value
        const field = target.name
         let value = target.value
         
        // update value
          switch (target.type) {
          case 'radio':
            
                
                if (field === 'unread') {
                  // problem:
                  // what is the update of the state
                  onIsReadRedioCheck(false)
                  onUnReadRedioCheck(true)

        setFilterByToEdit(prevFilter => ({ ...prevFilter, isRead: false }))
                } 
                else if(field === 'read') {
                  {
                    onUnReadRedioCheck(false)
                    onIsReadRedioCheck(true)

        setFilterByToEdit(prevFilter => ({ ...prevFilter, isRead: true }))
                  }
                }
                break

            case 'text':
                value = target.value

                break
                
        }

         setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
        // update state
         // goal: update filter object
    }

    // get data from form
    
    // problem:
    // g

    // problem:
    // compare filter data read to check statues

    // need data id ischeck

    return (
        <section className="book-filter container">
            <h2>Filter Our Emails</h2>

            <form>               
                <label htmlFor="txt">Search anything</label>
                <input onChange={handleChange} value={txt} name="txt" id="txt" type="text" />
 
            </form>

            <form> 
 
  <label>
    <input type="radio" onChange={handleChange}  name="read" value="read"  
    checked={isReadRedioCheck === true}
    />
    Read
  </label>
  <label>
    <input type="radio" onChange={handleChange} 
    
checked={isUnReadRedioCheck === true}
    name="unread" value="unread" />
    Unread
  </label> 

 </form>

            </section>
    )
}

export default MailFilter
