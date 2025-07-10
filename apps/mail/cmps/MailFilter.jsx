const { useState, useEffect, Fragment } = React

// DOM:
// list of pre mail

// ok - filterObj is created

function MailFilter({ filterObj, onSetFilter,onUnReadRedioCheck, onIsReadRedioCheck,isReadRedioCheck,isUnReadRedioCheck }) {
    // task:
    // update filterObj
    // change read unread
  
    

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterObj })
    
    // problem:
    // check what is the data type in filerObj

     // update filterObj
    // - every change of state - active function
    useEffect(() => {
        onSetFilter(filterByToEdit)
        
        // do i need the state for every change
    }, [filterByToEdit,isReadRedioCheck, isUnReadRedioCheck])
    
     const { txt } = filterByToEdit
     // - get data from form
    // - update state


    function handleCheckboxChangeSubject({ target }) {

    const field = target.name

    console.log('field:', target.checked);
    console.log('Checked:', target.checked); // logs true or false
    setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: target.checked }))
    }

    function handleCheckboxChangeDate({ target }) {

    const field = target.name
    console.log('field:', target.checked);
    console.log('Checked:', target.checked);
    let value = target.checked 

    // problem:
    // take the data to filterObj

    // active sort function
    // active query param

    // logs true or false
    setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value}))

    }


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
 

    // title:
    // active sort function 
    
    // problem: what is the sort data

    // get the data with event function
    // update filter state obj


    return (
        <section className="book-filter container">
            <h2>Filter Our Emails</h2>

            <form>               
                <label htmlFor="txt">Search anything</label>
                <input onChange={handleChange} value={txt} name="txt" id="txt" type="text" />
       <label>
        <label >sortBySubject</label>
        <input
          type="checkbox"
          name="sortBySubject"
          //checked={isSubscribed}
          onChange={handleCheckboxChangeSubject}
        />
        <label>sortByDate</label>
        <input
          type="checkbox"
          name="sortByDate"
          //checked={isSubscribed}
          onChange={handleCheckboxChangeDate}
        />
      </label>

    </form>
 
  
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

 
            </section>
    )
}

export default MailFilter
