import React from "react"
import devgrub from '../assets/images/devgrub.png';


class AboutPage extends React.Component {
	render() {
		return (
			<div> 
                
				<center>
					<h1> ABOUT ME!!</h1>
					<img src= {devgrub} alt="pic" />
					<p>Posted on 12 March, 2020</p>
                    
					<p> Outfits of the day aren’t the same these days . Even with everything else seeming to slow down, 
					the kids are growing faster than ever. I feel like they have outgrown so much of their clothes,   
					I picked out some loungewear sale pieces to stock up on while they were on sale. (Especially with 
					loungewear, it’s easer to size up for a loose, comfy fit so they can usually get more wear out of it
					 than with other clothes.) Mara and I have been going all out with the tie-dye haha. I’m obsessed with this 
					 sweatshirt we got for her (wishing they had it in my size!). Got this this tee for me! It comes in 4 colors 
					 (I have it in this light blue and black/navy – so good!) and it’s on sale right now for under $20. Also you have 
					 seen these slippers on repeat lately – on sale under $20 and comes in multiple colors, I got the grey and pink too.
					 </p>
					
				</center>
			</div>
		)
	}
}
export default AboutPage;



