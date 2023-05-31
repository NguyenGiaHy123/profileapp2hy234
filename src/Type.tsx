import { type } from "os"
import { IconType } from "react-icons"
export interface NavItem{
    activeItem:String,
    setActiveItem:Function,
    name:String,
    route:String
}

export interface IService{
    title:String,
    about:String,
    Icon:IconType

}

export interface ILanguage{
    name:String,
    level:String,
    Icon:IconType
}
export interface Icorlor{
    theme:String,
    setTheme:Function
}
export interface Iproject{
    name:String ,
    description:String,
    image:String,
    pathgithub:String,
    category:String[],
    key_techt:String[]

}

export type category ='react'|'mongodb'|'nodejs'