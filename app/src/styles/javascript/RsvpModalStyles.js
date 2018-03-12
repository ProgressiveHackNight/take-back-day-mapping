const modal = {
    display: 'block', 
    position: 'fixed', 
    zIndex: '1', 
    left: '0',
    top: '0',
    width: '100%',
    height: '100%', 
    overflow: 'auto', 
    backgroundColor: 'rgb(0,0,0)', 
    backgroundColor: 'rgba(0,0,0,0.4)', 
};

const modalHidden = {
    display: 'none',
    position: 'fixed', 
    zIndex: '1', 
    left: '0',
    top: '0',
    width: '100%', 
    height: '100%', 
    overflow: 'auto', 
    backgroundColor: 'rgb(0,0,0)', 
    backgroundColor: 'rgba(0,0,0,0.4)', 
};

const modalContent = {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    border: '1px solid #888',
    borderRadius: '8px',
    width: '60%',
};

const modalHeader = {
    display: 'flex',
    padding: '2px 16px',
    backgroundColor: '#4E83F8',
    borderTopLeftRadius: '7px',
    borderTopRightRadius: '7px',
    color: 'white',
};

const headerText = {
    flex: '1',
};

const closeModal = {
    color: '#00008b',
    fontSize: '28px',
    fontWeight: 'bold',
};


export { modal, modalHidden ,modalContent, modalHeader,headerText, closeModal};