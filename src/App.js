import React,{Component} from "react"
import Addition from "./done/additionGame/addition"
import './App.css';
import Colour from "./done/bagroundColourChanger/changer"
import Bmi from "./done/bmiCalculator/bmi"
import Budget from "./done/budget app/budget"
import Calculator from "./done/calculator/calculator"
import Counter from "./done/counter/counter"
import CourseForm from "./done/createCourseForm/courseForm"
import Weeks from "./done/dayOfWeed/day"
import DigitalClock from "./done/digitalClock/currentTime"
import DropDown from "./done/dropdown/dropdown"
import FlashCard from "./done/flashCard/flashCard"
import Grocery from "./done/grocery/grosery"
import LoneCalculator from "./done/loanCalculator/loan"
import Quotes from "./done/quotes/quotes"
import RandomPerson from "./done/random person/random"
import SweetStore from "./done/sweetStore/sweet"
import Testimonial from "./done/TESTIMONIALS/TESTIMONIALS"
import TipCalculator from "./done/tipCalculator/tipCalculator"
import ToDoist from "./done/todoist/todo"
import WeightConversion from "./done/weightConversion(lb to kg)/conversion"
import WordCount from "./done/wordCount project/count"
import AlertMessage from "./done/alertMessage/alertMsg"
class App extends Component {
  render() {
    return(
      <div>
        <h1><b>project1:-Addition Game</b></h1>
        <Addition/>
        <h1><b>project2:-Baground Colour Changet</b></h1>
        <Colour/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <h1><b>project3:-BMI Calculator</b></h1>
        <br/>
        <Bmi/>
        <h1><b>project4:-Budget</b></h1>
        <Budget/>
        <h1><b>project5:-Calculator</b></h1>
        <Calculator/>
        <h1><b>project6:-Counter</b></h1>
        <Counter/>
        <h1><b>project7:-Course Form</b></h1>
        <CourseForm/>
        <h1><b>project8:-Weeks</b></h1>
        <Weeks/>
        <h1><b>project9:-DigitalClock</b></h1>
        <DigitalClock/>
        <h1><b>project10:-DropDown</b></h1>
        <DropDown/>
        <h1><b>project11:-Flash Card</b></h1>
        <FlashCard/>
        <h1><b>project12:-grocery</b></h1>
        <Grocery/>
        <h1><b>project13:-Loan Calculator</b></h1>
        <LoneCalculator/>
        <h1><b>project14:-Quotes</b></h1>
        <Quotes/>
        <h1><b>project15:-Random Person</b></h1>
        <RandomPerson/>
        <h1><b>project16:-Sweet Store</b></h1>
        <SweetStore/>
        <h1><b>project17:-Testimonial</b></h1>
        <Testimonial/>
        <h1><b>project18:-Tip Calculator</b></h1>
        <TipCalculator/>
        <h1><b>project19:-ToDo List</b></h1>
        <ToDoist/>
        <h1><b>project20:-Weight conversion(lb to kg)</b></h1>
        <WeightConversion/>
        <h1><b>project21:-Word Count</b></h1>
        <WordCount/>
        <h1><b>project22:-Alert Message</b></h1>
        <AlertMessage/>  
     </div>
      )
    }
    }

    export default App
