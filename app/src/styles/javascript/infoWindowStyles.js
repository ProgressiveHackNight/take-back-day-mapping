import { MARKER_DIAMETER, MARKER_HOVER_WIDTH, MARKER_HOVER_HEIGHT } from './mapMarkerStyles';

const infoWindowStyle = {
  position: 'absolute',
  right: -MARKER_DIAMETER + MARKER_HOVER_WIDTH,
  bottom: -MARKER_DIAMETER + MARKER_HOVER_HEIGHT * 1.2,
  width: 160,
  height: 60,
  backgroundColor: '#4E83F8',
  zIndex: 1000,
  color: '#fff',
  borderRadius: 4,
  boxShadow:'5px 5px 5px rgba(0,0,0,0.3)',
  padding: 2
};

const infoText = {
	margin: 8
};

const infoContent = {
	flex: '1'
};

const infoContainer = {
	display: 'flex',

};

const rsvpButton = {
	height: 40,
	width: 40,
	alignSelf: 'center',
	backgroundColor: '#fff',
	color: '#4E83F8',
	fontWeight: 'bold',
	borderRadius: 4,
	marginRight: 4,
};

export { infoWindowStyle, infoContainer,infoContent, infoText, rsvpButton };
