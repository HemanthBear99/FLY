import React,{useEffect} from 'react'

import paris from '../../assets/Paris.jpg'
import dubai from '../../assets/Dubai.jpg'
import newYork from '../../assets/NewYork.jpg'



import traveler1 from '../../assets/user (1).jpg'
import traveler2 from '../../assets/user (2).jpg'
import traveler3 from '../../assets/user.jpg'
import Aos from 'aos';
import'aos/dist/aos.css';

// hight order array method called map to display all the data 

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Imelo',
    socialLink:'@imelo9999',
  },
  {
    id: 2,
    destinationImage: newYork,
    travelerImage: traveler2,
    travelerName: 'Galellio',
    socialLink:'@Galellio9999',
  },
  {
    id: 3,
    destinationImage: dubai,
    travelerImage: traveler3,
    travelerName: 'maXus',
    socialLink:'@MisterX',
  },
]



const Travelers = () => {
useEffect(()=>{
  Aos.init({
    duration: 2000
  })
},[])

  return (
    <div className='travelers container section'>
        <div className="sectionContainer">
          <h2 data-aos='fade-down' data-aos-duration='2500' >Top travelers of this month!</h2>

          <div className="travelersContainer grid">

           {
             travelers.map(({id,destinationImage,travelerImage,travelerName,socialLink} )=> {
               return(
                 
                //  {/* single passanger card  */}

                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                <img src={destinationImage} className='destinationImage' />
                
                <div className="travelerDetails">
                  <div className="travelerPicture">
                    <img src={travelerImage} className='travelerImage' />
                  </div>
                  <div className="travelerName">
                    <span>{travelerName}</span>
                    <p>{socialLink}</p>
                  </div>
                </div>
              
              </div>
              )
            })
           }
          </div>
        </div>
    </div>
  )
}

export default Travelers