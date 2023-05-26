import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = () => (
  <Card>
    <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header>Planet</Card.Header>
      <Card.Meta>
        <span className="date"></span>
      </Card.Meta>
      <Card.Description>
        PLanet Desription
      </Card.Description>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
