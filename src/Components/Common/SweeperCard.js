

const SweeperCard = ({item,index}) => {
    const {tag:Tags}=item;
    return (
        <div className={`container container-${index}`} 
         style={{
            background: `url(${item?.url}) rgba(112, 64, 92, 0.6)`,
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',
         }}
          >
         <div className="content">
        <div>
        <Tags className="title">{item?.title}</Tags>
        <p className="description">{item?.des}</p>
        </div>
         </div>
            
        </div>
    );
};

export default SweeperCard;