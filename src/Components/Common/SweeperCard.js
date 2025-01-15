

const SweeperCard = ({item}) => {
    return (
        <div className="container"  style={{
            background: `url(${item.url}) rgba(112, 64, 92, 0.6)`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',

          
          }}>
         <div className="content">
        <div>
        <h5 className="title">{item.title}</h5>
        <p className="description">{item.des}</p>
        </div>
         </div>
            
        </div>
    );
};

export default SweeperCard;