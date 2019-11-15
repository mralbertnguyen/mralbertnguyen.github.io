export interface BlogDataType {
    id : string | "",
    name : string | "",
    path : string | "",
    tab_menu? : [TabMenuType] | undefined
}

export interface TabMenuType{
    id : string | "",
    name :string | ""
}

export interface PostItemCardDataType{
    id : string , 
    title : string , 
    desc : string , 
    alt : string , 
    srcBR : string , 
    content : string 
}