import {RiComputerLine} from 'react-icons/ri'
import { ILanguage, IService, Iproject, category } from './Type'
import {AiFillBoxPlot,AiTwotoneCheckCircle,AiFillApple,AiFillGitlab,AiFillSwitcher,AiOutlineAreaChart,AiOutlineCodepenCircle,AiOutlineDropbox} from 'react-icons/ai'
export const Service:IService[]=[
    {
        title:'Frontend Development ',
        about:"Xây dựng phía server với ngôn ngữ nodejs theo mô hình MVC,API sử dụng Express và những framwork phổ biến ",
        Icon:AiFillBoxPlot
    },
    {
        title:'Backend Development',
        about:"Xây dựng phía server với ngôn ngữ nodejs theo mô hình MVC,API sử dụng Express và những framwork phổ biến ",
        Icon:AiFillSwitcher
    },
    {
        title:'Frontend Development',
        about:"Thành thạo lập trình app  với react-native ,tailwindcss và một số framwork phổ biến khác  ",
        Icon:AiFillApple
    },
    {
        title:'Database ',
        about:"Hiểu và biết sử dụng một số cơ sở dữ liệu như mongodb và sql để lưu trữ dữ liệu ",
        Icon:AiOutlineAreaChart
    },
    {
        title:'UI/UX Design',
        about:"Biết vận dụng phầm mềm figma để thiết kế một số giao diện cơ bản",
        Icon:AiOutlineCodepenCircle
    },
    {
        title:'Project management',
        about:"Sử dụng source tree và github để quản lý là lưu trữ code trong quá trình làm việc ",
        Icon:AiFillGitlab
    }
]

export const Languages:ILanguage[]=[{
    name:'Javscript',
    level:"80%",
    Icon:AiTwotoneCheckCircle
},
{
    name:'Reactjs & Tailwindcss',
    level:"70%",
    Icon:AiTwotoneCheckCircle
}
,
{
    name:'React navtive',
    level:"60%",
    Icon:AiTwotoneCheckCircle
}
,
{
    name:'Redux',
    level:"60%",
    Icon:AiTwotoneCheckCircle
},
{
    name:'Express & Mongodb',
    level:"90%",
    Icon:AiTwotoneCheckCircle
}
]


export const Tooll:ILanguage[]=[{
    name:'Visualcode',
    level:"90%",
    Icon:AiTwotoneCheckCircle
},
{
    name:'Netbean',
    level:"60%",
    Icon:AiTwotoneCheckCircle
}
,
{
    name:'Eclisp',
    level:"70%",
    Icon:AiTwotoneCheckCircle
}
,
{
    name:'Figma',
    level:"80%",
    Icon:AiTwotoneCheckCircle
},

]


// export interface Iproject{
//     name:String ,
//     description:String,
//     image:String,
//     pathgithub:String,
//     category:String[],
//     key_techt:String[]

// }


export const ProjectData:Iproject[]=[
{
    name:"website bán kem  ",
    description:"Website bán hàng với nhiều chức năng cho admin và khách hàng có thể mua hàng một cách dễ dàng ",
    image:"https://assets-global.website-files.com/5b682d255fc94ca52c48fa0d/5c64eb9ebdc30902ce14c17f_Asset%203.png",
    pathgithub:"data/image",
    category:["react"],
    key_techt:['reactjs ','mongodb','socketIo','nodejs']
},
{
    name:"website bán nông sản  ",
    description:"Website bán hàng với nhiều chức năng cho admin và khách hàng có thể mua hàng một cách dễ dàng  ",
    image:"https://webquynhon.net/wp-content/uploads/2019/01/thietkeweb.jpg",
    pathgithub:"data/image",
    category:["react"],
    key_techt:['reactjs ','mongodb','socketIo','nodejs','redux tokit']
},
{
    name:"website bán đồng hồ  ",
    description:"Website bán hàng với nhiều chức năng cho admin và khách ",
    image:"https://skyvietnam.com.vn/uploads/images/website-dong-ho8.jpg",
    pathgithub:"data/image",
    category:["mongodb"],
    key_techt:['react-navtive ','mongodb','socketIo','nodejs']
},
{
    name:"website bán cà phê ",
    description:"Website bán hàng với nhiều chức năng cho admin và khách hàng có thể mua hàng một cách dễ dàng  ,admin có thể dễ dàng quản lý đơn hàng sản phẩm và khách hàng ",
    image:"https://webdoctor.vn/wp-content/uploads/2018/05/tong-hop-cac-giao-dien-website-ban-hang-dep-nhat-20182.jpg",
    pathgithub:"data/image",
    category:["mongodb"],
    key_techt:['reactjs ','mongodb','socketIo','nodejs']
},

{
    name:"website tin tức ",
    description:"Website bán hàng với nhiều chức năng cho admin và khách hàng có thể mua hàng một cách dễ dàng  ,admin có thể dễ dàng quản lý đơn hàng sản phẩm và khách hàng ",
    image:"https://thietkewebnhanh247.com/wp-content/uploads/2020/10/the-zine-theme.jpg",
    pathgithub:"data/image",
    category:["nodejs"],
    key_techt:['reactjs ','mongodb','socketIo','nodejs']
},

{
    name:"website bán máy tính ",
    description:"Website bán hàng với nhiều chức năng cho admin và khách hàng có thể mua hàng một cách dễ dàng  ,admin có thể dễ dàng quản lý đơn hàng sản phẩm và khách hàng ",
    image:"https://www.giaonhan247.com/wp-content/uploads/2022/05/amazon-min.png",
    pathgithub:"data/image",
    category:["nodejs"],
    key_techt:['reactjs ','mongodb','socketIo','nodejs']
},

]

