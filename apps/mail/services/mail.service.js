import { storageService } from '../../../services/async-storage.service.js'
import { loadFromStorage, makeId, saveToStorage } from "../../../services/util.service.js"


// curr mail service

// what is the goal of service
// 

// curr task:
//1- uploud mails to local
//2- get the data to


// how to upload mail to local


export const mailService = {
    mailQuery,
    getDefaultFilter,
    remove,
    get
}
   
// problem:
// why i need book key in query?

// probelm:
// how the function work


// curr task: define the query algorithem



// problem:
// how to uploud the object to local

// algorithem:

const DATA_KEY = 'mails'

function mailQuery(filterBy) {
     // console.log(filterBy);

    // why do i need key

    // dont i get all the key
    // why i need bookId
    
    // 1- get all data from local
    // return async
    return storageService.query(DATA_KEY).then(mails => {
            // get data from filterBy
            // problem:
            // check what data i need from filterObj
            // s: get the data from
             if (filterBy.txt) {
                // problem:
                // what is the goal of RegExp
                const regExp = new RegExp(filterBy.txt, 'i')

                // algorithem:
                // compare the data from book to data from filterObg data
                mails = mails.filter(mail =>
                    regExp.test(mail.subject) 
                )
             }

            if (filterBy.sortByDate) {
              // how to compare
               console.log('enter filterBy.sortByDate')
              mails = mails.sort((a, b) => a.createdAt - b.createdAt);
            } 

             if (filterBy.sortBySubject) {
              console.log('enter filterBy.sortBySubject')
                mails = mails.sort((a, b) => 
                a.subject.toLowerCase().localeCompare(b.subject.toLowerCase())
                );
             }

            if (!filterBy.isRead) {
              // how to compare
               
              mails = mails.filter(mail => !mail.isRead === !filterBy.isRead)
 
            } else {
              mails = mails.filter(mail => mail.isRead === filterBy.isRead)
            }

            // what is the goal:
            // what is the book data?
            // task:
            // it return the book by list
            
 
            return mails
        })
}

function remove(mailId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(DATA_KEY, mailId)
}

// what is the goal
function getDefaultFilter() {
  return { 
      status: 'inbox/sent/trash/draft', 
      txt: '',  
      sortByDate: false,
      sortBySubject: false,
      isRead: false,  
      isStared: false,  
      lables: ['important', 'romantic'] 
}
}
    

function get(mailId) {
  console.log('storageService.get')
    return storageService.get(DATA_KEY, mailId)
    // what is _setNextPrevBookId
       
}

// function remove(mailId) {
//     // return Promise.reject('Oh No!')
//     return storageService.remove(key, mailId)
// }

// function save(mail) {
//     if (mail.id) {
//         return storageService.put(key, mail)
//     } else {
//         return storageService.post(key, mail)
//     }
// }

// // return filter object - the object that i sort
// function getDefaultFilter() {
//     return { txt: '', minPrice: '' }
// }

// // how to use the filter object

// // what is the data that filterType 


// function _createBook(vendor, speed = 250) {
//     const book = getEmptyBook(vendor, speed)
//     book.id = makeId()
//     return book
// }

// // function that getCategories 
// function getCategories() {
//     return query().then(books =>
//         [...new Set(books.flatMap(book => book.categories))]
//     )
// }

// function getAuthors() {
//     return query().then(books =>
//         [...new Set(books.flatMap(book => book.authors))]
//     )
// }


// function _createBooks() {

//     let books = loadFromStorage(BOOK_KEY)
//     if (!books || !books.length) {

//         books = []
//         for (let i = 0; i < 20; i++) {
//             const book = {
//                 id: utilService.makeId(),
//                 title: utilService.makeLorem(2),
//                 subtitle: utilService.makeLorem(4),
//                 authors: [
//                     authorsList[utilService.getRandomIntInclusive(0, authorsList.length - 1)]
//                 ],
//                 publishedDate: utilService.getRandomIntInclusive(1950, 2024),
//                 description: utilService.makeLorem(20),
//                 pageCount: utilService.getRandomIntInclusive(20, 600),
//                 categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
//                 thumbnail: `BooksImages/${i + 1}.jpg`,
//                 language: "en",
//                 listPrice: {
//                     amount: utilService.getRandomIntInclusive(80, 500),
//                     currencyCode: "EUR",
//                     isOnSale: Math.random() > 0.7
//                 }
//             }
//             books.push(book)
//         }
//         saveToStorage(BOOK_KEY, books)
//     }
//     console.log('books', books)
// }
 

// // init book 
// // why i need that
// function getEmptyBook() {
//     return {

//         title: "",
//         subtitle: utilService.makeLorem(4),
//         authors: [
//             authorsList[utilService.getRandomIntInclusive(0, authorsList.length - 1)]
//         ],
//         publishedDate: "",
//         description: "",
//         pageCount: utilService.getRandomIntInclusive(20, 600),
//         categories: [ctgs[utilService.getRandomIntInclusive(0, ctgs.length - 1)]],
//         thumbnail: `BooksImages/${1}.jpg`,
//         language: "en",
//         listPrice: {
//             amount: utilService.getRandomIntInclusive(80, 500),
//             currencyCode: "EUR",
//             isOnSale: Math.random() > 0.7
//         }
//     }
// }


// function getEmptyReview() {
//     return {
//         fullname: '',
//         rating: '',
//         readAt: ''
//     }
// }

// function mapGoogleBookToAppBook(googleBook) {


//     const info = googleBook.volumeInfo
//     return {
//         id: googleBook.id || utilService.makeId(),
//         title: info.title || 'Untitled',
//         subtitle: info.subtitle || utilService.makeLorem(4),
//         authors: info.authors,
//         publishedDate: info.publishedDate || '',
//         description: info.description || utilService.makeLorem(20),
//         pageCount: info.pageCount || utilService.getRandomIntInclusive(20, 600),
//         categories: info.categories,
//         thumbnail: (info.imageLinks && info.imageLinks.thumbnail) ? info.imageLinks.thumbnail : `BooksImages/${utilService.getRandomIntInclusive(1, 20)}.jpg`,
//         language: info.language || 'en',
//         listPrice: {
//             amount: utilService.getRandomIntInclusive(80, 500),
//             currencyCode: "EUR",
//             isOnSale: Math.random() > 0.7
//         }
//     }
// }
