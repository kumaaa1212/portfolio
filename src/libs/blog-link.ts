export const getPageLink = (tag:string,page:number) =>{
  return tag ? `/Post/tag/${tag}/page/${page}`:`/Post/${page}`
}