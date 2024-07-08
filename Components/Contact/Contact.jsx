import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
      <div className="contact">
        
      <form>
        <span>Your Name:*</span>
        <input class='box' type="text" name="name" placeholder="Enter your name" required/>
        <span>Your Email:*</span>
        <input type="email" name="email" placeholder="Enter your email" class="box" required/>
        <span>Your Number:*</span>
        <input type="number" name="number" placeholder="Enter your number " class="box" required/>
        <span>Request:*</span>
        <select name="service" class="box" required>
            <option value="" disabled selected>Select your registration</option>
            <option value="schedule-appointment">Professional Club Registration</option>
            <option value="question-services">Team - 5 Players</option>
            <option value="question-services">Team - 4 Players</option>
            <option value="question-services">Team - 3 Players</option>
            <option value="question-services">Solo - 1 Player</option>
            <option value="question-services">School Club Registration</option>
            <option value="other">Other</option>
            </select>
            <span>Choose Courts:*</span>
            <select name="service" class="box" required>
                <option value="" disabled selected>Select a facility</option>
                <option value="general_dentistry">HoopZone Arena - Interior Court</option>
                <option value="dental-radiography">HoopZone Park - Exterior Court</option>
                <option value="implantology">HoopZone Gym - Interior Gym</option>
                </select>
                <span>Join a team:(optional)</span>
            <select name="service" class="box" required>
                <option value="" disabled selected>Select a team</option>
                <option value="general_dentistry">Julien Leblanc</option>
                <option value="dental-radiography">Charles Hugot</option>
                <option value="implantology">Emma Dupuis</option>
                </select>

                    <span>Booking Date:*</span>
                    <input type="datetime-local" name="date" class="box"/>
                    <button type="submit" className="btn dark-btn">Submit</button>
                    </form>
                    </div>
  )
}

export default Contact
