import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Khám phá ngay menu</h1>
      <p className='explore-menu-text'>Chọn ngay 1 danh sách gồm những món yêu thích của bạn.Nhiệm vụ của chúng tôi là làm bạn hài lòng,tận hưởng bữa ăn ngon miệng</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu
