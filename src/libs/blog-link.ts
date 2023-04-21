export const getPageLink = (tag:string,page:number) =>{
  return tag ? `/Post/tag/${tag}/page/${page}`:`/Post/${page}/1`
}
// ページネーションの所は一つにして、それぞれのURLに遷移する様にここで書いている
// /Post/tag/blog/page/1