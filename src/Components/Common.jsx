import React from 'react'
import "./Common.css"

const Common = () => {
  return (
    <div>
      <div style={{ height: "100px" }}>
        <p style={{ fontSize: "30px", position: "relative", left: "100px", }}>TECH FOR TEENS - A RUBIXE INITIATIVE</p>
      </div>
      <div className='cards'>
        <div className='first_card'>
          <div id='head-1'><p style={{ backgroundColor: "white", width: "30px", borderRadius: "50%", position: 'relative', left: "80px", bottom: "-10px", fontSize: "20px", fontWeight: "bold" }}>01</p></div>
          <img src="https://i.pinimg.com/736x/d6/7a/91/d67a91bfe9061f7698b5133bdec193ca.jpg" alt="not found" width={60} />
          <li type="none">
            Introduction AI to
            children in an age
            appropriate
            manner
          </li>

        </div>
        <div className='second_card'>
          <li type="none">
            Gain awareness
            AI and build an
            interactive story
            around it
          </li>
          <img src="https://www.clipartmax.com/png/middle/124-1248944_the-future-of-ai-artificial-intelligence-logo.png" alt="" width={118} />
          <div id='head-2'>
            <p style={{ backgroundColor: "white", width: "30px", borderRadius: "50%", position: 'relative', left: "80px", bottom: "-10px", fontSize: "20px", fontWeight: "bold" }}>02</p>
          </div>
        </div>
        <div className='third_card'>
          <div id='head-3'><p style={{ backgroundColor: "white", width: "30px", borderRadius: "50%", position: 'relative', left: "80px", bottom: "-10px", fontSize: "20px", fontWeight: "bold" }}>03</p></div>
          <img src="https://www.kindpng.com/picc/m/186-1862572_noun-machine-learning-1927723-ai-logo-png-transparent.png" alt="" width={80} />
          <li type="none">
            Acquire
            programming skills
            in a user-friendly
            format
          </li>
        </div>
        <div className='fourth_card'>
          <li type="none" >
            Exposure to <br />
            mini projects on
            diverse topics
          </li>
          <img src="https://static.vecteezy.com/system/resources/previews/004/619/889/original/hr-management-color-icon-teamwork-human-resources-business-mechanism-isolated-illustration-vector.jpg" alt="" width={80} />
          <div id='head-4'>
            <p style={{ backgroundColor: "white", width: "30px", borderRadius: "50%", position: 'relative', left: "80px", bottom: "-10px", fontSize: "20px", fontWeight: "bold" }}>04</p>
          </div>
        </div>
        <div className='five_card'>
          <div id='head-5'><p style={{ backgroundColor: "white", width: "30px", borderRadius: "50%", position: 'relative', left: "80px", bottom: "-10px", fontSize: "20px", fontWeight: "bold" }}>05</p></div>
          <img src="https://e7.pngegg.com/pngimages/643/378/png-clipart-classroom-teacher-computer-icons-student-teacher-class-logo.png" alt="" width={100} /><br /><br />
          <li type="none">
            Train the teachers
            programme
          </li>

        </div>
      </div>
    </div>
  )
}

export default Common