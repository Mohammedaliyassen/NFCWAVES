import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './story.css'
function Story(props) {
  const {linkTo, discStory, storyTittle,imgStory}=props
  return (
    <Card style={{ width: '18rem', padding:'0',margin:'30px', borderRadius:'20px', overflow:'hidden'}} className='storyCard'>
      <img variant="top" alt='sss' src={imgStory} />
      <Card.Body>
        <Card.Title style={{color:'#fff'}}>{storyTittle}</Card.Title>
        <Card.Text style={{color:'#fff'}}>
          {discStory}
        </Card.Text>
        <a href={linkTo} style={{color:'#fff'}}><Button variant="primary">Show Me</Button></a>
      </Card.Body>
    </Card>
  );
}

export default Story;