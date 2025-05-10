import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CampsiteCard = ({ campsite }) => {
  return (
    <Card>
      <CardImg
        width="100%"
        /*
        src={props.campsite.image}
        alt={props.campsite.name}*/
        src={campsite.image}
        alt={campsite.name}
      />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CampsiteCard;
