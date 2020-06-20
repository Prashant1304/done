import React,{Component} from "react"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Test.css'
// var data = [
//   {
//     id:1,
//     name:"prashant",
//     image:"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
//     discription:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?'
//   },
//   {
//     id:2,
//     name:"sinha",
//     image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
//     discription:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'
//   },
//   {
//     id:3,
//     name:"kumar",
//     image:"https://www.w3schools.com/w3css/img_lights.jpg",
//     discription:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'
//   },
//   {
//     id:4,
//     name:"sunny",
//     image:"https://media.gettyimages.com/photos/colorful-powder-explosion-in-all-directions-in-a-nice-composition-picture-id890147976?s=612x612",
//     discription:'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
//   },
//   {
//     id:5,
//     name:"tezab",
//     image:"https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
//     discription:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
//   }
// ]

class App extends Component {
  // state={
  //   data:data
  // }

  render() {
  return(
    <div>
      <h3>CLIENT</h3>
        <h2>TESTIMONIALS</h2>
        
      <Carousel>
      <div className="width">  
        <div>
      <img className="image" src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt="talkwaker"/>
     <p className="paragraph">CUSTOMER NAME</p>
      </div>
      <div>
      <p className="paragraph">prashant</p>
      <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?</p>
      </div>
      </div>
      <div className="width">
        <img className="image" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="pixabay"/> 
        <p className="paragraph">CUSTOMER NAME</p>
        <p className="paragraph">kumar</p>
        <p className="paragraph">'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock'</p>
      </div>
      <div className="width">
        <img className="image" src="https://www.w3schools.com/w3css/img_lights.jpg" alt="w3school" />
        <p className="paragraph">CUSTOMER NAME</p>
        <p className="paragraph">sinha</p>
        <p className="paragraph">'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.'</p>
      </div>
      <div className="width">
        <img className="image" src="https://media.gettyimages.com/photos/colorful-powder-explosion-in-all-directions-in-a-nice-composition-picture-id890147976?s=612x612" alt="media"/>
        <p className="paragraph">CUSTOMER NAME</p>
        <p className="paragraph">sunny</p>
        <p className="paragraph">'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'</p>
      </div>
      </Carousel>
      </div>
  )
}
}

export default App