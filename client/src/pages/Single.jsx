import React from 'react'
import Edit from "../assets/images/edit.png"
import Delete from "../assets/images/delete.png"
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='Single'>
        <div className="content">c
              <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
          <div className="user">
              <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="info">
              <span>John </span>
              <p>Posted 2 days ago</p>
        </div>

       <div className="edit">
        <Link to={`/write?edit=`}>
        <img src={Edit} alt=''/>
        </Link>       
      
       <div className="delete">
        <Link to={`/delete?edit=`}>
        <img src={Delete} alt=''/>
        </Link>
       </div>
      </div>
      </div>
      <h1>Lorem ipsum gyspum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet. Sit ullam reiciendis rem recusandae rerum ut ipsam assumenda ut dolores nemo et odit sint sit similique eaque. Ut recusandae soluta quo quia temporibus ut magni reprehenderit At dolor nihil.
       Eum aspernatur recusandae 33 fuga voluptatem non labore aliquid. 



    <br/>
    Id quibusdam recusandae nam voluptatum facilis ea ullam delectus ad deserunt magni. Ut consequatur quas id officia officiis ab nulla fugiat et iure voluptatem. Ut illum possimus qui quia consequatur qui accusantium sint.Hic amet exercitationem qui sequi eveniet et perferendis temporibus et laudantium iusto eos quidem omnis non soluta dolor aut quasi omnis. Et explicabo debitis non modi praesentium et officiis dolorum! Est dolorum odit ut velit minus et mollitia blanditiis ab aliquam delectus in officiis minima non quia saepe.
    Lorem ipsum dolor sit amet.
    <br/>
     Sit ullam reiciendis rem recusandae rerum ut ipsam assumenda ut dolores nemo et odit sint sit similique eaque. Ut recusandae soluta quo quia temporibus ut magni reprehenderit At dolor nihil.
    
    <br/>Eum aspernatur recusandae 33 fuga voluptatem non labore aliquid. Id quibusdam recusandae nam voluptatum facilis ea ullam delectus ad deserunt magni. Ut consequatur quas id officia officiis ab nulla fugiat et iure voluptatem. Ut illum possimus qui quia consequatur qui accusantium sint.

Hic amet exercitationem qui sequi eveniet et perferendis temporibus et laudantium iusto eos quidem omnis non soluta dolor aut quasi omnis. Et explicabo debitis non modi praesentium et officiis dolorum! Est dolorum odit ut velit minus et mollitia blanditiis ab aliquam delectus in officiis minima non quia saepe.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single