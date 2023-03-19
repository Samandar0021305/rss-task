export type RenderProps = {
    RenderRouter:{
        id:number,
        component:React.ReactNode,
        path:string,
        children?:{
         id:number,
          component:React.ReactNode,
          path:string,
        }[]
    }[]
}