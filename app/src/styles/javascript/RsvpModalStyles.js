const modal = {
    display: 'block', /* Hidden by default */
    position: 'fixed', /* Stay in place */
    zIndex: '1', /* Sit on top */
    left: '0',
    top: '0',
    width: '100%', /* Full width */
    height: '100%', /* Full height */
    overflow: 'auto', /* Enable scroll if needed */
    backgroundColor: 'rgb(0,0,0)', /* Fallback color */
    backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
};

const modalHidden = {
    display: 'none', /* Hidden by default */
    position: 'fixed', /* Stay in place */
    zIndex: '1', /* Sit on top */
    left: '0',
    top: '0',
    width: '100%', /* Full width */
    height: '100%', /* Full height */
    overflow: 'auto', /* Enable scroll if needed */
    backgroundColor: 'rgb(0,0,0)', /* Fallback color */
    backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
};

const modalContent = {
    backgroundColor: '#fefefe',
    margin: '15% auto', /* 15% from the top and centered */
    padding: '20px',
    border: '1px solid #888',
    width: '80%' /* Could be more or less, depending on screen size */
};

const modalHeader = {
    padding: '2px 16px',
    backgroundColor: '#5cb85c',
    color: 'white',
};

const close = {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
};


export { modal, modalHidden ,modalContent, modalHeader, close};