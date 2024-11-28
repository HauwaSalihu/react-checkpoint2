import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Player(props) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.nationality}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.age}</ListGroup.Item>
        <ListGroup.Item>{props.team}</ListGroup.Item>
        <ListGroup.Item>{props.jerseyNumber}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Player;
