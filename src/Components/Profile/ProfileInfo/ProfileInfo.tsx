import React from "react";
import s from "./ProfileInfo.module.css"



const ProfileInfo = () => {
  return (
      <div>
          <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5t_Zh-YU2u2wa5ZH2ynpNv-Va9QeeXNwJGw&usqp=CAU" alt="content"/>
          </div>
          <div className={s.descriptionBlock}>ava + description</div>
      </div>

  )
}
export default ProfileInfo;