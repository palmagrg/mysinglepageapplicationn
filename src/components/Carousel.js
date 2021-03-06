import React from 'react';
import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';

import Card from '../components/Card'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';









class Carousel extends React.Component {
    constructor (props)

    {
        super(props);
        this.state= {
            

            items: [
                {
                    id: 0,
                    title: 'Fashion:  Posted on 12 March, 2020. ',
                    subTitle: 'Even with everything else seeming to slow down, the kids are growing faster than ever.',
                    imgSrc: devgrub,
                    link: 'About',
                    selected: false
                    
                },
                {
                    id: 1,
                    title: 'Home Stay',
                    subTitle: 'Ways to style your outfit during quarantine',
                    imgSrc: youtube,
                    link: 'About',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: evverest,
                    link: 'About',
                    selected: false
                },
                
            ]
        }

        }

        handleCardClick = (id, card) => {
            console.log(id);

            let items = [...this.state.items];
    
            items[id].selected = items[id].selected ? false : true;
    
            items.forEach(item => {
                if(item.id !== id) {
                    item.selected = false;
                }
            });
    
            this.setState({
                items
            });
        }
    
    
        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        }

    

    render (){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                {this.makeItems(this.state.items)}

                </Row>
            </Container>
        );
    }
}
export default Carousel;
