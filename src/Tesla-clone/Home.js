import React from 'react'
import Header from './Header'
import Section from './Section'

function Home() {
  return (
    <>
      <Header />
      <Section
         
         name= 'Model 3'
         tagline = 'Order Online for Touchless Delivery'
         leftbtn = 'Custom Order'
         rightbtn = 'Existing Inventory'
         arrow = {true}
         backgraund = "Model-3.jpg"

      />
      <Section
         
         name= 'Model Y'
         tagline = 'Order Online for Touchless Delivery'
         leftbtn = 'Custom Order'
         rightbtn = 'Existing Inventory'
         backgraund = "Model-Y.avif"

      />
      <Section
         
         name= 'Model S'
         tagline = 'Order Online for Touchless Delivery'
         leftbtn = 'Custom Order'
         rightbtn = 'Existing Inventory'
         backgraund = "Model-S.avif"

      />
      <Section
         
         name= 'Model X'
         tagline = 'Order Online for Touchless Delivery'
         leftbtn = 'Custom Order'
         rightbtn = 'Existing Inventory'
         backgraund = "Model-X.avif"
         

      />
      <Section
         
         name='Solar Panels'
         tagline = 'Lower Cost Solar Panels in India'
         leftbtn = 'Order Now'
         rightbtn = 'Learn More'
         backgraund = "SolarPanels.avif"

      />
      <Section
         
         name= 'Solar Roof'
         tagline = 'Produce Clean Energy from your roof'
         leftbtn = 'Order Now'
         rightbtn = 'Learn More'
         backgraund = "Homepage-SolarRoof.avif"

      />
      <Section
         
         name='Accessories'
         leftbtn = 'Order Now'
         backgraund = "Desktop_Accessories.avif"

      />
    
    </>
  )
}

export default Home