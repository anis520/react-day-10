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
import { useState } from "react";

function Side() {
  const [add, setadd] = useState("");
  const [dark, setdark] = useState("");

  return (
    <>
      <div className={`mode ${dark}`}>
        <div className={`add ${add}`}>
          <div className="main">
            <div className="then">
              <p>Create new post</p>
              <hr />

              <div>
                <label htmlFor="img">Photo link</label>
                <input type="text" id="img" />
              </div>
              <div>
                <label htmlFor="title">Title your</label>
                <input type="text" id="title" />
              </div>
              <FaRegImage className="logoimg"></FaRegImage>
              <button
                onClick={(e) => {
                  setadd("");
                }}
              >
                Upload
              </button>
            </div>

            <MdClose
              className="bu"
              onClick={(e) => {
                setadd("");
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






          <div className="post">

                     <div className="head">


                         <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                         <p className="name">Name</p>
                         <p   
                          className="icons"><BsThreeDots></BsThreeDots></p>

                     </div>
                     <div className="bodys">

                         <img src="https://freedesignfile.com/upload/2020/10/Islamic-background-design-mosque-window-with-light-shadow-vector.jpg" alt="" />

                     </div>
                     <div className="footer">
                          
                          <div className="re">
                          <FaRegHeart></FaRegHeart>
                          <FaFacebookMessenger></FaFacebookMessenger>
                          <FiSend></FiSend>
                          <BsFillBookmarkFill className="last"></BsFillBookmarkFill>
                          </div>

                           <div className="ti">
                            <p>Hello world</p>
                           </div>
                           <div className="co">
                            <input type="text" placeholder="Add a comment..." />
                           </div>
                                 
                     </div>



          </div>
  
          <div className="post">

                     <div className="head">


                         <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                         <p className="name">Name</p>
                         <p   
                          className="icons"><BsThreeDots></BsThreeDots></p>

                     </div>
                     <div className="bodys">

                         <img src="https://freedesignfile.com/upload/2020/10/Islamic-background-design-mosque-window-with-light-shadow-vector.jpg" alt="" />

                     </div>
                     <div className="footer">
                          
                          <div className="re">
                          <FaRegHeart></FaRegHeart>
                          <FaFacebookMessenger></FaFacebookMessenger>
                          <FiSend></FiSend>
                          <BsFillBookmarkFill className="last"></BsFillBookmarkFill>
                          </div>

                           <div className="ti">
                            <p>Hello world</p>
                           </div>
                           <div className="co">
                            <input type="text" placeholder="Add a comment..." />
                           </div>
                                 
                     </div>



          </div>
  
          <div className="post">

                     <div className="head">


                         <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" />
                         <p className="name">Name</p>
                         <p   
                          className="icons"><BsThreeDots></BsThreeDots></p>

                     </div>
                     <div className="bodys">

                         <img src="https://freedesignfile.com/upload/2020/10/Islamic-background-design-mosque-window-with-light-shadow-vector.jpg" alt="" />

                     </div>
                     <div className="footer">
                          
                          <div className="re">
                          <FaRegHeart></FaRegHeart>
                          <FaFacebookMessenger></FaFacebookMessenger>
                          <FiSend></FiSend>
                          <BsFillBookmarkFill className="last"></BsFillBookmarkFill>
                          </div>

                           <div className="ti">
                            <p>Hello world</p>
                           </div>
                           <div className="co">
                            <input type="text" placeholder="Add a comment..." />
                           </div>
                                 
                     </div>



          </div>
  
 
          





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






        </div>
      </div>
    </>
  );
}

export default Side;
