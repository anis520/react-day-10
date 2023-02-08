import "./Side.scss";
import { MdHomeFilled, MdOutlineAddBox } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import {BsThreeDots ,BsFillBookmarkFill} from "react-icons/bs";
 import {
  FaRegCompass,
  FaMoon,
  FaRegImage,
  FaBars,
  FaVideo,
  FaFacebookMessenger,
  FaRegHeart,
} from "react-icons/fa";
import { FiSearch, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

function Side() {
  const [add, setadd] = useState("");
  const [dark, setdark] = useState("");
  const[postdata,setpostdata]=useState([])
  const[input,setinput]=useState({

       title:'',
       photo:'',
       edit:''




  })

 


  useEffect(() => {
    axios.get('http://localhost:5050/post?_sort=id&_order=desc').then((res)=>{
    
    console.table(res.data)
    setpostdata(res.data)
    
    
  })
  },[add]);

const handleinput=(e)=>{


    setinput((prevstate)=>({

         ...prevstate,
           
        [e.target.name]:e.target.value
        



    }))


}

const handlesubmit=(e)=>{

if(input.edit){
  e.preventDefault() 
  axios.put(`http://localhost:5050/post/${input.edit}`,input).then(res=>{


    postdata(res.data)


  })
  setadd('')
  setinput({
    title:'',
    photo:''

    
  })
}else{
  e.preventDefault() 
  axios.post('http://localhost:5050/post',input).then(res=>{


    postdata(res.data)


  })
  setadd('')
  setinput({
    title:'',
    photo:''

    
  })
}




}




// edite handeler
const handledit=(e)=>{

 const id=e.target.id
 const editData= postdata.find(x => x.id == id)
console.log(editData)

  setadd('show')
  setinput({

    title:editData.title,
    photo:editData.photo,
    edit:id


  })
}

// deletehandeler


const handldelete=(e)=>{
  const id=e.target.id

  axios.delete(`http://localhost:5050/post/${id}`).then(res=>{


    postdata(res.data)


  })
 
  setadd('5')

}



 
  return (
    <>
      <div className={`mode ${dark}`}>
        <div className={`add ${add}`}>
          <div className="main">
            <div className="then">
              <p>Create new post</p>
              <hr />

                <form action="" onSubmit={handlesubmit}>
                  
              <div>

                <label  htmlFor="img">Photo link</label>
                <input onChange={handleinput}  name="photo" value={input.photo} type="text" id="img" />
              </div>
              <div>
                <label htmlFor="title">Title your</label>
                <input name="title" onChange={handleinput} value={input.title} type="text" id="title" />
              </div>
              <FaRegImage className="logoimg"></FaRegImage>
              <button type="submit"
                 
              >
                Upload
              </button>
                  </form>    
            </div>

            <MdClose
              className="bu"
              onClick={(e) => {
                setadd("");setinput({
                  title:'',
                  photo:''
              
                  
                })
              }}
            ></MdClose>
          </div>
        </div>
        <div className="side">
          <p className="logo">Instagram</p>
          {/* <FiToggleLeft></FiToggleLeft>
             <FiToggleRight></FiToggleRight> */}
          <div className="logo_div">
            <p className="active">
              <MdHomeFilled></MdHomeFilled>
              <span>Home</span>
            </p>
            <p>
              <FiSearch></FiSearch>
              <span>Search</span>
            </p>
            <p>
              <FaRegCompass></FaRegCompass>
              <span>Explore</span>
            </p>
            <p>
              <FaVideo></FaVideo>
              <span>Reels</span>
            </p>
            <p>
              <FaFacebookMessenger></FaFacebookMessenger>
              <span>Messages</span>
            </p>
            <p>
              <FaRegHeart></FaRegHeart>
              <span>notifications</span>
            </p>

            <p onClick={(e) => setadd("show")}>
              <MdOutlineAddBox></MdOutlineAddBox>
              <span>Create</span>
            </p>
            <p className="more">
              <FaBars></FaBars>
              <span>More</span>
            </p>
          </div>
        </div>

        <div className="body">
          <div className="story">
            <div className="div">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png"
                alt=""
              />

              <p>Anisul hoque</p>
            </div>
            <div className="div">
              <img
                src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-13.png"
                alt=""
              />

              <p>Ansi520</p>
            </div>
            <div className="div">
              <img
                src="https://www.vitrine.ro/wp-content/uploads/2017/01/team-member-2-550x550.jpg"
                alt=""
              />

              <p>hoque22</p>
            </div>
            <div className="div">
              <img
                src="https://www.ultimatebeaver.com/wp-content/uploads/2021/04/photo-gallery-img-02.jpg"
                alt=""
              />

              <p>Tanim</p>
            </div>
            <div className="div">
              <img
                src="https://api.wpmet.com/auth/wp-content/uploads/2021/04/team_8.jpg"
                alt=""
              />

              <p>Maruful</p>
            </div>
          </div>





{/* post start */}


        {postdata.map((item,index)=>(


        <div className="post" key={index}>

                     <div className="head">


                         <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                         <p className="name">anis520</p>
                         <p   
                          className="icons"><BsThreeDots>
                            </BsThreeDots>
                            <ul className="ul">
                              <li id={item.id}  onClick={handledit}>Edit</li>
                              <li id={item.id} onClick={handldelete} >Delete</li>
                            </ul>
                            
                            
                            </p>

                     </div>
                     <div className="bodys">

                         <img src={item.photo} alt="" />

                     </div>
                     <div className="footer">
                          
                          <div className="re">
                          <FaRegHeart></FaRegHeart>
                          <FaFacebookMessenger></FaFacebookMessenger>
                          <FiSend></FiSend>
                          <BsFillBookmarkFill className="last"></BsFillBookmarkFill>
                          </div>

                           <div className="ti">
                            <p>{item.title}</p>
                           </div>
                           <div className="co">
                            <input type="text" placeholder="Add a comment..." />
                           </div>
                                 
                     </div>



          </div>


        ))}



        
  
 
 
          





{/* post end */}

        </div>

        <div className="info">
          


          {dark === "" ? (
            <FaMoon
              className="icon"
              onClick={(e) => {
                setdark("dark");
              }}
            ></FaMoon>
          ) : (
            <FiSun
              className="icon"
              onClick={(e) => {
                setdark("");
              }}
            ></FiSun>
          )}
                 <div className="me">
                      <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                       <div>
                        <p>anis520</p>
                        <p>Anisulhoque</p>
                       </div>
                 </div>
                 <div>
                   <p className="sug">Suggestions for you</p>
                 </div>






        </div>
      </div>
    </>
  );
}

export default Side;
