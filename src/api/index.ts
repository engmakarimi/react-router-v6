import books from './books.json'

export const getCatagoriesName=()=>{
  const Catagories = books.map( p => p.category)
   return [...new Set(Catagories)];  
}
export const getBooks =(category:string) => {
   
   return books.filter( p => p.category === category)
}
export const getBookDetails=(bookId:string)=>{

    return books.find( p => p._id === +bookId)
}