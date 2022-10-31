import { useEffect, useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { GetAllRooms } from "../../services/AdminFacilities";

export function CardRoom() {
  const [post, setPosts] = useState({});
  const [load, setLoading] = useState(false);
  useEffect(() => {
    const loadPost = async () => {
      const response = await GetAllRooms();
      if (response.status === 200) {
        setPosts(response.data);
        setLoading(true);
      }
    };
    loadPost();
  }, []);
  if (load) {
    return loadRooms(post);
  }
  return null;
}
function loadRooms(post) {
  const listItem = post.map((value) => {
    return (
      <Col style={{ color: "white", fontWeight: "700" }}>
        {value.status === "Available" ? (
          <Card
            className="room_id ava_room"
            style={{ width: "10rem", height: "8rem" }}
          >
            <Card.Body>
              <Card.Title>{value.roomNumber}</Card.Title>
              <Card.Text>EMPTY</Card.Text>
              <Badge bg="success">{value.status}</Badge>
            </Card.Body>
          </Card>
        ) : (
          <Card
            className="room_id used_room"
            style={{ width: "10rem", height: "8rem" }}
          >
            <Card.Body>
              <Card.Title>{value.roomNumber}</Card.Title>
              <Card.Text>Used by: {value.isAssignFor}</Card.Text>
              <Badge bg="warning">{value.status}</Badge>
            </Card.Body>
          </Card>
        )}
      </Col>
    );
  });
  return listItem;
}
