// Sidebar imports
import{UilEstate,UilClipboardAlt,UilUsersAlt,UilChart,}from "@iconscout/react-unicons";
import { AiOutlineAccountBook,AiOutlineUser } from "react-icons/ai";

// // Recent  Imports
// import img1 from "../imgs/img1.png";
// import img2 from "../imgs/img2.png";
// import img3 from "../imgs/img3.png";

// Sidebar data
export const SidebarData = [
    {
        icon:UilEstate,
        heading:"Dashboard",
    },
    {
        icon: UilUsersAlt,
        heading:"Add Patient",
        
    },
    {
        icon:UilClipboardAlt,
        heading:"Modify",
    },
    {
        icon:UilChart,
        heading:"Delete",
    },
    
];

// Recent Update Data
export const cardsDatas = [
  {
    title: "Add Appointments",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    img:<img src='./patient.jpg'></img>
  },


  {
    title: " Add Patients",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    img:<img src='./patient.jpg'></img>

  },


  
  {
    title: "Modify Patients",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    img:<img src='./patient.jpg'></img>

  },
];





// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Patients",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    icon: <AiOutlineUser size={'3em'}/>,

  },


  {
    title: " Appointments",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 40,
    icon: <AiOutlineAccountBook size={'3em'}/>
  },
];


